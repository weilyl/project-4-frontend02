<template>
  <div class="home">
    You're on the hook
    <HelloWorld msg="Greetings, fellow humans"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
}
</script>
