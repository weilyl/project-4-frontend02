const New = {
    data: {
        token: "",
        listName: "",
        listID: null,
        listDesc: "",
        linkName = "",
        linkID = null,
        linkDesc = "",
        linkImage = ""
    },
    methods: {
        newList: function() {
            fetch(`${this.$URL}auth/api/lists/`, {
                method: "POST",
                body: JSON.stringify(), 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`
                }
            })
            .then((response) => {
                if (response.status !=201) {
                    response.status
                } else {
                    return response.json()
                }
            })
            .then(data => {
                console.log('data is ', data)
                if (data){
                    this.listName = "",
                    this.listID = null,
                    this.listDesc = ""
                } else {
                    alert("Could not save list. Check if that list already exists")
                }
            })  
        },
        newLink: function() {
            fetch(`${this.$URL}auth/api/links/`, {
                method: "POST",
                body: JSON.stringify(), 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`
                }
            })
            .then((response) => {
                if (response.status !=201) {
                    response.status
                } else {
                    return response.json()
                }
            })
            .then(data => {
                console.log('data is ', data)
                if (data){
                    this.linkName = "",
                    this.linkID = null,
                    this.linkDesc = "",
                    this.linkImage = ""
                } else {
                    alert("Could not save list. Check if that list already exists")
                }
            })  
        }
    }
}

export default {
    name: New
}