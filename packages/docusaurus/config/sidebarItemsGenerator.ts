const toProperCase = (string: string): string => {
  const parsedString = string.replace(/-/g, ' ');
  return parsedString.charAt(0).toUpperCase() + parsedString.slice(1);
};

const findOrAddCategory = (itemList, categoryName) => {
  let category = itemList.find((item) => item.type === 'category' && item.label === toProperCase(categoryName));
  if (!category) {
    category = {
      type: 'category',
      collapsible: false,
      label: toProperCase(categoryName),
      items: [],
    };
    itemList.push(category);
  }
  return category.items;
};

const addSidebarItem = (arrayToAddItem, doc) => {
  let sidebarItem;

  if (!doc.frontMatter.sidebar_anchors) {
    sidebarItem = { type: 'doc', id: doc.id, label: doc.title };
  } else {
    sidebarItem = {
      type: 'category',
      label: doc.title,
      link: {
        type: 'doc',
        id: doc.id,
      },
      collapsible: false,
      items: doc.frontMatter.sidebar_anchors.map((anchorItem) => {
        return {
          type: 'link',
          href: `#${anchorItem.anchor}`,
          label: anchorItem.label,
        };
      }),
    };
  }

  arrayToAddItem.push(sidebarItem);
};

const sidebarItemsGenerator = async ({ item, docs }) => {
  let processedDocs = docs;

  // Filter docs by dirname (if present)
  if (item.dirName !== '.') {
    processedDocs = docs.filter((docItem) => {
      return docItem.sourceDirName.split('/')[0] === item.dirName;
    });
  }

  // Order docs by sidebar position and then alphabetically
  processedDocs = processedDocs.sort((a, b) => {
    if (a.sidebarPosition !== b.sidebarPosition) {
      return a.sidebarPosition - b.sidebarPosition;
    }
    return a.title.localeCompare(b.title);
  });

  // Remove the homepage from the sidebar
  const homepageIndex = processedDocs.findIndex((doc) => doc.sourceDirName === '.');
  if (homepageIndex > -1) {
    processedDocs.splice(homepageIndex, 1);
  }

  // Categorize docs by folder
  const sidebarItems = processedDocs.reduce((currentSidebarItemList, doc) => {
    // Get categories from doc's sourceDirName
    const categoryNames = doc.sourceDirName.split('/');
    categoryNames.shift();

    if (categoryNames.length > 0) {
      categoryNames.reduce((currentCategory, categoryName, categoryIndex) => {
        // Find or add category if it does not exist
        const category = findOrAddCategory(currentCategory, categoryName);
        // If all categories are parsed, add doc to the category
        if (categoryIndex === categoryNames.length - 1) {
          addSidebarItem(category, doc);
        }
        return category;
      }, currentSidebarItemList);
    } else {
      // No categories, just add the doc to the sidebar
      addSidebarItem(currentSidebarItemList, doc);
    }
    return currentSidebarItemList;
  }, []);

  return sidebarItems;
};

export default sidebarItemsGenerator;
