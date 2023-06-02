import './app.css';

const StockForm = addStock => {
  const stockForm = document.querySelector('#stock-form');

  stockForm.addEventListener('submit', e => {
    e.preventDefault();

    // stockForm으로부터 정보를 얻어, addStock에 데이터를 넘겨주세요.
    const formData = formDataToObject(new FormData(stockForm));
    const {
      'stock-name': stockName,
      'buy-price': buyPrice,
      'stock-amount': stockAmount,
      'current-price': currentPrice,
    } = formData;
    addStock(stockName, buyPrice, stockAmount, currentPrice);
    stockForm.reset();
  });
};

function formDataToObject(formData) {
  return Array.from(formData.entries()).reduce(
    (acc, [k, v]) => ((acc[k] = v), acc),
    {}
  );
}

const StockTable = stocks => {
  const stockTable = document.querySelector('.stock-table');
  const tableBody = stockTable.querySelector('.stock-table-body');

  // stocks 데이터를 이용해, tbody 안에 들어갈 태그를 동적으로 만드세요.
  console.log(stocks);
  tableBody.innerHTML = stocks.reduce(
    (acc, { stockName, buyPrice, stockAmount, currentPrice }) => {
      return (
        acc +
        `<tr>
    <td>${stockName}</td>
    <td>${(
      ((Number(currentPrice) - Number(buyPrice)) / Number(buyPrice)) *
      100
    ).toFixed(2)}</td>
    <td>${Math.floor(
      (Number(currentPrice) - Number(buyPrice)) * Number(stockAmount)
    )}</td>
  </tr>`
      );
    },
    ''
  );
};

const StockResult = stocks => {
  const resultTextElement = document.querySelector('.result-text');

  if (stocks.length === 0) {
    resultTextElement.innerText = '종목을\n추가하세요.';
    return;
  }

  let total_buyPrice = 0;
  let total_currentPrice = 0;
  let total_proceeds = 0;
  stocks.forEach(item => {
    total_buyPrice += Number(item.buyPrice);
    total_currentPrice += Number(item.currentPrice);
    total_proceeds +=
      (Number(item.currentPrice) - Number(item.buyPrice)) *
      Number(item.stockAmount);
  });
  const total_rate = (
    ((total_currentPrice - total_buyPrice) / total_buyPrice) *
    100
  ).toFixed(2);
  // 총 수익률과 총 수익금을 계산하여, resultText를 채워주세요.
  resultTextElement.innerText = `현재 총 수익률은 ${total_rate}이며,\n총 수익금은 ${Math.floor(
    total_proceeds
  )}원 입니다.`;
};

const App = () => {
  const stocks = [
    // 테스트 데이터
    // {
    //   stockName: '삼성전자',
    //   buyPrice: 80000,
    //   stockAmount: 8,
    //   currentPrice: 82000,
    // },
    // {
    //   stockName: 'SK하이닉스',
    //   buyPrice: 100000,
    //   stockAmount: 12,
    //   currentPrice: 104000,
    // },
    // {
    //   stockName: '엘리스',
    //   buyPrice: 10000,
    //   stockAmount: 120,
    //   currentPrice: 11000,
    // },
  ];

  // StockTable, StockResult 렌더링 결과를, stock 정보를 바탕으로 계산합니다.
  const render = () => {
    StockTable(stocks);
    StockResult(stocks);
  };

  const addStock = (stockName, buyPrice, stockAmount, currentPrice) => {
    stocks.push({ stockName, buyPrice, stockAmount, currentPrice });
    render();
  };

  StockForm(addStock);
  render();
};

module.exports = App;
