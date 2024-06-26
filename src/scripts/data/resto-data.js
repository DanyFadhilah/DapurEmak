import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async restoHomePage() {
    const response = await fetch(API_ENDPOINT.HOME_PAGE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restoDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestoDbSource;
