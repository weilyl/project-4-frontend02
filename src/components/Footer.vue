<template>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
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
    }
}
</script>

<style>
.footer {
    width: 100%;
    margin-bottom: -50px;
    overflow: hidden;
}
</style>