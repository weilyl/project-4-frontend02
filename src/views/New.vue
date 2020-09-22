<template>

    <div id="dashboard-container">
        <section class="modal-card-body" v-if="loggedin">
            <b-field label="firstname" 
            :label-position="labelPosition">
                <b-input v-model="firstname"></b-input>
            </b-field>

            <b-field label="lastname"
            :label-position="labelPosition">
            >
                <b-input v-model="lastname"></b-input>
            </b-field>

            <b-field label="Email"
                type="is-success"
                message="Remember to use a valid email"
                :label-position="labelPosition">
                >
                <b-input type="email"
                    value=""
                    maxlength="30"
                    v-model="email">
                </b-input>
            </b-field>

            <b-field label="Username"
                type="is-success"
                :label-position="labelPosition"
                message="Make a username up to 30 characters">
                <b-input value="" maxlength="30"
                v-model="username"></b-input>
            </b-field>

            <b-field label="Password"
                type="is-success"
                message="Password must be at least 8 characters long"
                :label-position="labelPosition">
                <b-input type="password"
                    value=""
                    password-reveal
                    placeholder="Your password"
                    v-model="password">
                </b-input>
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Link',
    props: ["loggedin"],
    data() {
        return {
            labelPosition: 'on-border'
        }
    },
    methods: {
        
    },
    created: function() {
        console.log(this.loggedin)
    }
}
</script>

<style>

</style>

