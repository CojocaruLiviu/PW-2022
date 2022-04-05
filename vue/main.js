Vue.createApp({
  data() {
    return {
      message: 'Hello from Vue!',
      name: "Person",
      students: [
        {
          name: "Ion",
          age: 12,
          salary: 1200
        },
        {
          name: "Mihai",
          age: 32,
          salary: 3400
        },
        {
          name: "Mihai",
          age: 32,
          salary: 3400
        },
        {
          name: "Victor",
          age: 32,
          salary: 3400
        }
      ],
      showed: false,
      number: 4,
      x: 3,
      y: 6,
      appBackgroundColor: "white"
    }
  },
  watch: {
    appBackgroundColor() {
      alert(`color changed to ${this.appBackgroundColor}`)
    }
  },
  computed: {
    sum() {
      return this.x + this.y;
    },
    totalSalary() {
      return this.calculateTotalSalary();
    },
    reversedName() {
      return this.name.split("").reverse().join("");
    }
  },
  methods: {
    calculateTotalSalary() {
      return this.students.reduce((totalSalary, student) => totalSalary + student.salary, 0)
    },
    changeColorToRed() {
      this.appBackgroundColor = "red";
    },
    changeColorToGreen() {
      this.appBackgroundColor = "green";
    },
    changeColorToBlue() {
      this.appBackgroundColor = "blue";
    },
    changeColorToWhite() {
      this.appBackgroundColor = "white";
    }
  }
}).mount('#app')