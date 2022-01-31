`use strict`
//HTMLの中からIdがbtnの要素を取得
const btn = document.getElementById('btn');
//ボタン要素のクリックイベントをトリガーにコールバック処理を作成
btn.addEventListener('click', () => {

//入力値の取得//
//HTMLの中からIdがfizzの要素を取得
  const elemFizzNumber = document.getElementById('fizz');
//fizzNumのinputに入力された数字から値を取得
  const fizzNumber = elemFizzNumber.value;
//HTMLの中からIdがbuzzの要素を取得
  const elemBuzzNumber = document.getElementById('buzz');
//BuzzNunのinputに入力された数字から値を取得
  const buzzNumber = elemBuzzNumber.value;
//結果情報のベース作成//
//HTMLの中からIdがoutputの要素を取得
  const outputArea = document.getElementById('output');
//結果要素の子要素を取得
  outputArea.innerHTML = '';
//pタグの要素を作成
  const ptag = document.createElement('p');
//pタグの要素に結果情報ヘッダーの固定値をセット
  ptag.textContent = '【出力】';
//結果要素の子要素としてpタグの要素を追加
  outputArea.appendChild(ptag);

//結果情報の中身を作成//
//fizzbuzz問題のループ文
// 変数iを定義し、iが100より小さい場合、iに1ずつ足していく処理を実行
  for (let i = 1; i < 100; i++) {
//バリューを取得するための変数を定義
    let value = '';
//iがfizzes、buzzesの両方の数値の倍数である場合の処理
    if (i % fizzNumber === 0 && i % buzzNumber === 0) {
//ブラウザに表示するための文字列と取得した値をバリューとして用意
      value = "FizzBuzz" + " " + i;
//iがfizzesの倍数である場合の処理
    } else if (i % fizzNumber === 0) {
//ブラウザに表示するための文字列と取得した値をバリューとして用意
      value = "Fizz" + " " + i;
//iがbuzzesの倍数である場合の処理
    } else if (i % buzzNumber === 0) {
//ブラウザに表示するための文字列と取得した値をバリューとして用意
      value = "Buzz" + " " + i;
//iがどちらの倍数でもない場合の処理
    } else {
//何も表示させないものとして用意
      value = '';
    }

//要素を追加するためのpタグ要素を作成
    const fizzbuzz = document.createElement('p');
//テキストの内容に、ループ文で取得した値を入力する
    fizzbuzz.textContent = value;
//親要素であるdivタグの要素を取得
    const div = document.querySelector('div')
//div要素の子要素として追加
    outputArea.appendChild(fizzbuzz);
　}

  // fizzとbuzzの値が空ならば、outputの中身を空にして注意文を表示する
  if (!fizzNumber || !buzzNumber) {
    output.innerHTML = '';
    output.innerHTML = '<p>Please enter an integer value !</p>'

  // fizzとbuzzの値が数字以外ならば、outputの中身を空にして注意文を表示する
  } else if (fizzNumber.match(/^\D+$/) || buzzNumber.match(/^\D+$/)) {
    output.innerHTML = '';
    output.innerHTML = '<p>Please enter an integer value !</p>'

  // fizzとbuzzの値が小数ならば、outputの中身を空にして注意文を表示する 
  } else if (fizzNumber.match(/^-?[0-9]+\.[0-9]+$/) || buzzNumber.match(/^-?[0-9]+\.[0-9]+$/)) {
    output.innerHTML = '';
    output.innerHTML = '<p>Please enter an integer value !</p>'
  }
});