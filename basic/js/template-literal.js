/**
 * テンプレート文字列
 */

const name = 'Yuta';
const age = 26;

// 「私の名前はYutaです。年齢は26歳です。」
// 従来の方法
const message1 = '私の名前は' + name + 'です。年齢は' + age + '歳です。';
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);
