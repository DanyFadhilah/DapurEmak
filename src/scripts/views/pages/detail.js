import RestoApiSource from '../../data/resto-data';
import UrlParser from '../../routes/url-parser';
import { restoDetail, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="detail" class="details-position"></div>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoApiSource.restoDetail(url.id);
    const restoContainer = document.querySelector('#detail');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restoContainer.innerHTML = restoDetail(resto);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        description: resto.description,
        rating: resto.rating,
        pictureId: resto.pictureId,
      },
    });
    console.log(resto);
  },
};

export default Detail;
