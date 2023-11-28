import { readFileSync, writeFileSync } from "fs";
import { globSync } from "glob";
import lodash from "lodash";
import RegexTrie from "regex-trie";

const { isPlainObject, merge } = lodash;

const _traverseDeep = (root, parents, current, valueTest, callback) => {
  if (valueTest(current)) {
    callback(parents, current);
  } else if (isPlainObject(current)) {
    Object.entries(current).forEach(([key, value]) => {
      _traverseDeep(root, [...parents, key], value, valueTest, callback);
    });
  }
};

/**
 * We aim to have every design token API documented in a Design Tokens JSON
 * extension property, declaring the token exist and what expected type is.
 *
 * It can easily happen that someone introduces a CSS variable, without also
 * including it in a `tokens.json` definition.
 *
 * This script finds all `tokens.json` files in the code of components,
 * to compile a list of each declared design token.
 * This list is converted to a list with every possible CSS custom property.
 *
 * Stylelint does not have a configuration option where you can define an allow-list
 * of custom properties. The only option is to specify a regular expression with a pattern.
 *
 * Based on the allow list we can generate a regular expression. For example:
 *
 *   rvo-(button-background-color|button-color)
 *
 * With hundreds of possible options and thousands of CSS variables to lint,
 * such a regular expression would have an enormous negative effect on the
 * performance of Stylelint.
 *
 * Since token names are quite hierarchical, they share the start of the string
 * in many cases. To optimize the regular expression, we generate a Trie
 * data structure that contains the entire allow list, and compile it to a regexp:
 *
 *   rvo-(button-(background-color|color)|link-(color|text-decoration))
 *
 * Out of this we generate a stylelintrc.json config file that contains
 * the configuration with such a complicated generated regular expression.
 */

let paths;
try {
  paths = globSync("../../components/**/design-tokens.json");
} catch (error) {
  console.error(error);
}

const files = paths.map((path) => readFileSync(path)).map(JSON.parse);
const tokens = files.reduce(merge, {});
const cssVariables = [];
_traverseDeep(
  tokens,
  [],
  tokens,
  (value) => Object.prototype.hasOwnProperty.call(value, "$extensions"),
  (path, value) => cssVariables.push(path.join("-")),
);

if (!cssVariables.length) {
  console.log("Could not parse any css variables.");
  process.exit();
}

// TODO: Fix this part
const trie = new RegexTrie();
trie.add(cssVariables);
const json = JSON.stringify(
  {
    rules: {
      "custom-property-pattern": `^${trie.toRegExp().source}$`,
    },
  },
  null,
  "  ",
);

writeFileSync("./dist/tokens.stylelintrc.json", json);
