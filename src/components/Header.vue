<template>
  <div class="header"> <!---_________START OF HEADER DIV_________-->
    <b-navbar> <!---_________START OF BUEFY NAVBAR_________-->
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
        <b-navbar-dropdown 
              label="Your lists" 
              aria-role="list" scrollable="true"
              v-if="loggedin">
            <b-navbar-dropdown-item 
              v-for="list in listoflists"
              :key="list.name" 
              aria-role="listitem"
              v-model="listname"
            >
              <router-link :to="'/lists/'+`${list.name}`">{{list.name}}</router-link>
            </b-navbar-dropdown-item>

            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary" v-if="!loggedin" v-on:click="isRegisterModalActive = true">
              <strong style="color: white">Register</strong>
            </a>
            <a class="button is-light" v-if="!loggedin" v-on:click="isComponentModalActive = true">
              Log in
            </a>
            <a class="button is-light" v-if="loggedin" v-on:click="logOut()">
              Log out
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar> <!---_________END OF BUEFY NAVBAR_________-->

    <section> <!---_________START OF BUEFY LOGIN MODAL_________-->
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
    </section> <!--_________END OF BUEFY LOGIN MODAL_________-->

    <section> <!--_________START OF BUEFY REGISTER MODAL_________-->
      <b-modal 
          v-model="isRegisterModalActive"
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
                @click="isRegisterModalActive=false"/>
            </header>
            <section class="modal-card-body">
                <b-field label="firstname">
                    <b-input v-model="firstname"></b-input>
                </b-field>

                <b-field label="lastname">
                    <b-input v-model="lastname"></b-input>
                </b-field>

                <b-field label="Email"
                    type="is-success"
                    message="Remember to use a valid email">
                    <b-input type="email"
                        value=""
                        maxlength="30"
                        v-model="email">
                    </b-input>
                </b-field>

                <b-field label="Username"
                    type="is-success"
                    message="Make a username up to 30 characters">
                    <b-input value="" maxlength="30"
                    v-model="username"></b-input>
                </b-field>

                <b-field label="Password"
                  type="is-success"
                  message="Password must be at least 8 characters long">
                    <b-input type="password"
                        value=""
                        password-reveal
                        placeholder="Your password"
                        v-model="password">
                    </b-input>
                </b-field>

              <b-checkbox>Remember me</b-checkbox>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="isRegisterModalActive=false">Close</button>
                <button class="button is-primary" v-on:click="register()">Register</button>
            </footer>
          </div>
        </form>
      </b-modal>
    </section> <!--_________END OF BUEFY REGISTER MODAL_________-->

  </div> <!---_________END OF HEADER DIV_________-->
</template>

<script>

  export default {
    name: 'Header',
    data() {
      return {
        isComponentModalActive: false,
        isRegisterModalActive: false,
        username: "",
        password: "",
        loggedin: "",
        token: "",
        listname: "",
        listoflists: [],
        labelPosition: 'on-border'
      }
    },
    methods: {
      logIn: function() {
        // const URL = this.$prodURL ? this.$prodURL : this.$URL
        const user = {username: this.username, password: this.password}
        fetch(`${this.$URL}auth/users/login/`, {
          method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            }
        })
        // following code block courtesy of Narissa
        .then((response) => {
          if (response.status != 200) {
            response.status
          } else {
            return response.json()
          }
        })
        .then(data => {
          console.log('data', data)
          if(data){
            this.$emit('loggedinnow', data)
            this.token = data.token,
            this.username = '',
            this.password = '',
            this.loggedin = true,
            this.isComponentModalActive = false,
            this.firstname = '',
            this.lastname='',
            this.email = '',
            this.populateLists()
          } else {
            alert('Incorrect Login')
          }
        })  
      },
      logOut: function() {
        this.loggedin = false,
        this.token = '',
        this.username = '',
        this.password = '', 
        this.firstname = '',
        this.listoflists = []
      },
      register: function() {
        const user = {
          username: this.username, 
          password: this.password, 
          first_name: this.firstname,
          last_name: this.username,
          email: this.email          
        }
        fetch(`${this.$URL}auth/users/register/`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
              "Content-Type": "application/json",
          }
        })
        // following code block courtesy of Narissa
        .then((response) => {
          if (response.status != 201) {
            response.status
          } else {
            return response.json()
          }
        })
        .then(data => {
          console.log('data', data)
          if(data){
            this.$emit('loggedin', data) // do I even need this?
            this.token = data.token,
            this.loggedin = true,
            this.isRegisterModalActive = false
          } else {
            alert('Incorrect Registration Info')
          }
        })  
      }, 
      populateLists: function(){
        fetch(`${this.$URL}auth/api/lists/`, {
          method: "GET",
          headers: {
            "Authorization": `JWT ${this.token}`
          }
        })
        .then((response) => {
          console.log(response)
          if (response.status != 200) {
            response.status
            console.log(response.status)
          } else {
            return response.json()
          }
        })
        .then(data => {
          if (data){
            console.log("data: ", data)
            this.listoflists = data
          } else {
            console.log("No lists found for this user. Create a new list?")
          } 
        })
      }
    },
  }
</script>

<style>
.header {
  width: 90%;
  margin: 10px auto
}

</style>
