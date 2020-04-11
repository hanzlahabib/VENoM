<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h2>Sign in</h2>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 offset-sm3>
        <v-text-field
        label="Email"
        v-model="email"
        :rules="emailRules"
        required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>

      <v-text-field
        label="Password"
        v-model="password"
        :rules="passwordRules"
        v-bind:type="'password'"
        required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn>Cancel</v-btn>
        <v-btn bgcolor="primary" @click="login">Login</v-btn>
      </v-flex>
    </v-layout>
    <v-snackbar
    :timeout="6000"
    :top="true"
    v-model="showAlert"
    >
    {{message}}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      showAlert: false,
      message: '',
      email:'',
      emailRules: [
        v => !!v || 'Email is Required',
        v => /^\w+([.-]?\w+)*@([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  methods: {
    login: function () {
      const vm = this
      if(vm.password === 'test111'){
        this.$router.push({path: '/'})
      } else {
        vm.showAlert = true
        vm.message = 'Email or Password is wrong'
      }
  }
  }
};
</script>

<style scoped>

</style>
