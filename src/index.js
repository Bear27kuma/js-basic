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
  // 削除ボタンを生成する
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  // 戻すボタンを生成する
  const backButton = document.createElement('button');
  backButton.innerText = '戻す';

  // 完了ボタンを押された時に挙動
  completeButton.addEventListener('click', () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除する
    deleteFromIncompleteList(deleteButton.parentNode);

    // 押された完了ボタンの親タグ(li)を未完了リストから完了リストに移動する
    addTargetFromIncompleteList(completeButton.parentNode);
  });

  // 削除ボタンを押された時に挙動
  deleteButton.addEventListener('click', () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除する
    deleteFromIncompleteList(deleteButton.parentNode);
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

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById('incomplete-list').removeChild(target);
}

// 未完了リストから完了リストへ指定の要素を移動する
const addTargetFromIncompleteList = (target) => {
  // pタグ（最初の要素）を取得する
  const text = target.firstElementChild;

  // liを生成する
  const li = document.createElement('li');
  // 戻すボタンを生成する
  const backButton = document.createElement('button');
  backButton.innerText = '戻す';

  // 各要素を子要素に設定する
  li.appendChild(text);
  li.appendChild(backButton);

  console.log(li);

  // 完了リストに追加する
  document.getElementById('complete-list').appendChild(li);
}

// 追加ボタンをクリックする
document.getElementById('add').addEventListener('click', () => onClickAdd());
