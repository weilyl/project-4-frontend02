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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#app:not(Header){
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}

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
