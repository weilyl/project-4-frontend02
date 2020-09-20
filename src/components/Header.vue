<template>
  <div class="header">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <div>On The Hook</div>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#">
          <router-link to="/">Home</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
          <router-link to="/Page2">About</router-link>
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" v-on:click="isComponentModalActive = true">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <section>
      <b-modal 
          v-model="isComponentModalActive"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"
          aria-modal>
        <form action="">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">Login</p>
              <button
                type="button"
                class="delete"
                @click="isComponentModalActive=false"/>
            </header>
            <section class="modal-card-body">
              <b-field label="Username">
                <b-input
                    :value="username"
                    placeholder="Your username"
                    v-model="username"
                    required>
                </b-input>
              </b-field>

              <b-field label="Password">
                <b-input
                    type="password"
                    :value="password"
                    password-reveal
                    placeholder="Your password"
                    v-model="password"
                    required>
                </b-input>
              </b-field>

              <b-checkbox>Remember me</b-checkbox>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="isComponentModalActive=false">Close</button>
                <button class="button is-primary" v-on:click="logIn()">Login</button>
            </footer>
          </div>
        </form>
      </b-modal>
    </section>

  </div>
</template>

<script>

  export default {
    name: 'Header',
    data() {
      return {
        isComponentModalActive: false,
        username: "",
        password: ""
      }
    },
    methods: {
      logIn: function() {
        console.log(this.username, this.password)
        console.log(this.$URL)
        fetch(`http://127.0.0.1:8000/auth/api/users/login/`, {
          method: "POST",
            body: {
                username: this.username,
                password: this.password
            },
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((data) => this.$emit('loggedin', data))
      }
    }
  }


// then(response => {
//         if (response.status != 200) {
//           response.json()
//         } else {
//           return response.json()
//         }
//       })
//       .then(data => {
//         console.log('data', data)
//         if(data){
//           this.$emit('loggedIn', data)
//         } else {
//           alert('Incorrect Login')
//         }
//       })


</script>

<style>
.header {
    width: 90%;
    margin: 10px auto
}

</style>
