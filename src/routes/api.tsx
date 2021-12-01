const BASE = `https://api.coinpaprika.com/v1`;


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