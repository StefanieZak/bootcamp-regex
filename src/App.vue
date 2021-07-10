<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Reset */

* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
h3,
h4,
p,
a,
button {
  margin: 0px;
  padding: 0px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

input {
  outline: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  border: none;
  outline: none;
}

body {
  background: url("././assets/infra-cine.jpg");
  background-size: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 20px 200px 0;
  min-height: 100vh;
  background: #fff;
}

@media screen and (max-width: 1024px) {
  .container {
    margin: 20px 50px 0;
  }
}
@media screen and (max-width: 600px) {
  .container {
    margin: 20px 20px 0;
  }
}
</style>
