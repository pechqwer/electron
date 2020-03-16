<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <br />
      <p class="text-xs-center display-3 primary--text text-center">System Admin</p>
      <v-card-title primary-title>
        <v-layout wrap>
          <v-flex xs12 ml-5 mr-5>
            <v-text-field v-model="user" placeholder="joe@example.com" label="Username: " />
          </v-flex>
          <v-flex xs12 ml-5 mr-5>
            <v-text-field
              v-model="pass"
              type="password"
              placeholder="123456789"
              label="Password: "
            />
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-layout row justify-end>
        <v-btn flat color="orange" @click="accept">Accept</v-btn>
        <br />
        <br />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    user: '',
    pass: '',
  }),
  methods: {
    accept() {
      this.$router.push({ path: '/home' });
    },
  },
};
</script>
