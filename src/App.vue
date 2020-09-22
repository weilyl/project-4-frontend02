<template>
  <div id="app">
    <div id="nav">
      <Header/>  
    </div>
    <div id="main">
      <!--Sidebar/-->
      <!--@loggedin="login(event)" placeholder for component-->
      <router-view
      />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
//import Sidebar from './components/Sidebar

export default {
  name: 'App',
  // props: ["loggedin"],
  components: {
    Header,
    //Sidebar,
    Footer
  },
  data() {
    return {
      // loggedin: false
    }
  },
  methods: {
    // login: function(event){
    //   console.log(event)
    //   this.loggedin = true
    // }
  }
  
}
</script>

<style>


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
    width: 100%;
    margin-bottom: 0px;
}

</style>
