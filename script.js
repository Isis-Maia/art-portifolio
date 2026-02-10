document.addEventListener("DOMContentLoaded", () => {

  /* ---------- MENU ATIVO ---------- */
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "") currentPage = "index.html";

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === currentPage
    );
  });

  /* ---------- MODAL DA GALERIA ---------- */
  const imagens = document.querySelectorAll(".galeria img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  imagens.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });

});
