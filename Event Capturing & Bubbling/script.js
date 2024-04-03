const grandParent = document.getElementById("grand-parent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const btn = document.getElementById("btn");

grandParent.addEventListener(
  "click",
  () => {
    console.log("Grand Parent DIV clicked=====Event Capturing");
  },
  true
);

parent.addEventListener(
  "click",
  () => {
    console.log("Parent DIV clicked=====Event Capturing");
  },
  true
);

child.addEventListener(
  "click",
  () => {
    console.log("child DIV clicked=====Event Capturing");
  },
  { capture: true }
);

btn.addEventListener(
  "click",
  () => {
    console.log("Button clicked=====Event Capturing");
    console.log(
      "========================================================================"
    );
  },
  true
);

grandParent.addEventListener("click", () => {
  console.log("Grand Parent DIV clicked=====Event Bubbling");
});

parent.addEventListener("click", () => {
  console.log("Parent DIV clicked=====Event Bubbling");
});

child.addEventListener("click", (e) => {
  console.log("child DIV clicked=====Event Bubbling");
  e.stopPropagation();
});

btn.addEventListener("click", () => {
  console.log("Button clicked=====Event Bubbling");
});
