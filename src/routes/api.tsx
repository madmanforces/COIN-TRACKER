const BASE = `https://api.coinpaprika.com/v1`;


export function fetchCoins() {
    return fetch(`${BASE}/coins`).then((response) => response.json()
    );
  }


export function fetchCoinInfo(coinId=String) {
    return fetch(`${BASE}/Coins/${coinId}`).then((response) => response.json()
    );
}

export function fetchPriceInfo(coinId=String) {
    return fetch(`${BASE}/Coins/${coinId}`).then((response) => response.json()
    );
}