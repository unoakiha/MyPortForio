// JavaScript Document
// 要素を取得
const track = document.querySelector('.carousel-track');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const items = document.querySelectorAll('.carousel-item');

// 現在のスライドインデックス
let currentIndex = 0;

function updateSlideWidth() {
  const slideWidth = document.querySelector('.carousel').clientWidth; // 親要素の幅を取得
  items.forEach(item => {
    item.style.width = `${slideWidth}px`; // 各アイテムの幅を調整
  });
  updateCarousel(); // 現在の位置も再計算
}

// スライド位置の更新関数
function updateCarousel() {
  const slideWidth = document.querySelector('.carousel').clientWidth;
  const offset = -currentIndex * slideWidth;
  track.style.transform = `translateX(${offset}px)`;
}

// 初期設定
updateSlideWidth();

// 次のスライドへ移動
nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0; // 最初に戻る
  }
  updateCarousel();
});

// 前のスライドへ移動
prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - 1; // 最後に戻る
  }
  updateCarousel();
});

// ウィンドウサイズ変更時に幅を再計算
window.addEventListener('resize', updateSlideWidth);

// 自動スライド機能
setInterval(() => {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  updateCarousel();
}, 5000); // 5秒ごとにスライド

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="https://"]');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
    });
});

