const coinList = document.getElementById("coin-list");

coins.forEach(function (coin) {
  const li = document.createElement("li");

  const market = document.createElement("span");
  market.textContent = coin.market;

  const price = document.createElement("span");
  price.textContent = coin.price.toLocaleString("ko-KR") + "원";

  const change = document.createElement("span");
  change.textContent = coin.change + "%";

  if (coin.change > 0) {
    change.classList.add("up");
  } else if (coin.change < 0) {
    change.classList.add("down");
  }

  li.appendChild(market);
  li.appendChild(price);
  li.appendChild(change);
  coinList.appendChild(li);
});