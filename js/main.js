'use strict'

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q: '世界で一番大きな湖は？', c: ['カスピ海', 'カリブ海', '琵琶湖']}, 
    {q: '2の８乗は？', c: ['256', '64', '1024']}, 
    {q: '次のうち、最初にリリースされた言語は？', c: ['python', 'JavaScript', 'HTML']}, 
  ]);
  let currentNum = 0; 
  let isAnswered;
  let score = 0;

 
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1));  
    [arr[j], arr[i]] = [arr[i], arr[j]]; 
    }
    return arr;
  }
  
  function checkAnswer(li) {
    // if (isAnswered === true) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }
  function setQuiz() {
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
  });


  if (currentNum === quizSet.length - 1) {
    btn.textContent = 'Show Score';
  }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }
  });
}

// {
//   const question = document.getElementById('question');
//   const choices = document.getElementById('choices');
//   const btn = document.getElementById('btn');
//   const result = document.getElementById('result');
//   const scoreLabel = document.querySelector('#result > p');

//   //クイズのデータを配列で持っておく。定数名はquizSetとする。
//   //問題文はqというキー、回答の選択肢はchoicesなのでcというキー
//   const quizSet = shuffle([
//     {q: '世界で一番大きな湖は？', c: ['カスピ海', 'カリブ海', '琵琶湖']}, 
//     {q: '2の８乗は？', c: ['256', '64', '1024']}, 
//     {q: '次のうち、最初にリリースされた言語は？', c: ['python', 'JavaScript', 'HTML']}, 
//   ]);
//   let currentNum = 0; //今何問目のクイズを解いているかを変数で持っておく。最初は0のクイズから
//   let isAnswered;
//   let score = 0;

//   //shuffle()という関数を作って引数に配列を渡したら、
//   function shuffle(arr) {
//     for (let i = arr.length - 1; i > 0; i--) { //iが0より大きい間iを１つずつ減らしながら処理してあげる。
//     const j = Math.floor(Math.random() * (i + 1));  //ランダムに選ぶ範囲の終点のインデックスが今iなので、0からi番目のランダムな整数値を生成する。
//     [arr[j], arr[i]] = [arr[i], arr[j]];  //分割代入。順番をひっくり返した配列を代入する
  //   }
  //   return arr;
  // }
  
  // function checkAnswer(li) {
  //   // if (isAnswered === true) {
  //   if (isAnswered) {
  //     return;
  //   }
  //   isAnswered = true;

  //   if (li.textContent === quizSet[currentNum].c[0]) {
  //     li.classList.add('correct');
  //     score++;
  //   } else {
  //     li.classList.add('wrong');
  //   }

  //   btn.classList.remove('disabled');
  // }
  // function setQuiz() {
  //   isAnswered = false;
  //   question.textContent = quizSet[currentNum].q;

  //   while(choices.firstChild) {
  //     choices.removeChild(choices.firstChild);
//     }

//     const shuffledChoices = shuffle([...quizSet[currentNum].c]);
//     shuffledChoices.forEach(choice => {
//       const li = document.createElement('li');
//       li.textContent = choice;
//       li.addEventListener('click', () => {
//         checkAnswer(li);
//       });
//       choices.appendChild(li);
//   });


//   if (currentNum === quizSet.length - 1) {
//     btn.textContent = 'Show Score';
//   }
//   }

//   setQuiz();
//   // question.textContent = quizSet[currentNum].q;問題文はquestionという名前で操作できる。question.textContentをquizSetのcurrentNum番目のqに置き換えてあげる。そうすると、今currentNumが0なので、What is A?がquestionのテキストとして埋め込まれる。

//   //選択肢の方は、quizSetのインデックスがcurrentNum番目の要素にあるc、今currentNumは0。
//   //そちらの配列に対してforEach()を使ってli要素を作る。その上で、一つ一つの要素をchoiceという名前で受け取ることにして次の処理を指示する。このようにするとchoiceには配列の要素が一つずつ入ってくるので、まずはli要素を作ってあげて、そのtextContentにchoiceを代入してあげれば良い。あとはliをchoicesに追加していきたいので、choicesに対してappendChild()でliを追加してあげる。
//   // const shuffledChoices = shuffle([...quizSet[currentNum].c]);
//   // console.log(quizSet[currentNum].c);
//   // shuffledChoices.forEach(choice => {
//   //   const li = document.createElement('li');
//   //   li.textContent = choice;
//   //   choices.appendChild(li);
//   // });
//   btn.addEventListener('click', () => {
//     if (btn.classList.contains('disabled')) {
//       return;
//     }
//     btn.classList.add('disabled');

//     if (currentNum === quizSet.length - 1) {
//       // console.log(`Score: ${score} / ${quizSet.length}`);
//       scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
//       result.classList.remove('hidden');
//     } else {
//       currentNum++;
//       setQuiz();
//     }
//   });
// }