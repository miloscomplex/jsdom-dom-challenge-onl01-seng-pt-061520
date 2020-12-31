document.addEventListener("DOMContentLoaded", () => {

  let nInterval // need to declare global for scoping
  let countNum = 0
  let counter = document.getElementById('counter')
  const plusBtn = document.getElementById('plus')
  const minusBtn = document.getElementById('minus')
  const pauseBtn = document.getElementById('pause')
  const heartBtn = document.getElementById('heart')
  //let ulLikes = document.getElementsByClassName('likes').first
  let ulLikes = document.querySelector('ul.likes')
  let clicks = 0

  function setTimer() {
    nInterval = setInterval(incrementTimer, 1000)
  }

  function ClickCount(num) {
    this.num = num
    this.likes = 1
  }

  function incrementTimer() {
    console.log(counter.innerText + ' countNum= ' + countNum)
    countNum++
    counter.innerText = countNum.toString()
  }

  function decrementTimer() {
    console.log(counter.innerText + ' countNum= ' + countNum)
    countNum--
    counter.innerText = countNum.toString()
  }

  function stopTimer() {
    clearInterval(nInterval)
  }

  pauseBtn.addEventListener('click', function(event) {
    console.log('pauseBtn was clicked')
    stopTimer()
  })

  minusBtn.addEventListener('click', function(event) {
    console.log('minusBtn was clicked')
    decrementTimer()
  })

  heartBtn.addEventListener('click', function(event) {
    console.log('heartBtn was clicked')
    let clickCounter = countNum
    if (!clickCounter.num) {
      clickCounter = new ClickCount(countNum)
    } else {
      console.log('clickCounter.num= ' + clickCounter.num );
      clickCounter.likes++
      // would not fire with a local def variable
    }
    let li = document.createElement('li')
    li.innerText = countNum.toString() + ' has been liked ' + clickCounter.likes + ' time'
    ulLikes.appendChild(li)
  })

  setTimer()
  let hey = new ClickCount(3)
})
