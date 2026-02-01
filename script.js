// Cookie for simple user identification
document.cookie = "visited=true; max-age=86400";

// Search filter
function filterProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.getElementById("productList").getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    let text = items[i].innerText.toLowerCase();
    items[i].style.display = text.includes(input) ? "" : "none";
  }
}

// Form validation
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("All fields are required.");
    return false;
  }
  alert("Registration successful!");
  return true;
}