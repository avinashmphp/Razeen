<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 col-lg-2 border-right" style=" background: #fafafa;">
        <Sidebar />
      </div>
      <div class="col-md-9 col-lg-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
export default {
  name: "Dashboard",
  components: {
    Sidebar
  }
};
</script>

<style>
</style>