{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener("DOMContentLoaded", function() \{\
    fetchBitcoinPrice();\
    fetchFearGreedIndex();\
    fetchHashrate();\
    fetchBlocktime();\
\});\
\
function fetchBitcoinPrice() \{\
    fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')\
        .then(response => response.json())\
        .then(data => \{\
            document.getElementById('price-value').innerText = `$$\{data.bpi.USD.rate\}`;\
            // Weitere Chart-Logik hier...\
        \});\
\}\
\
function fetchFearGreedIndex() \{\
    fetch('https://api.alternative.me/fng/')\
        .then(response => response.json())\
        .then(data => \{\
            document.getElementById('fear-greed-value').innerText = `$\{data.data[0].value\} - $\{data.data[0].value_classification\}`;\
        \});\
\}\
\
function fetchHashrate() \{\
    fetch('https://api.blockchain.info/q/hashrate')\
        .then(response => response.text())\
        .then(data => \{\
            document.getElementById('hashrate-value').innerText = `$\{data\} TH/s`;\
            // Weitere Chart-Logik hier...\
        \});\
\}\
\
function fetchBlocktime() \{\
    fetch('https://api.blockchain.info/q/interval')\
        .then(response => response.text())\
        .then(data => \{\
            document.getElementById('blocktime-value').innerText = `$\{data\} Minuten`;\
        \});\
\}\
}