const fruits = ["Apple", "Banana", "Mango", "Orange"];
const list = document.getElementById("fruit-list");

for (let fruit of fruits) {
  let li = document.createElement("li");
  li.textContent = fruit;
  list.appendChild(li);
}
