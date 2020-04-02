<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: '首頁' }">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: '分頁' }">Page </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <img src="./assets/logo.png">
    <h1>這是 app 的 H1 </h1>
    <!-- <HelloWorld/> -->
    <router-view></router-view>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    this.$http.get('https://randomuser.me/api/')
      .then((reponse)  => {
        console.log(reponse.data)
      });
  }
}
</script>

<style lang="scss">

@import "~bootstrap/scss/bootstrap" ;

// $color: black;

// body {
//   background-color: $color;
// }

</style>
