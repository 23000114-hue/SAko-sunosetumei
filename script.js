// ==========================================================================
// 1. スクロール時のフェードインアニメーション
// ==========================================================================
const fadeElements = document.querySelectorAll('.fade-in');

const scrollFade = () => {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // 画面内に入ったら 'active' クラスを付与
    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  });
};

// 初期表示時にもアニメーションを実行
window.addEventListener('load', scrollFade);
// スクロール時に毎回監視
window.addEventListener('scroll', scrollFade);


// ==========================================================================
// 2. 科学クイズゲームのロジック
// ==========================================================================
const checkAnswer = (choice) => {
  const resultBox = document.getElementById('quiz-result');
  const resultIcon = document.getElementById('result-icon');
  const resultTitle = document.getElementById('result-title');
  const resultDesc = document.getElementById('result-desc');
  const optionsContainer = document.querySelector('.quiz-options');

  // クイズボタンをすべて無効化する
  const optionButtons = document.querySelectorAll('.quiz-btn');
  optionButtons.forEach(btn => btn.disabled = true);

  // 結果欄を表示する
  resultBox.classList.remove('hide');

  if (choice === 1) {
    // 正解: 表面張力
    resultIcon.innerHTML = '✨🧬✨';
    resultIcon.className = 'result-icon result-success';
    resultTitle.textContent = '大正解！すばらしい！';
    resultDesc.textContent = '水分子同士がお互いに引き合って、一番表面積が小さくなる「球体」を作ろうとする『表面張力』という力が働いているからなんだ。SAコースでは、こんな身近な不思議を徹底的に突き詰めるよ！';
  } else {
    // 不正解: 遠心力 または 重力
    resultIcon.innerHTML = '🧐🧪';
    resultIcon.className = 'result-icon result-fail';
    resultTitle.textContent = 'おしい！もう一息！';
    if (choice === 2) {
      resultDesc.textContent = '遠心力は回転するときに外側に引っ張られる力だね。シャボン玉は回っていなくても丸くなるのはどうしてだろう？…正解は「表面張力」！水が縮もうとする力なんだよ。';
    } else {
      resultDesc.textContent = '重力は下に落ちる力だね。重力だけが働くと、シャボン玉は丸ではなく歪んだり潰れたりしてしまうんだ。丸くなる決定的な理由は、縮もうとする力「表面張力」だよ！';
    }
  }

  // 結果表示箇所までスムーズスクロール
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

const resetQuiz = () => {
  const resultBox = document.getElementById('quiz-result');
  const optionButtons = document.querySelectorAll('.quiz-btn');

  // すべてのボタンの無効化を解除
  optionButtons.forEach(btn => btn.disabled = false);

  // 結果ボックスを非表示に
  resultBox.classList.add('hide');
};