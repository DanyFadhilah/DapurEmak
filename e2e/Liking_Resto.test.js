Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#content');

  I.see('Tidak ada resto untuk ditampilkan', '.item-resto__not__found');
});

Scenario('liking one movie', ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.item-resto__not__found');

  I.amOnPage('/');

  I.seeElement('.detail-item a');
  I.click(locate('.detail-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.item-resto');
});

Scenario('unliking one movie', ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.item-resto__not__found');

  I.amOnPage('/');

  I.seeElement('.detail-item a');
  I.click(locate('.detail-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.item-resto');

  I.seeElement('.detail-item a');
  I.click(locate('.detail-item a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada resto untuk ditampilkan', '.item-resto__not__found');
});
