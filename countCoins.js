function returnWays(amount, coins) {
  var numOfways = [];
  for (var i = 0; i <= amount; i++) {
    numOfways[i] = 0;
  }

  numOfways[0] = 1;

  for (var j = 0; j < coins.length; j++) {
    var coin = coins[j];
    for (var hAmount = coin; hAmount <= amount; hAmount++) {
      var change = hAmount - coin;
      numOfways[hAmount] += numOfways[change];
    }
  }

  return numOfways[amount];
}

var result = returnWays(4, [1, 2, 3]);
console.log(result);
