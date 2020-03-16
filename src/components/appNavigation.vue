<template>
  <v-navigation-drawer floating permanent left disable-resize-watcher hide-overlay>
    <v-card >
      <v-list rippled>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link" router-link>
          <v-list-item-content>
            <v-list-item-title class="text-center">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Home', icon: ' ', link: '/home' },
      { title: 'About', icon: ' ', link: '/about' },
    ],
  }),
};
</script>
