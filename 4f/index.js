;(function() {
  console.clear()

  function getUTCTime(offset) {
    let d = new Date()
    //converting minutes to milliseconds involves multiplying by 60 * 1000 = 60000.
    utc = d.getTime() + d.getTimezoneOffset() * 60000
    //converting hours to milliseconds involves multiplying by 3600 * 1000 = 3600000.
    nd = new Date(utc + 3600000 * offset)
    let st = String(nd)
    return nd.toString()
  }

  function spreateTimeString(date_str) {
    // ["Fri", "Mar", "22", "2019", "17:51:06", "GMT+0800", "(台北標準時間)"]
    date_str = date_str.split(' ')
    let date_part = date_str[2] + ' ' + date_str[1] + '. ' + date_str[3]
    let time_part = date_str[4]
      .split(':')
      .slice(0, 2)
      .join(':')
    let is_daytime = Number(date_str[4].split(':')[0]) % 18 > 6
    return [date_part, time_part, is_daytime]
  }

  let cellNodeList = document.querySelectorAll('.cell')
  let cityNodeList = document.querySelectorAll('.city')
  let timeNodeList = document.querySelectorAll('.time')
  let city_array = [
    ['NEW YORK', '-4'],
    ['LONDON', '+1'],
    ['BANGKOK', '+7'],
    ['TAIWAN', '+8'],
    ['SYDNEY', '+11']
  ]

  setInterval(() => {
    let date_time_array = []
    city_array.forEach(c => {
      date_time_array.push(spreateTimeString(getUTCTime(c[1])))
    })
    cityNodeList.forEach((c, i) => {
      c.innerHTML = `${city_array[i][0]}<div class="date">${
        date_time_array[i][0]
      }</div>`
    })
    timeNodeList.forEach((t, i) => {
      t.innerHTML = date_time_array[i][1]
    })

    cellNodeList.forEach((c, i) => {
      if (!date_time_array[i][2]) {
        c.setAttribute('class', 'cell night')
      }
    })
  }, 1000)
})()
