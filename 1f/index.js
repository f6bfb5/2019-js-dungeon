;(function() {
  for (let i = 2; i < 10; i++) {
    $('.chart').append(`<div class="formula" id=formulaContainer${i}>
      <div class="left" id="formulaContentLeft${i}">
        <h3 class="formula-title">${i}</h3>
      </div>
    </div>`)
    for (let o = 1; o <= 3; o++) {
      $('#formulaContentLeft' + i).append(
        `<span class="formula-content">${i} x ${o} = ${i * o}</    span>`
      )
    }
    $(`#formulaContainer${i}`).append(
      `<div class="right"     id=formulaContentRight${i}></div>`
    )
    for (let o = 4; o <= 9; o++) {
      $('#formulaContentRight' + i).append(
        `<span class="formula-content">${i} x ${o} = ${i * o}</    span>`
      )
    }
    if (i % 3 == 0) {
      $('.chart').append(`<div class="columnbreak"></div>`)
    }
  }
})()
