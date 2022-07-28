// 追加ボタンをクリックした時の挙動
const onClickAdd = () => {
  // テキストボックスの値を取得する
  const input = document.getElementById('todo-text');

  // liを生成する
  const li = document.createElement('li');
  // pを生成する
  const p = document.createElement('p');
  p.innerText = input.value;

  // liタグの子要素に各要素を設定する
  li.appendChild(p);

  // 未完了のリストに追加する
  document.getElementById('incomplete-list').appendChild(li);

  // テキストボックスを初期化する
  input.value = '';
}

// 追加ボタンをクリックする
document.getElementById('add').addEventListener('click', () => onClickAdd());
