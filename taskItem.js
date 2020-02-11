Vue.component("choice-item", {
  props: ["identifier", "title"],
  template: `
        <li>
            {{ title }}
            <button @click="deleteSelf(identifier)">Delete</button>
        </li>
    `,
  methods: {
    deleteSelf(identifier) {
      this.$emit("delete-choice", identifier);
    }
  }
});
