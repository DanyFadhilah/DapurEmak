import CONFIG from '../../globals/config';

const restoMain = (resto) => `
<article class="item" id="${resto.id}">
  <p class="location-item" tabindex=0>Kota ${resto.city}</p>
  <img class="item-picture lazyload" crossorigin="anonymous" src="${CONFIG.imageMedium + resto.pictureId}" alt="gambar resto ${resto.name}">
  <div class="detail-item">
    <a href="#" class="link-item"><h3>${resto.name}</h3></a>
    <p class="description-item" tabindex=0>${resto.description}</p>
    <p class="rating-item" tabindex=0>Rating: ${resto.rating}/5.0</p>
    <a href="#/detail/${resto.id}" class="btn__detail__item">Detail</a>
  </div>
</article>
`;

const restoDetail = (resto) => `
<div class="details-container">
    <img crossorigin="anonymous" src="${CONFIG.imageLarge + resto.pictureId}" class="detail-img lazyload" alt="${resto.name}">

    <div class="detail-card">
        <div class="detail-header">
            <h2 class="resto-name">${resto.name}</h2>
            <h3 class="resto-rating">⭐${resto.rating}/5.0</h3>
        </div>

        <div class="detail-body">
            <h3 class="detail-info-resto">Informasi Resto</h3>
            <div class="kategori-resto">
                <h4>Kategori :</h4>
                <p>${resto.categories.map((category) => `${category.name} `).join('')}</p>
            </div>
            <h4>Alamat Restoran</h4>
            <p>${resto.address}, kota ${resto.city}</p>
            <h4>Deskripsi</h4>
            <p>${resto.description}</p>
            <div class="menu-container">
                <div class="menu-makanan">
                    <h4>Menu Makanan</h4>
                    <p>
                        ${resto.menus.foods.map((food) => `
                        <li>${food.name}</li>
                        `).join('')}
                    </p>
                </div>
                <div class="menu-minuman">
                    <h4>Menu Minuman</h4>
                    <p>
                        ${resto.menus.drinks.map((drink) => `
                        <li>${drink.name}</li>
                        `).join('')}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="review-resto">
        <h3 class="review-title">Customer Review</h3>
        <div class="review-container">
            ${resto.customerReviews.map((customerReviews) => `<div class="review-card">
                <h5>${customerReviews.name}</h5>
                <p>${customerReviews.review}</p>
                <p>${customerReviews.date}</p>
            </div>
            `).join('')}
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restoMain,
  restoDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
