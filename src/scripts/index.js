import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import './views/component/header';
import './views/component/footer';
import App from './views/app';
import swRegister from './utils/sw-register';

const load = async () => {
  window.addEventListener('load', () => {
    const muatData = document.querySelector('.loader');
    muatData.classList.add('loader-hidden');
    muatData.addEventListener('transitionend', () => {
      if (muatData.parentNode) {
        muatData.parentNode.removeChild(muatData);
      }
    });
  });

  try {
    const app = new App({
      button: document.querySelector('#hamburgerButton'),
      drawer: document.querySelector('#navigationDrawer'),
      content: document.querySelector('#mainContent'),
    });

    window.addEventListener('hashchange', () => {
      app.renderPage();
    });

    window.addEventListener('load', () => {
      app.renderPage();
      swRegister();
    });
  } catch (error) {
    console.log(error);
  }
};

load();
