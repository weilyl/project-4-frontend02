<template>
    <section>
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
                    type="is-danger"
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
                    <b-input value="" maxlength="30"></b-input>
                </b-field>

                <b-field label="Password">
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
    </section>


    <section>
        


        
    </section>
</template>

<script>
    export default {
        name: 'Register',
        data() {
            return {
                name: '',

            }
        }
    }
</script>