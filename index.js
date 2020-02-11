var vue = new Vue({
  el: "#app",
  data: {
    newChoice: "",
    choices: [
      { identifier: 1, title: "choice1" },
      { identifier: 2, title: "choice2" },
      { identifier: 3, title: "choice3" },
      { identifier: 4, title: "choice4" },
      { identifier: 5, title: "choice5" },
      { identifier: 6, title: "choice6" },
      { identifier: 7, title: "choice7" },
      { identifier: 8, title: "choice8" },
      { identifier: 9, title: "choice9" },
      { identifier: 10, title: "choice10" },
      { identifier: 11, title: "choice11" },
      { identifier: 12, title: "choice12" },
      { identifier: 13, title: "choice13" }
    ],
    winningChoice: ""
  },

  methods: {
    addChoice() {
      if (this.newChoice === "") return;

      if (this.choices.length) {
        var identifiers = this.choices.map(m => m.identifier);
        var max = identifiers.reduce(function(a, b) {
          return Math.max(a, b);
        });
        this.choices.push({
          identifier: max + 1,
          title: this.newChoice
        });
      } else {
        this.choices.push({ identifier: 1, title: this.newChoice });
      }

      this.newChoice = "";
    },
    deleteChoice(identifier) {
      this.choices = this.choices.filter(m => m.identifier !== identifier);
    },
    pickem() {
      var result = bracketize(this.choices.map(m => m.title).slice(0));
      this.winningChoice = result.winner;
    }
  }
});
