const activityItems = document.querySelectorAll(".activity");

activityItems.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add("show");
  }, index * 300);
});


const copyItems = document.querySelectorAll(".copy-text");

copyItems.forEach(item => {
  item.addEventListener("click", () => {
    const text = item.querySelector("p").innerText;

    navigator.clipboard.writeText(text);

    item.style.opacity = "0.5";

    setTimeout(() => {
      item.style.opacity = "1";
    }, 200);
  });
}); 