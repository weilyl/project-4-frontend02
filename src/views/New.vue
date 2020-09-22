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
                        v-model="linkURL">
                    </b-input>
                </b-field>

                <b-button type="is-info">Add new link to website</b-button>

            </section>
        </div>
    </div><!--END OF Dashboard Container -->
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

