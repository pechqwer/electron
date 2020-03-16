<template>
  <v-app>
    <app-bar />
    <v-layout>
      <v-container>
        <v-layout row>
          <v-flex
            v-if="this.$route.name != 'login'"
            xs6
            sm4
            md4
            lg3
            style="padding: 150px 0px 0px 0px"
          >
            <app-navigation />
          </v-flex>
          <v-flex
            v-if="this.$route.name != 'login'"
            xs6
            sm8
            md8
            lg9
            style="padding: 150px 0px 0px 0px"
          >
            <router-view />
          </v-flex>
          <v-flex v-else xs12 style="padding: 150px 0px 0px 0px">
            <router-view />
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app>
</template>

<script>
import appBar from '@/components/appBar.vue';
import appNavigation from '@/components/appNavigation.vue';

export default {
  name: 'App',
  components: {
    appBar,
    appNavigation,
  },
  data: () => ({
    //
  }),
};
</script>
