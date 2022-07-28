// 追加ボタンをクリックした時の挙動
const onClickAdd = () => {
  // テキストボックスの値を取得する
  const input = document.getElementById('todo-text');

  // liを生成する
  const li = document.createElement('li');
  // pを生成する
  const p = document.createElement('p');
  p.innerText = input.value;

  // 完了ボタンを生成する
  const completeButton = document.createElement('button');
  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => {
    alert('完了');
  });

  // 削除ボタンを生成する
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById('incomplete-list').removeChild(deleteTarget);
  });

  // liタグの子要素に各要素を設定する
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了のリストに追加する
  document.getElementById('incomplete-list').appendChild(li);

  // テキストボックスを初期化する
  input.value = '';
}

// 追加ボタンをクリックする
document.getElementById('add').addEventListener('click', () => onClickAdd());
