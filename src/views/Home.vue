<template>
  <div class="home">
    You're on the hook!
    <HelloWorld msg="Greetings, fellow humans"/>
    <New/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import New from '@/views/New.vue'

export default {
  name: 'Home',
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
  components: {
    HelloWorld,
    New
  },
}
</script>
