/**
 * デフォルト値、引数など
 */

// 引数が渡されなかった場合の初期値を設定する
const sayHello = (name = 'ゲスト') => console.log(`こんにちは! ${name}さん!`)
sayHello('Yuta');
// 引数がないとundefinedになる
sayHello();
