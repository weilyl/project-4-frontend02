<template>

<<<<<<< HEAD
    <div id="dashboard-container"><!--START OF div to hold New List and New Link inputs-->
        
        <div id="new-list-form">
            <section class="modal-card-body" v-if="loggedin">

                <b-field label="New List Name" 
                    :label-position="labelPosition">
                    <b-input v-model="listName"></b-input>
                </b-field>

                <b-field label="New List Description"
                    :label-position="labelPosition">
                    <b-input v-model="listName"></b-input>
                </b-field>

                <b-button type="is-info">Make new list</b-button>

            </section>
        </div>


        <div id="new-link-form">
            <section class="modal-card-body" v-if="loggedin">
                <b-field label="New Link Name" 
                :label-position="labelPosition">
                    <b-input v-model="linkName"></b-input>
                </b-field>

                <b-field label="New Link Description"
                    message = "Note: this will also be the alt-text of each image for users who use screen readers."
                    maxlength="200"
                    :label-position="labelPosition">
                    <b-input v-model="linkDesc" type="textarea"></b-input>
                </b-field>

                <b-field label="New Link URL"
                    :label-position="labelPosition">
                    <b-input type="url"
                        v-model="linkImage">
                    </b-input>
                </b-field>

                <b-button type="is-info">Add new link to website</b-button>

            </section>
        </div>
    </div><!--END OF Dashboard Container -->
=======
    <div>
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
>>>>>>> master
</template>

<script>
export default {
<<<<<<< HEAD
    name: 'New',
    props: ["loggedin"],
    data() {
        return {
            labelPosition: 'on-border',
            token: "",
            listName: "",
            listID: null,
            listDesc: "",
            linkName = "",
            linkID = null,
            linkDesc = "",
            linkImage = "",
        }
    },
    methods: {
        newList: function(){
            fetch(`${this.URL}auth/api/lists/`, {
            })
            .then((response) => {
            })
            .then(data => {
            })
        },
        newLink: function(){
            fetch(`${this.URL}auth/api/links/`, {
            })
            .then((response) => {
            })
            .then(data => {
            })
        }
=======
    name: 'Link',
    props: ["loggedin"],
    data() {
        return {
            labelPosition: 'on-border'
        }
    },
    methods: {
        
>>>>>>> master
    },
    created: function() {
        console.log(this.loggedin)
    }
}
</script>

<style>

</style>

