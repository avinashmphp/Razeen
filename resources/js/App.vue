<template>
  <component :is="layout"></component>
</template>

<script>
import Dashboard from "./components/layout/Dashboard";
import Default from "./components/layout/Default";

export default {
  name: "App",
  components: {
    Dashboard,
    Default
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "Default";
    }
  }
};
</script>
