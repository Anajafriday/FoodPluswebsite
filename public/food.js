const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav_btn");
const [openBtn, closeBtn] = navBtn.querySelectorAll("button");
const list = document.querySelectorAll(".nav-links");

const navigate = () => {
  nav.classList.toggle("left-1/2");
  [openBtn, closeBtn].map((btns) => btns.classList.toggle("hidden"));
};

navBtn.addEventListener("click", (e) => {
  if (!e.target.classList.contains("hidden")) navigate();
});

list.forEach((list) => {
  list.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.href.split("#").at(1);
    if (!id) return;
    navigate();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  });
});
