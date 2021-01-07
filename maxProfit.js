const maxProfit = (prices) => {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxprofit += prices[i] - prices[i - 1];
        }
    }
    return maxprofit;
};

const calculate = (prices, s) => {
    if (s >= prices.length) return 0;
    let max = 0;
    for (let start = s; start < prices.length; start++) {
        let maxprofit = 0;
        for (let i = start + 1; i < prices.length; i++) {
            if (prices[start] < prices[i]) {
                let profit =
                    calculate(prices, i + 1) + prices[i] - prices[start];
                if (profit > maxprofit) {
                    maxprofit = profit;
                }
            }
        }
        if (maxprofit > max) max = maxprofit;
    }
    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
