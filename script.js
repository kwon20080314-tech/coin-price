const coins = [
  { name: "비트코인", price: 95300000, change: 2.34 },
  { name: "이더리움", price: 4820000, change: -1.12 }
];

const coinList = document.getElementById("coin-list");

coins.forEach(function (coin) {
  const li = document.createElement("li");

  const name = document.createElement("span");
  name.textContent = coin.name;

  const price = document.createElement("span");
  price.textContent = coin.price.toLocaleString("ko-KR") + "원";

  const change = document.createElement("span");
  change.textContent = coin.change + "%";

  if (coin.change > 0) {
    change.classList.add("up");
  } else if (coin.change < 0) {
    change.classList.add("down");
  }

  li.appendChild(name);
  li.appendChild(price);
  li.appendChild(change);
  coinList.appendChild(li);
});