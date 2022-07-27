/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ['田中', '山田', '鈴木'];
for (let i = 0; i < nameArr.length; i++) {
  console.log(`${i + 1}番目は${nameArr[i]}です`);
}

// mapでは配列の要素を一つずつ取り出して処理を行うことができる
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

nameArr.map(name => console.log(name));
// 第2引数はインデックス番号になっている
nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です`));

// filterでは条件に一致する要素のみ取り出すことができる
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  // 奇数を取り出す
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === '鈴木') {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
