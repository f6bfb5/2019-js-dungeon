;(function(){
  let hr = document.getElementsByClassName("hr")
  let min = document.getElementsByClassName("min")
  let sec = document.getElementsByClassName("sec")

  setInterval(() => {
    let time = new Date()
    console.log(time.getHours() + " " + time.getMinutes() + " " + time.getSeconds())
    hr[0].style.transform = "translateY(-50%) rotate(" + (360 / 24) * time.getHours() + "deg)"
    min[0].style.transform = "translateY(-50%) rotate(" + (360 / 60) * time.getMinutes() + "deg)"
    sec[0].style.transform = "translateY(-50%) rotate(" + (360 / 60) * time.getSeconds() + "deg)"
  }, 1000)
})();