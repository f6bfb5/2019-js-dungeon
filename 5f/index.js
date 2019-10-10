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
  var app = new Vue({
    el: '#app',
    data: {
      data: [],
      active: [],
      location: [],
      filter: '',
      Storage: []
    },
    methods: {
      getData() {
        const vm = this
        const corsUrl = 'https://cors-anywhere.herokuapp.com/'
        const api = 'http://opendata2.epa.gov.tw/AQI.json'

        fetch(corsUrl + api, {
          method: 'GET',
          mode: 'cors'
        })
          .then(response => response.json())
          .then(res_json => {
            vm.data = res_json

            vm.data.forEach(function(item) {
              //加入總城市列表
              if (vm.location.indexOf(item.County) == -1) {
                vm.location.push(item.County)
              }
              //設定鄉鎮市空氣品質
              switch (item.Status) {
                case '良好':
                  item.class = 'status-aqi1'
                  break
                case '普通':
                  item.class = 'status-aqi2'
                  break
                case '對敏感族群不健康':
                  item.class = 'status-aqi3'
                  break
                case '對所有族群不健康':
                  item.class = 'status-aqi4'
                  break
                case '非常不健康':
                  item.class = 'status-aqi5'
                  break
                case '危害':
                  item.class = 'status-aqi6'
                  break
                default:
                  item.class = ''
                  break
              }
            })
          })
      },
      clickSite(site) {
        const vm = this
        vm.data.forEach(function(item) {
          if (item.SiteName === site) vm.active = item
        })
      }
    },
    computed: {
      filteredCity: function() {
        var vm = this
        var data = ''
        if (vm.filter == '') {
          data = vm.data.filter(item => item.County == vm.location[0])
          vm.active = data[0]
          return data
        }
        data = vm.data.filter(item => item.County == vm.filter)
        vm.active = data[0]
        return data
      }
    },
    mounted: function() {
      this.getData()
    }
  })
})(Vue)

// AQI: "42",
// class: "status-aqi1",
// CO: "0.57",
// CO_8hr: "0.4",
// County: "新北市",
// Latitude: "25.077197",
// Longitude: "121.376869",
// NO: "15",
// NO2: "45",
// NOx: "60",
// O3: "13",
// O3_8hr: "35",
// PM10: "42",
// PM10_AVG: "33",
// PM2.5: "12",
// PM2.5_AVG: "11",
// Pollutant: "",
// PublishTime: "2019-04-02 17:00",
// SiteName: "林口",
// SO2: "1.5",
// SO2_AVG: "1",
// Status: "良好",
// WindDirec: "129",
// WindSpeed: "0.9"
