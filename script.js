//const coinList = document.getElementById("coin-list");
fetch("https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
//coins.forEach(function (coin) {
//  const li = document.createElement("li");

//  const market = document.createElement("span");
//  market.textContent = coin.market;

//  const price = document.createElement("span");
//  price.textContent = coin.price.toLocaleString("ko-KR") + "원";

//  const signed_change_rate = document.createElement("span");
//  signed_change_rate.textContent = coin.signed_change_rate + "%";

//  if (coin.signed_change_rate > 0) {
//    signed_change_rate.classList.add("up");
//  } else if (coin.signed_change_rate < 0) {
//    signed_change_rate.classList.add("down");
//  }

//  li.appendChild(market);
//  li.appendChild(price);
//  li.appendChild(signed_change_rate);
//  coinList.appendChild(li);
//});