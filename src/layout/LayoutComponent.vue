<template>
  <div class="layout">
    <SidebarComponent />
    <div class="main-page">
      <router-view />
    </div>
  </div>
</template>

<script>
import SidebarComponent from "@/components/layout/SidebarComponent.vue";
export default {
  components: { SidebarComponent },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-wrap: wrap;
  .main-page {
    padding: 24px;
    width: calc(100% - 300px);
  }
}
</style>
