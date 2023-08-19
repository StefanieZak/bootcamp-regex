<template>
  <main class="container">
    <section class="dados-pessoais">
      <h2>Dados Pessoais</h2>
      <form class="dados-pessoais-form">
        <div class="nome-email">
          <label class="nome" for="nome">Nome Completo</label>
          <input
            id="nome"
            name="nome"
            type="text"
            v-model="nome"
            @change="validarNome"
          />

          <label class="email" for="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            v-model="email"
            @change="validarEmail"
          />
        </div>
        <div class="telefone-cpf">
          <label class="telefone" for="telefone">Telefone</label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            v-model="telefone"
            @change="validarTelefone"
            maxlength="17"
          />

          <label class="cpf" for="cpf">CPF</label>
          <input
            id="cpf"
            name="cpf"
            type="tel"
            v-model="cpf"
            @change="validarCpf"
            maxlength="14"
          />
        </div>
      </form>
    </section>
    <section class="dados-cartao">
      <h2>Dados do Cartão</h2>
      <div class="dados-cartao-form">
        <form>
          <label class="nome-cartao" for="nome-cartao">Nome do Cartão</label>
          <input
            id="nome-cartao"
            name="nome-cartao"
            type="text"
            v-model="nomeCartao"
            @change="validarNomeCartao"
          />

          <label class="numero-cartao" for="numero-cartao"
            >Número do Cartão</label
          >
          <input
            id="numero-cartao"
            name="numero-cartao"
            type="tel"
            v-model="numeroCartao"
            @change="validarNumeroCartao"
            maxlength="19"
          />

          <label class="cod-seguranca" for="cod-seguranca"
            >Código de Segurança</label
          >
          <input
            id="cod-seguranca"
            name="cod-seguranca"
            type="tel"
            v-model="codSeguranca"
            @focus="turnBack"
            @blur="turnFront"
            @change="validarCodigoSeguranca"
            maxlength="4"
          />

          <label class="validade-cartao" for="validade-cartao"
            >Data de validade</label
          >
          <input
            id="validade-cartao"
            name="validade-cartao"
            type="tel"
            v-model="validadeCartao"
            @change="validarValidadeCartao"
            maxlength="7"
          />
        </form>
        <div class="card flip" @click="turnCard">
          <div class="frente-cartao">
            <p class="cartao">CreditCard</p>
            <img src="@/assets/chip.png" alt="chip" />
            <p class="cartao-numero">{{ numeroCartao }}</p>
            <p class="cartao-validade">{{ validadeCartao }}</p>
            <div class="cartao-bandeira">
              <p>{{ nomeCartao }}</p>
              <div>
                <span class="vermelho"></span>
                <span class="amarelo"></span>
              </div>
            </div>
          </div>

          <div class="verso-cartao">
            <div class="faixa-preta"></div>
            <div class="faixa-branca">
              <div class="listras-wrapper">
                <span class="listras"></span>
                <span class="listras"></span>
                <span class="listras"></span>
                <span class="listras"></span>
                <span class="listras"></span>
                <span class="listras"></span>
              </div>
              <p class="cartao-seguranca">{{ codSeguranca }}</p>
            </div>
            <div class="texto-cartao">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the when an unknown.
              </p>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="btn-cadastrar" @click="cadastrar">Cadastrar</button>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      nomeCartao: "",
      numeroCartao: "",
      codSeguranca: "",
      validadeCartao: "",
      dadosValidos: {
        nome: false,
        email: false,
        telefone: false,
        cpf: false,
        nomeCartao: false,
        numeroCartao: false,
        codSeguranca: false,
        validadeCartao: false,
      },
    };
  },
  methods: {
    turnCard() {
      const card = document.querySelector(".card");
      card.classList.toggle("flip");
    },
    turnBack() {
      const card = document.querySelector(".card");
      card.classList.remove("flip");
    },
    turnFront() {
      const card = document.querySelector(".card");
      card.classList.add("flip");
    },
    validarNome(event) {
      if (
        !this.nome.trim().match(/[ ]/g) ||
        this.nome.match(/[^a-záéíóúâêôãõç ]+/gi)
      ) {
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid #a9b1b7";
        this.dadosValidos.nome = true;
      }
    },
    validarEmail(event) {
      if (!this.email.match(/^([\w.-])+@[\w-]+\.([\w.-]+)$/gi)) {
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid #a9b1b7";
        this.dadosValidos.email = true;
      }
    },
    validarTelefone(event) {
      if (
        !this.telefone.match(
          /(\+?\d{2}\s?)?(\(?\d{2}\)?[\s-]?)\d{4,5}[\s-]?\d{4}/g
        )
      ) {
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid #a9b1b7";
        this.dadosValidos.telefone = true;
      }
    },
    validarCpf(event) {
      if (!this.cpf.match(/(\d{3}[ .-]?){3}\d{2}/g)) {
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid #a9b1b7";
        this.dadosValidos.cpf = true;
      }
    },
    validarNomeCartao(event) {
      if (
        !this.nomeCartao.trim().match(/[ ]/gi) ||
        this.nomeCartao.match(/([^a-záéíóúâêôãõç ]+)/gi)
      ) {
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid #a9b1b7";
        this.dadosValidos.nomeCartao = true;
      }
    },
    validarNumeroCartao(event) {
      if (!this.numeroCartao.match(/(\d{4}[ ]?){4}/g)) {
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid #a9b1b7";
        this.dadosValidos.numeroCartao = true;
      }
    },
    validarCodigoSeguranca(event) {
      if (!this.codSeguranca.match(/\d{3,4}/g)) {
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid #a9b1b7";
        this.dadosValidos.codSeguranca = true;
      }
    },
    validarValidadeCartao(event) {
      if (!this.validadeCartao.match(/[01]\d\/\d{2,4}/g)) {
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid #a9b1b7";
        this.dadosValidos.validadeCartao = true;
      }
    },
    cadastrar() {
      if (
        this.dadosValidos.nome &&
        this.dadosValidos.email &&
        this.dadosValidos.telefone &&
        this.dadosValidos.cpf &&
        this.dadosValidos.nomeCartao &&
        this.dadosValidos.numeroCartao &&
        this.dadosValidos.codSeguranca &&
        this.dadosValidos.validadeCartao
      ) {
        this.$router.push("/cadastrofinalizado");
      }
    },
  },
};
</script>

<style scoped>
.dados-pessoais h2,
.dados-cartao h2 {
  display: flex;
  justify-content: center;
  margin: 20px 0 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid #aeaeae;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
}

.dados-pessoais-form,
.dados-cartao-form {
  display: flex;
  flex-wrap: wrap;
  max-width: 550px;
  margin: 0 auto;
}

.dados-pessoais-form input,
.dados-cartao-form input {
  width: 260px;
  height: 30px;
  margin-bottom: 30px;
  border: 2px solid #a9b1b7;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  padding-left: 10px;
}

.dados-pessoais-form input:nth-child(2) {
  margin-right: 30px;
}

.dados-pessoais-form label,
.dados-cartao-form label {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #4b4c4d;
  padding: 0 5px;
}

.nome-email,
.telefone-cpf {
  position: relative;
}
.nome,
.telefone,
.nome-cartao,
.numero-cartao,
.cod-seguranca,
.validade-cartao {
  position: absolute;
  top: -10px;
  left: 10px;
  background: #fff;
}
.email,
.cpf {
  position: absolute;
  top: -10px;
  right: 200px;
  background: #fff;
}
.telefone {
  left: 10px;
}
.cpf {
  right: 212px;
}

.dados-cartao-form {
  display: flex;
}

.dados-cartao-form form {
  display: flex;
  flex-direction: column;
  position: relative;
}

.numero-cartao {
  top: 50px;
}

.cod-seguranca {
  top: 110px;
}

.validade-cartao {
  top: 170px;
}

.frente-cartao,
.verso-cartao {
  width: 250px;
  height: 150px;
  background: linear-gradient(140deg, #26213b, #304e4d);
  border-radius: 5px;
  color: #fff;
  font-family: consolas, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  padding: 10px 15px;
  cursor: pointer;
  position: absolute;
}

.card {
  display: flex;
  justify-content: center;
  margin-left: 180px;
  transform-style: preserve-3d;
  transition: 0.9s;
}

.frente-cartao {
  transform: rotateY(180deg);
}

.flip {
  transform: rotateY(180deg);
}

.cartao {
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  margin-bottom: 10px;
}

.frente-cartao img {
  width: 35px;
  height: 25px;
  margin-bottom: 5px;
}

.cartao-numero {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
}

.cartao-validade {
  display: flex;
  justify-content: flex-end;
  font-size: 0.875rem;
  margin-bottom: 10px;
}

.cartao-bandeira {
  display: flex;
  justify-content: space-between;
  position: relative;
}

.vermelho {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: #ff0000;
  position: absolute;
  right: 12px;
}
.amarelo {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: #ffcc00;
  position: absolute;
  right: 0;
}

.verso-cartao {
  padding: 15px 0px 0px;
}

.faixa-preta {
  width: 250px;
  height: 35px;
  background: #222;
}

.faixa-branca {
  display: flex;
  width: 230px;
  height: 20px;
  background: #fff;
  margin: 10px auto 15px;
}

.listras-wrapper {
  display: flex;
  flex-direction: column;
}

.listras {
  width: 170px;
  height: 1px;
  background: #6a77ac;
  margin: 2px 10px 0 2px;
}

.cartao-seguranca {
  color: #222;
}

.texto-cartao {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 6px;
  font-style: italic;
  padding: 0 15px;
}

.texto-cartao p + p {
  margin-top: 5px;
}

.btn-cadastrar {
  display: flex;
  margin: 20px auto 60px;
  color: #fff;
  background: #911919;
  border-radius: 5px;
  padding: 10px 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  cursor: pointer;
}

.btn-cadastrar:hover {
  background: #c75d5d;
}

@media screen and (max-width: 768px) {
  .dados-pessoais h2,
  .dados-cartao h2 {
    font-size: 1rem;
  }
  .dados-pessoais-form,
  .dados-cartao-form {
    max-width: 220px;
  }
  .dados-pessoais-form input,
  .dados-cartao-form input {
    width: 220px;
    height: 35px;
    margin-bottom: 20px;
  }
  .dados-pessoais-form input:nth-child(2) {
    margin-right: 0px;
  }
  .email,
  .cpf {
    top: 45px;
    left: 10px;
    width: 50px;
  }
  .cpf {
    width: 40px;
  }
  .dados-cartao-form form {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .numero-cartao {
    top: 45px;
  }
  .cod-seguranca {
    top: 100px;
  }
  .validade-cartao {
    top: 155px;
  }
  .card {
    margin-left: 110px;
  }
  .btn-cadastrar {
    margin: 180px auto 30px;
  }
}
</style>
