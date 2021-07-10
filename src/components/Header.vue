<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/clapboard.png" alt="clapboard" />
      <router-link to="/">Type Movies</router-link>
    </div>
    <nav class="menu">
      <div>
        <router-link to="/">Cadastro</router-link>
        <router-link to="/regex">Regex</router-link>
      </div>
      <div class="exit">
        <router-link to="sair">Sair</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background: linear-gradient(#140f0f 60%, transparent);
  padding-left: 200px;
  padding-right: 200px;
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 60px;
}

.logo img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.logo a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: #fff;
}

.menu {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  color: #fff;
}

.menu a + a {
  margin-left: 40px;
}

.menu a.router-link-exact-active {
  border-bottom: 1px solid yellow;
}

.menu a:hover {
  border-bottom: 1px solid yellow;
}

@media screen and (max-width: 1024px) {
  .header {
    padding-left: 50px;
    padding-right: 50px;
  }
  .logo {
    margin-right: 30px;
  }
  .logo a {
    font-size: 1.5rem;
  }
  .menu {
    width: 70%;
  }
  .menu a {
    font-size: 1rem;
  }
  .menu a + a {
    margin-left: 30px;
  }
}
@media screen and (max-width: 600px) {
  .header {
    padding-left: 20px;
    padding-right: 20px;
  }
  .logo {
    margin-right: 10px;
  }
  .logo a {
    font-size: 1.125rem;
  }
  .menu {
    width: 60%;
  }
  .menu a {
    font-size: 0.875rem;
  }
  .menu a + a {
    margin-left: 20px;
  }
}

@media screen and (max-width: 375px) {
  .logo {
    margin-right: 0px;
  }
  .menu {
    width: 75%;
  }
  .menu a + a {
    margin-left: 20px;
  }
}
</style>
