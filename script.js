// Pega a URL da página atual
const currentPage = window.location.pathname.split("/").pop(); // pega só o nome do arquivo

// Pega todos os links do menu
const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active"); // adiciona a classe active
  } else {
    link.classList.remove("active"); // remove caso não seja
  }
});

