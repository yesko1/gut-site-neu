document.addEventListener("DOMContentLoaded", function() {
    fetchBitcoinPrice();
    fetchFearGreedIndex();
    fetchHashrate();
    fetchBlocktime();
});

function fetchBitcoinPrice() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('price-value').innerText = `$${data.bpi.USD.rate}`;
        });
}

function fetchFearGreedIndex() {
    fetch('https://api.alternative.me/fng/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fear-greed-value').innerText = `${data.data[0].value} - ${data.data[0].value_classification}`;
        });
}

function fetchHashrate() {
    fetch('https://api.blockchain.info/q/hashrate')
        .then(response => response.text())
        .then(data => {
            document.getElementById('hashrate-value').innerText = `${data} TH/s`;
        });
}

function fetchBlocktime() {
    fetch('https://api.blockchain.info/q/interval')
        .then(response => response.text())
        .then(data => {
            document.getElementById('blocktime-value').innerText = `${data} Minuten`;
        });
}
