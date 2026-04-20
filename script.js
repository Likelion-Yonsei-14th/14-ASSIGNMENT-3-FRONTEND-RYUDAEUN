const items = document.querySelectorAll(".activity");

items.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add("show");
  }, index * 300); // 순차적으로 등장
});
