<template>
  <main class="container">
    <h2 class="titulo">Cadastro Finalizado</h2>
    <p class="paragrafo">
      Cadastro efetuado com sucesso!<br />
      Pegue sua pipoca e divirta-se.
    </p>
    <img class="popcorn" src="@/assets/popcorn2.png" alt="pipoca" />
  </main>
</template>

<script>
export default {
  name: "CadastroFinalizado",
};
</script>

<style scoped>
.titulo {
  display: flex;
  justify-content: center;
  margin: 20px 0 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid #aeaeae;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
}

.paragrafo {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
}

.popcorn {
  margin: 20px auto 0;
  width: 180px;
  height: 180px;
}

@media screen and (max-width: 768px) {
  .titulo {
    font-size: 1rem;
  }
}
</style>
