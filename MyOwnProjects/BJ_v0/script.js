/**
 * ==========================================
 * BLACKJACK GAME - JavaScript Starter
 * ==========================================
 *
 * Цей файл містить базову структуру та константи
 * для твоєї гри. Додай свою логіку нижче!
 */

// ==========================================
// КОНСТАНТИ - Масті та значення карт
// ==========================================

const SUITS = {
  hearts: { symbol: "♥", name: "hearts", color: "red" },
  diamonds: { symbol: "♦", name: "diamonds", color: "red" },
  clubs: { symbol: "♣", name: "clubs", color: "black" },
  spades: { symbol: "♠", name: "spades", color: "black" },
}

const VALUES = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10, // Валет
  Q: 10, // Дама
  K: 10, // Король
  A: 11, // Туз (може бути 1 або 11)
}

// ==========================================
// DOM ЕЛЕМЕНТИ
// ==========================================

const elements = {
  // Player 1
  player1Section: document.getElementById("player-1"),
  cards1: document.getElementById("cards-1"),
  score1: document.getElementById("score-1"),
  status1: document.getElementById("status-1"),
  hit1: document.getElementById("hit-1"),
  stand1: document.getElementById("stand-1"),

  // Player 2
  player2Section: document.getElementById("player-2"),
  cards2: document.getElementById("cards-2"),
  score2: document.getElementById("score-2"),
  status2: document.getElementById("status-2"),
  hit2: document.getElementById("hit-2"),
  stand2: document.getElementById("stand-2"),

  // Global
  btnNewGame: document.getElementById("btn-new-game"),
  modal: document.getElementById("winner-modal"),
  winnerText: document.getElementById("winner-text"),
  winnerScore: document.getElementById("winner-score"),
  btnPlayAgain: document.getElementById("btn-play-again"),
}

// ==========================================
// ФУНКЦІЯ: Створити HTML карти
// ==========================================

/**
 * Створює HTML елемент карти
 * @param {string} value - Значення карти (2-10, J, Q, K, A)
 * @param {object} suit - Об'єкт масті з SUITS
 * @returns {string} HTML код карти
 */
function createCardHTML(value, suit) {
  const colorClass = suit.color === "red" ? "card-red" : "card-black"

  return `
        <div class="card ${colorClass}">
            <div class="card-corner card-top">
                <span class="card-value">${value}</span>
                <span class="card-suit">${suit.symbol}</span>
            </div>
            <div class="card-center">
                <span class="card-suit-big">${suit.symbol}</span>
            </div>
            <div class="card-corner card-bottom">
                <span class="card-value">${value}</span>
                <span class="card-suit">${suit.symbol}</span>
            </div>
        </div>
    `
}

// ==========================================
// ПРИКЛАД: Додати карту до зони гравця
// ==========================================

/**
 * Приклад використання - розкоментуй для тесту:
 */

// function testAddCard() {
//     // Очистити placeholder
//     elements.cards1.innerHTML = '';
//
//     // Додати карту
//     elements.cards1.innerHTML += createCardHTML('K', SUITS.hearts);
//     elements.cards1.innerHTML += createCardHTML('A', SUITS.spades);
//
//     // Оновити очки
//     elements.score1.textContent = '21';
//     elements.score1.classList.add('blackjack');
//
//     // Оновити статус
//     elements.status1.textContent = 'Blackjack!';
//     elements.status1.classList.add('playing');
//
//     // Активувати секцію гравця
//     elements.player1Section.classList.add('active');
// }

// Виклич testAddCard() в консолі для тесту!

// ==========================================
// ТВІЙ КОД ТУТ ⬇️
// ==========================================

/**
 * TODO: Реалізуй логіку гри!
 *
 * 1. Створи колоду карт (52 карти)
 * 2. Перемішай колоду
 * 3. Роздай по 1-2 карти кожному гравцю
 * 4. Реалізуй кнопку "Взяти карту"
 * 5. Реалізуй кнопку "Стоп"
 * 6. Підрахуй очки (врахуй що Туз = 1 або 11)
 * 7. Визнач переможця
 * 8. Покажи модальне вікно з результатом
 *
 * Успіхів! 🎰
 */

console.log("🃏 Blackjack Game Ready!")
console.log("📝 Напиши свою логіку в script.js")
