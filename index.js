// login button event
const loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function () {
  const loginArea = document.getElementById('login-area')
  loginArea.style.display = 'none'
  const calculationArea = document.getElementById('calculation-area')
  calculationArea.style.display = 'block'
})

// receive button

const rcvButton = document.getElementById('rcvButton')
rcvButton.addEventListener('click', function () {
  const rcvQty = getInputNumber('rcvAmount')

  updateSpan('currRcv', rcvQty)
  document.getElementById('rcvAmount').value = ''
  updateSpan('blnc', rcvQty)
})

// issue button
const issueButton = document.getElementById('issueButton')
issueButton.addEventListener('click', function () {
  const issueQty = getInputNumber('issueAmount')

  updateSpan('currIssue', issueQty)
  document.getElementById('issueAmount').value = ''
})

function updateSpan(id, qty) {
  const current = document.getElementById(id).innerText
  const currentNumber = parseFloat(current)
  const totalAmount = currentNumber + qty
  document.getElementById(id).innerText = totalAmount
}

function getInputNumber(id) {
  const amount = document.getElementById(id).value
  const qty = parseFloat(amount)
  return qty
}
