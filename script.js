const coins = [
  { name: "비트코인", price: 95300000, change: 2.34 },
  { name: "이더리움", price: 4820000, change: -1.12 }
];

const coinList = document.getElementById("coin-list");

coins.forEach(function (coin) {
  const li = document.createElement("li");
  li.textContent = coin.name + " / " + coin.price + "원 / " + coin.change + "%";
  coinList.appendChild(li);
});