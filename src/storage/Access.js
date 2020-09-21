const Access = {
    data: {
      isComponentModalActive: false,
      isRegisterModalActive: false,
      username: "",
      password: "",
      loggedin: "",
      token: "",
      listname: "",
      listoflists: []
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
            this.populateLists(),
            this.$emit('loggedin', data)
            this.token = data.token,
            this.username = '',
            this.password = '',
            this.loggedin = true,
            this.isComponentModalActive = false,
            this.firstname = '',
            this.lastname='',
            this.email = ''
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
    }
}

export default Access;