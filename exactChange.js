function checkCashRegister(price, cash, cid) {
  var change = (cash - price).toFixed(2)
  // Here is your change, ma'am.
  let till = cid.reduce((a, b) => a[1] + b[1])

  return { change, till }
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20.0, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90.0],
  ['FIVE', 55.0],
  ['TEN', 20.0],
  ['TWENTY', 60.0],
  ['ONE HUNDRED', 100.0],
])

checkCashRegister(19.5, 20.0, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
])
checkCashRegister(19.5, 20.0, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1.0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
])

/*
console.log()
  let money = {
    penny: {
      value: 0.01,
      amount: 0.00
    },
    nickel: {
      value: 0.05,
      amount: 0.00
    },
    dime: {
      value: 0.10,
      amount: 0.00
    },
    quarter: {
      value: 0.25,
      amount: 0.00
    },
    one: {
      value: 1,
      amount: 0.00
    },
    five: {
      value: 5,
      amount: 0.00
    },
    ten: {
      value: 10,
      amount: 0.00
    },
    twenty: {
      value: 20,
      amount: 0.00
    },
    onehundred: {
      value: 100,
      amount: 0.00
    }  
  };
  
  function loadMoney(arr){
    let name = arr[0].toLowerCase().replace(/ /g, '');
    money[name].amount = Math.round(arr[1] * 100); 
  }
  cid.forEach(loadMoney);

  console.log(money);
  let moneyArr = Object.keys(money);
  let cashInTheDraw = 0;
  moneyArr.forEach(function (item) {
    //cashInTheDraw += money[item].amount;
    cashInTheDraw += money[item].amount;
  });

  cashInTheDraw = cashInTheDraw / 100;
  console.log('cashInTheDraw: ', cashInTheDraw);
  
  if (cashInTheDraw < change){
    console.log('closed');
    return "Insufficient Funds";
  }
  if (cashInTheDraw === change){
    return "Closed";
  }
*/
function value(moneyStr) {
  switch (moneyStr) {
    case 'PENNY':
      return 0.01
    case 'NICKEL':
      return 0.05
    case 'DIME':
      return 0.1
    case 'QUARTER':
      return 0.25
    case 'ONE':
      return 1
    case 'FIVE':
      return 5
    case 'TEN':
      return 10
    case 'TWENTY':
      return 20
    case 'ONE HUNDRED':
      return 100
    default:
      return baseValue
  }
}
function checkCashRegister(price, cash, cid) {
  let change = (cash - price).toFixed(2);
  // Here is your change, ma'am.
  let till = cid.reduce((a, b) => {
  return a + b[1]
  }, 0)
  till = till.toFixed(2)

  if (till < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  if (till == change) {
    return {status: "CLOSED", change:[...cid]}
  }
  let status = 'OPEN'
  const changeArr = [[ 'ONE HUNDRED', 0 ],
  [ 'TWENTY', 0 ],
  [ 'TEN', 0 ],
  [ 'FIVE', 0 ],
  [ 'ONE', 0 ],
  [ 'QUARTER', 0 ],
  [ 'DIME', 0 ],
  [ 'NICKEL', 0 ],
  [ 'PENNY', 0 ] ]
  // reverse arr and remove empty
  const cidRev = cid.reverse()
  
  cidRev.forEach((money, index) => {
    const base = baseValue(money[0])
    let amount = money[1]
    if (change >= base && amount !== 0){
      do{
        changeArr[index][1] = changeArr[index][1] + base
        amount = amout - base
        cidRev[index][1] = amount
      }
    }
  })

  return {status, change: changeArr};
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

function baseValue(moneyStr) {
  switch (moneyStr) {
    case 'PENNY':
      return 0.01
    case 'NICKEL':
      return 0.05
    case 'DIME':
      return 0.1
    case 'QUARTER':
      return 0.25
    case 'ONE':
      return 1
    case 'FIVE':
      return 5
    case 'TEN':
      return 10
    case 'TWENTY':
      return 20
    case 'ONE HUNDRED':
      return 100
    default:
      return null
  }
}
/*
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
*/