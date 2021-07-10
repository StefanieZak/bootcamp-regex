<template>
  <footer class="footer">
    <img src="@/assets/popcorn.png" alt="popcorn" />
    <p>Type Movies</p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 200px;
  background: #fff;
  padding: 10px 0;
  border-top: 2px solid #888;
}

.footer img {
  width: 32px;
  height: 32px;
  margin-right: 15px;
}

.footer p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}

@media screen and (max-width: 1024px) {
  .footer {
    margin: 0 50px;
  }
}
@media screen and (max-width: 600px) {
  .footer {
    margin: 0 20px;
  }
}
</style>
