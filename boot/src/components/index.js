export function Button() {
  const button = document.createElement("button");
  button.textContent = "查询";
  button.style.backgroundColor = "#29bece";
  button.style.color = "#fff";
  button.style.border = "none";
  document.body.appendChild(button);
}

export function Input() {
  const input = document.createElement("input");
  input.type = "number";
  document.body.appendChild(input);
}
