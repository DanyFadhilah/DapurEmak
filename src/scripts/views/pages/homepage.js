import TheRestoDbSource from '../../data/resto-data';
import { restoMain } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
        <div class="hero">
          <div class="hero-inner">
            <div class="hero-title">
              <h1>Selamat Datang di Dapur Emak!</h1>
              <p>Jelajahi kuliner nusantara disini!</p>
            </div>
          </div>
        </div>

        <div class="content" id="content">
          <h1 tabindex="0" class="title-content">Explore Restaurant</h1>
          <div class="item-resto" id="item-resto"></div>
        </div>

        <div class="content" id="content">
          <h1 tabindex="0" class="title-content">Restaurant High Rate</h1>
          <div class="item-resto" id="item-resto-high-rate"></div>
        </div>
      `;
  },

  async afterRender() {
    const restaurant = await TheRestoDbSource.restoHomePage();

    const restoContainer = document.querySelector('#item-resto');
    const restoHighRateContainer = document.querySelector('#item-resto-high-rate');

    restaurant.forEach((resto) => {
      restoContainer.innerHTML += restoMain(resto);
      if (resto.rating > 4) {
        restoHighRateContainer.innerHTML += restoMain(resto);
      }
    });
  },
};

export default HomePage;
