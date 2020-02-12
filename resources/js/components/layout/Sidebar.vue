<template>
  <div id="sidebar">
    <ul class="list-unstyled">
      <li
        v-for="(route,index) in routes"
        :key="route.id"
        :class="{
        'active': activeIndex == index,
        'active-route': subIsActive(route.path)
      }"
        @click="setActive(index)"
      >
        <router-link :to="{ name: route.name}" v-html="route.faWtext"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      activeIndex: null,
      routes: [
        {
          id: 1,
          path: "dashboard/banks",
          name: "bank",
          faWtext: '<i class="fas fa-university"></i> Banks'
        },
        {
          id: 2,
          path: "dashboard/bank/products",
          name: "product",
          faWtext: '<i class="fas fa-th-large"></i> Products'
        },
        {
          id: 3,
          path: "/dashboard/categories",
          name: "category",
          faWtext: '<i class="fas fa-puzzle-piece"></i> Categories'
        }
      ]
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
    subIsActive(url) {
      const paths = Array.isArray(url) ? url : [url];
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0;
      });
    }
  }
};
</script>

<style></style>
