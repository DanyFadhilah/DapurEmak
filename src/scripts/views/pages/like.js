import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { restoMain } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content" id="content">
        <h1 tabindex="0" class="title-content">Restaurant Favorite</h1>
        <div class="item-resto" id="item-resto"></div>
    </div>
  `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#item-resto');

    restaurant.forEach((resto) => {
      restoContainer.innerHTML += restoMain(resto);
    });
  },
};

export default Like;
