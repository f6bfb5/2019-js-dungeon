;(function() {
  console.clear()

  let process = {
    env: {
      server: 'dev'
    }
  }

  function log(...args) {
    if (process.env.server === 'dev') {
      console.log(...args)
    }
  }

  ;(function(Vue) {
    let app = new Vue({
      el: '#app',
      data: {
        input: '0',
        result: '0'
      },
      methods: {
        setInput(n) {
          // log(n)
          switch (n) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              if (this.input === '0') this.input = ''
              this.input += n
              break
            case '0':
            case '00':
              //輸入為預設狀態(0)時，不可使用重複的0開頭
              if (this.input === '0') break
              this.input += n
              break
            case '.':
              let subs = this.input
              //如果輸入列前面已經有運算子，將最後一個運算子之後的數字切割出來
              let re = /[-+*\/]+/g
              while (re.exec(this.input)) subs = this.input.slice(re.lastIndex)
              if (subs.indexOf('.') == -1) this.input += n
              break
            case '-':
              //輸入為預設狀態(0)時，不可使用 - 以外的運算子開頭
              if (this.input === '0') {
                this.input = '-'
                break
              }
            case '+':
            case '*':
            case '/':
              if (this.operAddable(this.input, n)) this.input += n
              log(this.operAddable(this.input, n))
              break
            case 'Backspace':
              this.back()
              break
            case 'Enter':
              this.calc()
              break
            default:
              break
          }
        },
        back() {
          if (this.input.length > 1) this.input = this.input.slice(0, -1)
          else this.input = '0'
        },
        allClear() {
          this.input = '0'
          this.result = '0'
        },
        calc() {
          // let re = new RegExp('(^-?\d+(\.?\d+)?)([-+*\/])(-?\d+(\.?\d+)?)$')
          this.result = eval(this.input)
          this.input = '0'
        },
        operAddable(s, i) {
          let l = s.length - 1
          if (i === '+' || i === '*' || i === '/') {
            //下一個是 +、*、/，前一個不可是運算子
            return !(
              s.lastIndexOf('+') == l ||
              s.lastIndexOf('-') == l ||
              s.lastIndexOf('*') == l ||
              s.lastIndexOf('/') == l ||
              s.lastIndexOf('.') == l ||
              s === '0'
            )
          } else if (i === '-') {
            //下一個是 -，前一個不可是 + 與 -、.
            return !(
              s.lastIndexOf('+') == l ||
              s.lastIndexOf('-') == l ||
              s.lastIndexOf('.') == l
            )
          }
        }
      },
      computed: {
        getInput() {
          return this.input.replace(/\*/g, 'x').replace(/\//g, '÷')
        }
      },
      mounted: function() {
        let self = this

        window.addEventListener('keydown', function(evt) {
          self.setInput(evt.key)
        })
      },
      beforeDestory: function() {
        let self = this
        window.removeEventListener('keydown', function(evt) {
          self.setInput(evt.key)
        })
      }
    })
  })(Vue)
})()
