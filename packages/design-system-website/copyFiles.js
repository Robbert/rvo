var fs = require('fs');
var path = require('path');

function copyFileSync(source, target) {
  var targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  var files = [];

  // Check if folder needs to be created or integrated
  var targetFolder = path.join(target, path.basename(source));
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      var curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

if (!fs.existsSync(path.resolve(__dirname, 'dist'))) {
  fs.mkdirSync(path.resolve(__dirname, 'dist'));
}

if (!fs.existsSync(path.resolve(__dirname, 'dist/docs'))) {
  fs.mkdirSync(path.resolve(__dirname, 'dist/docs'));
}

copyFolderRecursiveSync(path.resolve(__dirname, '../storybook/dist/'), path.resolve(__dirname));
copyFolderRecursiveSync(path.resolve(__dirname, '../docusaurus/build/'), path.resolve(__dirname, 'dist', 'docs'));
