const groceryNavigations = [{
  icon: "Carrot",
  title: "Vegetables",
  href: "/products/search/vegetables"
}, {
  icon: "Apple",
  title: "Fruits & Vegetables",
  href: "/products/search/Fruits & Vegetables",
  child: [{
    title: "Fresh Frutes",
    href: "/products/search/Fresh Frutes",
    child: [{
      title: "Pears, apples, quinces",
      href: "/products/search/Pears, apples, quinces"
    }, {
      title: "Peaches, plums, apricots",
      href: "/products/search/Peaches, plums, apricots"
    }, {
      title: "Grapes",
      href: "/products/search/Grapes"
    }]
  }, {
    title: "Fresh Vegetables",
    href: "/products/search/Fresh Vegetables",
    child: [{
      title: "Onion",
      href: "/products/search/Onion"
    }, {
      title: "Potato",
      href: "/products/search/Potato"
    }, {
      title: "Vegetable Pack",
      href: "/products/search/Vegetable Pack"
    }]
  }]
}, {
  icon: "Milk",
  title: "Dariry & Eggs",
  href: "/products/search/Dariry & Eggs"
}, {
  icon: "Breakfast",
  title: "Breakfast",
  href: "/products/search/Breakfast"
}, {
  icon: "Yogurt",
  title: "Frozen",
  href: "/products/search/Frozen"
}, {
  icon: "Honey",
  title: "Organic",
  href: "/products/search/Organic"
}, {
  icon: "Beer",
  title: "Canned Food",
  href: "/products/search/Canned Food"
}, {
  icon: "Snack",
  title: "Coffee & Snacks",
  href: "/products/search/Coffee & Snacks"
}, {
  icon: "Bottle",
  title: "Sauces & Jems",
  href: "/products/search/Sauces & Jems"
}];
export default groceryNavigations;