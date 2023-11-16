// const categoriesElements = document.querySelectorAll(".item");
// console.log("Number of categories:", categoriesElements.length);

// categoriesElements.forEach((el) => {
// const categoryName = el.firstElementChild.textContent;
// console.log("Category:", categoryName);

// const categoryTypesList = el.lastElementChild;
// const categoryTypesLength = categoryTypesList.children.length;
// console.log("Elements:", categoryTypesLength);
// });



const items = document.querySelectorAll(".item");

console.log("Number of Categories: ", items.length);

items.forEach(item => {
    const header = item.querySelector("h2").textContent;
    const listItem = item.querySelectorAll("li");

    console.log("Category :",header);
    console.log("Elements :", listItem.length);
});