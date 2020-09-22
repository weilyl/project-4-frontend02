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
          <router-link to="/" >Home</router-link>
        </b-navbar-item>

        <b-navbar-item href="#" 
          v-on:click="isNewListModalActive= true"
          v-if="loggedin">
          <router-link to="/">Create a new list</router-link>
        </b-navbar-item>

        <b-navbar-item href="#"
          v-on:click="isNewLinkModalActive = true"
          v-if="loggedin">
          <router-link to="/">Add a new link</router-link>
        </b-navbar-item>

        <b-navbar-dropdown 
              label="Your lists" 
              aria-role="list" scrollable="true"
              v-if="loggedin">
            <b-dropdown-item 
              v-for="list in listoflists"
              :id="list.id" 
              :key="list.name"
              aria-role="listitem"
              v-model="listname"
              v-on:click="openOneListModal(id)"
              tag="router-link" :to="{ path: '/list/'+ id }"
            >
              {{list.name}}
            </b-dropdown-item>

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

    <section> <!---_________START OF BUEFY NEW LIST MODAL_________-->
      <b-modal 
          v-model="isNewListModalActive"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"
          aria-modal>
        <form action="">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">Create a New List</p>
              <button
                type="button"
                class="delete"
                @click="isNewListModalActive=false"/>
            </header>
            <section class="modal-card-body">
              <b-field label="Name of New List">
                <b-input
                    :value="newlistname"
                    placeholder="Name of your new list"
                    v-model="newlistname"
                    required>
                </b-input>
              </b-field>

              <b-field label="Description of New List">
                <b-input
                    :value="newlistdesc"
                    placeholder="Description of your new list"
                    v-model="newlistdesc"
                    required>
                </b-input>
              </b-field>

            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="isNewListModalActive=false">Close</button>
                <button class="button is-primary" v-on:click="createNewList()">Make List</button>
            </footer>
          </div>
        </form>
      </b-modal>
    </section> <!--_________END OF NEW LIST MODAL_________-->

    <section> <!---_________START OF BUEFY NEW LINK MODAL_________-->
      <b-modal 
          v-model="isNewLinkModalActive"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"
          aria-modal>
        <form action="">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">Create a New Link</p>
              <button
                type="button"
                class="delete"
                @click="isNewLinkModalActive=false"/>
            </header>
            <section class="modal-card-body">
              <b-field label="Name of New Link">
                <b-input
                    :value="newlinkname"
                    placeholder="Name of your new link"
                    v-model="newlinkname"
                    required>
                </b-input>
              </b-field>

              <b-field label="Description of New Link">
                <b-input
                    :value="newlinkdesc"
                    placeholder="Description of your new link"
                    v-model="newlinkdesc"
                    required>
                </b-input>
              </b-field>

              <b-field label="Image for New Link">
                <b-input
                    :value="newlinkimage"
                    placeholder="URL to your new link"
                    v-model="newlinkimage"
                    required>
                </b-input>
              </b-field>

            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="isNewLinkModalActive=false">Close</button>
                <button class="button is-primary" v-on:click="createNewLink()">Add link</button>
            </footer>
          </div>
        </form>
      </b-modal>
    </section> <!--_________END OF NEW LINK MODAL_________-->

    <section> <!---_________START OF BUEFY SINGLE LINK MODAL_________-->
      <b-modal 
          v-model="isOneListModalActive"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"
          aria-modal>
        <form action="">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">{{gotOneList.name}}</p>
              <button
                type="button"
                class="delete"
                v-on:click="isOneListModalActive=false"/>
                <button class="button is-primary" v-on:click="openUpdateListModal()">Update List</button>
                <!--<button class="button is-primary" v-on:click="deleteOneList()">Delete List</button>-->
            </header>
            <section class="modal-card-body">
              <b-field label="Name of one link">
                <b-input
                    :value="newlinkname"
                    placeholder="Name of one link"
                    v-model="newlinkname"
                    required>
                </b-input>
              </b-field>
            </section>
            <footer class="modal-card-foot">
                <!--<button class="button" type="button" @click="isOneListModalActive=false">Close</button>-->
                <!--button class="button is-primary" v-on:click="addLinkToList()">Add to this list</button-->
            </footer>
          </div>
        </form>
      </b-modal>
    </section> <!--_________END OF ONE LIST MODAL_________-->



  </div> <!---_________END OF HEADER DIV_________-->
</template>

<script>

  export default {
    name: 'Header',
    beforeCreated(){
        console.log("beforeCreated")
    },
    created(){
        console.log("created")
    }, 
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        console.log("mounted")
    },
    beforeUpdate(){
        console.log("beforeUpdate")
    },
    updated(){
        console.log("updated")
    },
    beforeDestroy(){
        console.log("beforeDestroy")
    },
    destroyed(){
        console.log("destroyed")
    },
    data() {
      return {
        isComponentModalActive: false,
        isRegisterModalActive: false,
        isNewListModalActive: false,
        isNewLinkModalActive: false,
        isOneListModalActive: false,
        username: "",
        password: "",
        userID: "",
        loggedin: "",
        token: "",
        listname: "",
        listoflists: [],
        labelPosition: 'on-border', 
        newlistname: "",
        newlistdesc: "",
        newlinkname: "",
        newlinkdesc: "",
        newlinkimage: "",
        gotOneList: {},
        chosenListID: null,
        isActive: false
      }
    },
    methods: {
      logIn: function() {
        // const URL = this.$prodURL ? this.$prodURL : this.$URL
        const user = {username: this.username, password: this.password}
        console.log(user)
        fetch(`${this.$URL}auth/users/login/`, {
          method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
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
      }, 
      createNewList: function (){
        const list = {
          "name": this.newlistname,
          "description": this.newlistdesc
        }
        fetch(`${this.$URL}auth/api/lists/`, {
          method: "POST",
          body: JSON.stringify(list),
          headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${this.token}`
          }
        })
        .then(response => {
          if (response.status != 201) {
            response.status
          } else {
            return response.json()
          }
        })
        .then(data => {
          if (data){
            this.populateLists(),
            this.isNewListModalActive=false
          } else {
            alert("Uh oh, an error occured. Please check if you already have a list with that name.")
          }
        })
      },
      createNewLink: function (){
        const link = {
          "name": this.newlinkname,
          "description": this.newlinkdesc
        }
        fetch(`${this.$URL}auth/api/links/`, {
          method: "POST",
          body: JSON.stringify(link),
          headers: {
            "Content-Type": "application/json",
            "Authorization": `JWT ${this.token}`
          }
        })
        .then(response => {
          if (response.status != 201) {
            response.status
          } else {
            return response.json()
          }
        })
        .then(data => {
          console.log("data", data)
          if (data){
            this.isNewLinkModalActive=false
          } else {
            alert("Uh oh, an error occured. Please check if you already have aLink with that name.")
          }
        })
      },
      getSingleList: function(){
        fetch(`${this.$URL}auth/api/lists/${this.listID}/`, {
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
            console.log("I got one list and it is: ", data)
              this.gotOneList = data
          } else {
            console.log("Could not grab that list for you. Please refresh and try again.")
          } 
        })
      },
      openOneListModal: function(event){
        console.log(event)
        console.log(event.id)
        console.log(event.target.id)
        //this.chosenListID = event.target.id,
        //console.log(this.chosenListID)
        //this.getSingleList(),
        this.isOneListModalActive = true,
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style>
.header {
  width: 90%;
  margin: 10px auto
}

</style>
