
const BASE = `https://api.coinpaprika.com/v1`;
const BASIC = `http://localhost:3002/api/users/`;


export function fetchCoins() {
    return fetch(`${BASE}/coins`).then((response) => response.json()
    );
  }


  export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE}/coins/${coinId}`).then((response) =>
      response.json()
    );
  }
  
  export function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE}/tickers/${coinId}`).then((response) =>
      response.json()
    );
  }

  export function fetchCoinHistory(coinId: string) {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7 * 2;
    return fetch(
      `${BASE}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
    ).then((response) => response.json());
  }

  export function fetchCoinToday(coinId: string) {
    return fetch(`${BASE}/coins/${coinId}/ohlcv/today`).then((response) =>
      response.json()
    );
  }

 export function fetchLogin() {
  return fetch(`${BASIC}/login`).then((response) => response.json()
  );
 }

