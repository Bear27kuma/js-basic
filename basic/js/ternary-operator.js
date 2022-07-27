/**
 * 三項演算子
 */

// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 > 0 ? 'trueです' : 'falseです';
console.log(val1);

const num = 1300;
// const num = '1300';
console.log(num.toLocaleString());

const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100を超えています！' : '許容範囲内です';
}
console.log(checkSum(50, 60));
console.log(checkSum(50, 40));
