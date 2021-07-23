<template>
  <hello-world />
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import { mapMutations } from "vuex"

export default {
  name: "Home",

  components: {
    HelloWorld,
  },

  mounted() {
    this.checkCurrentRoute();
  },
  methods: {
    ...mapMutations(["checkCurrentRoute"]),
  },
};
</script>
