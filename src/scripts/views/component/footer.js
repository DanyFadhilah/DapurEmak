class FooterBody extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
          <p>Copyright © 2024 - Dapur Emak</p>
        </footer>
        `;
  }
}

customElements.define('footer-body', FooterBody);
