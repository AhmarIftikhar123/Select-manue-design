const Show_Btn = document.getElementById("Show_Btn");
const list = document.querySelector(".list");
const li = document.querySelectorAll("li");
const selected = document.getElementById("selected");

Show_Btn.onclick = () => {
  list.classList.toggle("show");
  Show_Btn.classList.toggle("arrow");
};

for (let list of li) {
  list.addEventListener("click", (e) => {
    let target = e.target.firstElementChild;
    let txt = target.textContent;
    selected.textContent = txt;
    Show_Btn.classList.toggle("arrow");
    e.target.parentElement.classList.toggle("show");
  });
}
