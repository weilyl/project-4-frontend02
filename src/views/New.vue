<template>

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
</template>

<script>
export default {
    name: 'New',
    // props: ["loggedin"],
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
            labelPosition: 'on-border',
            loggedin: this.$route.params.loggedin,
            token: this.$route.params.token,
            listName: "",
            listID: null,
            listDesc: "",
            linkName: "",
            linkID: null,
            linkDesc: "",
            linkImage: "",
        }
    },
    methods: {
        newList: function(){
            const list = {
                "name": this.listName,
                "description": this.listDesc,
                "owner": this.$route.params.userID
            }
            fetch(`${this.$URL}auth/api/lists/`, {
                method: "POST",
                body: JSON.stringify(list),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${this.token}`
                }
            })
            .then((response) => {
                if (response.status != 201) {
                    response.status
                } else {
                    return response.json()
                }
            })
            .then(data => {
                if(data){
                    console.log('data', data)
                } else {
                    alert('Not created :(')
                }
            })
        },
        newLink: function(){
            const link = {
                "name": this.linkName,
                "description": this.linkDesc,
                "image": this.linkImage
            }
            fetch(`${this.$URL}auth/api/links/`, {
                method: "POST",
                body: JSON.stringify(link),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${this.token}`
                }
            })
            .then((response) => {
                if (response.status != 201) {
                    response.status
                } else {
                    return response.json()
                }
            })
            .then(data => {
                if(data){
                    console.log('data', data)
                } else {
                    alert('Not created :(')
                }
            })
        }
    }//,
    // created: function() {
    //     console.log(this.loggedin)
    // }
}
</script>

<style>
#dashboard-container{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>

