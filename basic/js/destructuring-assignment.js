/**
 * 分割代入
 */

const myProfile = {
  name: 'Yuta',
  age: 26
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

// 分割代入は配列にも使える
const myProfileArr = ['Yuta', 26];
const message3 = `名前は${myProfileArr[0]}です。年齢は${myProfileArr[1]}歳です。`;
console.log(message3);

const [name2, age2] = myProfileArr;
const message4 = `名前は${name2}です。年齢は${age2}歳です。`;
console.log(message4);
