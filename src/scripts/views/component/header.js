class HeaderBody extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
      <div class="header__inner">
        <div class="big">
          <img
            src="./images/logo.png"
            alt="logo dapur emak"
            class="header__logo"
            width="80"
          />
          <h1 class="header__title_big">Dapur Emak</h1>
        </div>
        <h1 class="header__title">Dapur Emak</h1>
        <button class="header__hamburger" id="hamburgerButton">☰</button>
        <nav id="navigationDrawer" class="nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#/home">Home</a></li>
            <li class="nav__item"><a href="#/favorite">Favorite</a></li>
            <li class="nav__item">
              <a href="https://github.com/DanyFadhilah" target="_blank"
                >About Us</a
              >
            </li>
          </ul>
        </nav>
        <nav id="drawer-big" class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/home">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://github.com/DanyFadhilah" target="_blank">About Us</a></li>
        </ul>
      </nav>
      </div>
    </header>
        `;
  }
}

customElements.define('header-body', HeaderBody);
