<template>
  <div id="app">
    <div id="nav">
      <Header/>  
    </div>
    <div id="main">
      <!--Sidebar/-->
      <Link v-bind:loggedin="loggedin"
      />

      <router-view
       @loggedin="login"
      />
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
//import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Header,
    //Sidebar,
    Footer
  },
  data() {
    return {
      loggedin: false
    }
  },
  methods: {
    login: function(event){
      console.log(event)
      this.loggedin = true
    }
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

</style>

<!--#main {
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
}-->