// ===== Game State =====
// Тут ти можеш писати свій JavaScript!

const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")
const distance1 = document.getElementById("distance1")
const distance2 = document.getElementById("distance2")
const btnThrow = document.getElementById("btnThrow")
const btnNewGame = document.getElementById("btnNewGame")
const btnSweep = document.getElementById("btnSweep")
const turnText = document.getElementById("turnText")
const turnDot = document.getElementById("turnDot")
const movingStone = document.getElementById("movingStone")
const stonePos1 = document.getElementById("stonePos1")
const stonePos2 = document.getElementById("stonePos2")
const resultMessage = document.getElementById("resultMessage")
const throwResult = document.getElementById("throwResult")
const throwText = document.getElementById("throwText")
const resultTitle = document.getElementById("resultTitle")
const resultText = document.getElementById("resultText")
const resultIcon = document.getElementById("resultIcon")

const roundScore1 = document.getElementById("roundScore1")
const roundScore2 = document.getElementById("roundScore2")

// Стан гри
let currentPlayer = 1
let player1Distance = null
let player2Distance = null
let gameOver = false

const player1Rounds = 0
const player2Rounds = 0
let canSweep = false
let currentThrowResult = null

let sweepCount = 0

btnThrow.addEventListener("click", handleThrow)
btnSweep.addEventListener("click", handleSweep)
btnNewGame.addEventListener("click", resetGame)

function handleThrow() {
  sweepCount = 0
  resetStonePosition()

  // Логіка кидка каменя
  currentThrowResult = Math.random() * 100
  throwText.textContent = `Камінь летить: ${currentThrowResult.toFixed(1)} см`
  throwResult.classList.remove("hidden")

  btnThrow.disabled = true
  canSweep = true
  btnSweep.disabled = false
  btnSweep.classList.add("active")

  // Автоматично завершити кидок через 3 секунди якщо не свіпнули
  setTimeout(() => {
    if (canSweep) {
      finishThrow()
    }
  }, 3000)
}

function handleSweep() {
  if (!canSweep) return

  sweepCount++

  // Add extra distance from sweep
  currentThrowResult += Math.random() * 20 + 5
  throwText.textContent = `Камінь летить: ${currentThrowResult.toFixed(1)} см`

  // Move stone up visually (max 5 levels)
  updateStonePosition()

  if (sweepCount >= 5) {
    finishThrow()
  }
}

function updateStonePosition() {
  // Remove all sweep classes first
  resetStonePosition()

  // Add current sweep level class
  if (sweepCount > 0 && sweepCount <= 5) {
    movingStone.classList.add(`sweep-${sweepCount}`)
  }
}

function resetStonePosition() {
  movingStone.classList.remove("sweep-1", "sweep-2", "sweep-3", "sweep-4", "sweep-5")
}

function finishThrow() {
  canSweep = false
  btnSweep.disabled = true
  btnSweep.classList.remove("active")
  throwResult.classList.add("hidden")
  btnThrow.disabled = false

  console.log("[v0] Фінальний результат кидка:", currentThrowResult.toFixed(1), "см")
  console.log("[v0] Кількість свіпів:", sweepCount)
}

function resetGame() {
  currentPlayer = 1
  player1Distance = null
  player2Distance = null
  gameOver = false
  canSweep = false

  sweepCount = 0
  resetStonePosition()

  distance1.textContent = "—"
  distance2.textContent = "—"
  btnThrow.disabled = false
  btnSweep.disabled = true
  btnSweep.classList.remove("active")

  player1.classList.add("active")
  player2.classList.remove("active")
  turnText.textContent = "Хід: Гравець 1"
  turnDot.classList.remove("player2")
  movingStone.classList.remove("player2")

  stonePos1.classList.add("hidden")
  stonePos2.classList.add("hidden")
  resultMessage.classList.add("hidden")

  console.log("[v0] Гру перезапущено!")
}

console.log("Curling Simulator Ready!")
