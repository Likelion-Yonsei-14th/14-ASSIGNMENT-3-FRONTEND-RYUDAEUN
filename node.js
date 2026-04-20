const email = document.getElementById("email");
const colorSelect = document.getElementById("colorSelect");

colorSelect.addEventListener("change", function(event) {

    console.log(event);

    const selectedColor = event.target.value;

    email.style.color = selectedColor;
});