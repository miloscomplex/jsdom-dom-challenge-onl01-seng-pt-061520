document.addEventListener("DOMContentLoaded", () => {

  let nInterval // need to declare global for scoping
  let countNum = 0
  let countObj = countNum
  let counter = document.getElementById('counter')
  const plusBtn = document.getElementById('plus')
  const minusBtn = document.getElementById('minus')
  const pauseBtn = document.getElementById('pause')
  const heartBtn = document.getElementById('heart')
  const submitBtn = document.getElementById('submit')
  //let ulLikes = document.getElementsByClassName('likes').first
  let ulLikes = document.querySelector('ul.likes')
  let ulComments = document.querySelector('div.comments')
  let clicks = 0
  //let likeArray = [0]

  function setTimer() {
    nInterval = setInterval(incrementTimer, 1000)
  }

  // create an object to track likes
  function ClickCount(num) {
    this.num = num
    this.likes = 1
  }

  function updateText(countNum) {
    counter.innerText = countNum.toString()
  }

  function incrementTimer() {
    console.log(counter.innerText + ' countNum= ' + countNum)
    countNum++
    updateText(countNum)
  }

  function decrementTimer() {
    console.log(counter.innerText + ' countNum= ' + countNum)
    countNum--
    updateText(countNum)
  }

  function stopTimer() {
    clearInterval(nInterval)
  }

  function disable(btn) {
    btn.disabled = true
  }

  function enable(btn) {
    btn.disabled = false
  }

  pauseBtn.addEventListener('click', function(event) {
    console.log('pauseBtn was clicked')
    if (pauseBtn.innerText === "pause") {
      stopTimer()
      disable(heartBtn)
      disable(minusBtn)
      disable(plusBtn)
      disable(submitBtn)
      pauseBtn.innerText = "resume"
    } else {
      setTimer()
      enable(heartBtn)
      enable(minusBtn)
      enable(plusBtn)
      enable(submitBtn)
      pauseBtn.innerText = "pause"
    }
    //debugger
  })

  minusBtn.addEventListener('click', function(event) {
    console.log('minusBtn was clicked')
    decrementTimer()
  })

  plusBtn.addEventListener('click', function(event) {
    console.log('plusBtn was clicked')
    incrementTimer()
  })

  heartBtn.addEventListener('click', function(event) {
    console.log('heartBtn was clicked')
    // only works if you do the secondary if statement
    // elsewise it will just update the first object
    if (countObj.likes >= 1 && countObj.num === countNum) {
      countObj.likes += 1
    } else {
      countObj = new ClickCount(countNum)
    }
    let li = document.createElement('li')
    li.innerText = countNum.toString() + ' has been liked ' + countObj.likes + ' time'
    ulLikes.appendChild(li)
  })

  submitBtn.addEventListener('click', function(event) {
    event.preventDefault()
    let comment = document.getElementById('comment-input').value
    let li = document.createElement('li')
    li.innerText = comment
    ulComments.appendChild(li)
  })

  setTimer()
})
