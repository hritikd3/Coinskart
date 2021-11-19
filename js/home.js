window.addEventListener('load', () => {
  const url = 'https://api.coinlore.net/api/tickers/?start=0&limit=10';
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      createTable(result.data);
    })
    .catch((err) => console.log(err));
});

const cryptoDataDiv = document.querySelector('.tradingview-widget-container');
const createTable = (allCryptoData) => {
  let html_markup = `<table class="table table-bordered">
  <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Symbol</th>
        <th scope="col">NameId</th>
        <th scope="col">MKT CAP</th>
        <th scope="col">Change (24hrs)</th>
        <th scope="col">Change (1hr)</th>
        <th scope="col">Change (7days)</th>
        <th scope="col">Perc Change</th>
        <th scope="col">Perc Change</th>
        <th scope="col">Perc Change</th>
    </tr>
  </thead>
    ${allCryptoData
      .map(
        (crypto) => `<tbody>
            <tr>
                <th scope="row">${crypto.rank}</th>
                <td>${crypto.name}</td>
                <td>${crypto.symbol}</td>
                <td>${crypto.nameid}</td>
                <td>${crypto.price_usd}</td>
                <td>${crypto.market_cap_usd}</td>
                <td>${crypto.percent_change_24h}</td>
                <td>${crypto.percent_change_1h}</td>
                <td>${crypto.percent_change_7d}</td>
                <td>${crypto.price_btc}</td>
                <td>${crypto.price_btc}</td>
            </tr>
        </tbody>`
      )
      .join('')}
    </table>`;
  cryptoDataDiv.innerHTML = html_markup;
};

const menuBtn = document.getElementById('menu');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});
