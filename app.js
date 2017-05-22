window.onload = function(){
  // const outPut = document.getElementById("output")
  const screen = document.getElementById("screen")
  const buttonOne = document.getElementById("buttonOne")
  const buttonTwo = document.getElementById("buttonTwo")
  const lap = document.getElementById("lap")
  const time = new Date()
  let temp

  var watch = {
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
    milliseconds: time.getMilliseconds(),
    startTime: function(){
      watch.milliseconds = watch.checkTime(watch.milliseconds)
      watch.time = screen.innerHTML = addZero(watch.minutes) + ":" +
      addZero(watch.seconds)  + ":" + addZero(watch.milliseconds)
      temp = setTimeout(function(){watch.startTime()}, 10)
    },
    checkTime: function(ms){
      if (ms < 99) { ms ++ } else { ms = 0; watch.seconds ++ }
      if (watch.seconds < 60) { } else { watch.seconds = 0
        ; watch.minutes = watch.minutes + 1 }
        return ms
      }
    }
    screen.innerText = "00:00:00"
    buttonOne.innerText = "Start"
    buttonTwo.innerText = "Lap"
    watch.seconds = 0
    watch.milliseconds = 0
    watch.minutes = 0

    buttonOne.onclick = function(){
      if (buttonOne.innerText === "Stop"){
        buttonOne.innerText = "Start"
        clearTimeout(temp)
        buttonTwo.innerText = "Reset"
      } else {
        buttonOne.innerText = "Stop"
        watch.startTime()
        buttonTwo.innerText = "Lap"
      }
    }

    buttonTwo.onclick = function(){
      if (buttonTwo.innerText === "Lap"){
        watch.html = '<div class="laps">' + screen.innerText + '</div><hr>'
         lap.innerHTML += watch.html
      } else {
        screen.innerText = "00:00:00"
        watch.seconds = 0
        watch.milliseconds = 0
        watch.minutes = 0
        lap.innerHTML = ""
      }
    }


    //helper function adding 0
    function addZero(t){
      if (t < 10){
        return t =  "0" + t
      } else {
        return t
      }
    }
  }
