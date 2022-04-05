Vue.createApp({
  data() {
    return {
      info:'Salary with % is ',
      SumProc: '',
      months: 0,
      rest: 0,
      sum: 0,
      results: [],
      resultsProc: []
    }
  },
  show: {

  },
  computed: {
    

  },
  methods: {

    CalculateResult() {
      this.results = [];
      const SumPerMonth = this.number / this.months;
      let suma = this.number;
      //console.log(this.months);  
      for (let i = 1; i <= this.months; i++) {
        this.results.push({
          months: i,
          sum: SumPerMonth,
          rest: suma - SumPerMonth * i
        })

      }
    },
    CalculateResultWithProcent() {
      this.info;
      this.results = [];
      let suma = this.number;
      let SumPerMonth = suma / this.months;
      let Proc = (this.procent / 100) * suma;
      suma = suma - Proc;
      this.SumProc = suma;
      SumPerMonth = suma / this.months;
      for (let i = 1; i <= this.months; i++) {
        this.results.push({
          months: i,
          sum: SumPerMonth,
          rest: suma - SumPerMonth * i
        })
      }
    },

  }
}).mount('#Calculator')