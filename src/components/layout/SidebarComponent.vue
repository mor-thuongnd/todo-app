<template>
  <div class="sidebar">
    <h1>Basic Exercise</h1>
    <ul class="list-menu">
      <li
        v-for="menu in listMenu"
        :key="menu.id"
        :class="[isActiveMenu(menu.name) && 'active']"
        @click="goToMenu(menu)"
      >
        {{ menu.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listMenu: [
        {
          id: 1,
          label: "Trang chủ",
          name: "Home",
        },
        {
          id: 2,
          label: "Todos App",
          name: "Todo",
        },
      ],
    };
  },
  computed: {
    isActiveMenu() {
      return (menuName) => {
        return this.$route.name === menuName;
      };
    },
  },
  methods: {
    goToMenu(menu) {
      if (!this.isActiveMenu(menu.name)) {
        this.$router.push({ name: menu.name });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 300px;
  height: 100vh;
  background: #f0f0f0;
  padding: 16px;
  h1 {
    font-size: 32px;
    color: #000;
    text-align: center;
    margin-bottom: 48px;
  }
  .list-menu {
    li {
      padding: 16px 12px;
      font-size: 16px;
      margin-bottom: 8px;
      font-weight: bold;
      cursor: pointer;
      &.active {
        color: #2980b9;
        background: rgba(41, 128, 185, 0.1);
      }
    }
  }
}
</style>
