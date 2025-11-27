const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top mc-navbar">
  <div class="container">
    <a class="navbar-brand glitch" href="/" data-text="ANARCHIE">ANARCHIE</a>
    <button class="navbar-toggler mc-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link mc-link" href="/">ACCUEIL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mc-link" href="/regles.html">RÈGLES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link mc-link" href="/rejoindre.html">REJOINDRE</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

document.body.insertAdjacentHTML('afterbegin', navbarHTML);

// Active link handling
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/')) {
        link.classList.add('active');
    }
});
