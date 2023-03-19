<template>
  <div id="app">
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item v-for="item in routers" :key="item.to" :to="item.to" :active="isActive(item.to)">
            {{ item.title }}
          </b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body>
        <router-view></router-view>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    routers: [
      {
        to: '/play',
        title: 'Игра'
      },
      {
        to: '/test',
        title: 'Проверка'
      }
    ]
  }),
  methods: {
    isActive(path) {
      console.log(this.$router.currentRoute)
      return this.$router.currentRoute.fullPath === path;
      //   ? 'active'
      //   : '';
    }
  }
}
</script>
