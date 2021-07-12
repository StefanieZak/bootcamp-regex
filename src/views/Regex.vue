<template>
  <div class="container">
    <h2 class="titulo">Resumo Regex</h2>
    <div class="wrapper">
      <div class="links">
        <div>
          <h3>Regexr</h3>
          <a href="https://regexr.com/" target="_blank">https://regexr.com/</a>
        </div>
        <div>
          <h3>Tabela unicode</h3>
          <a href="https://unicode-table.com/pt/#basic-latin" target="_blank"
            >https://unicode-table.com/pt/#basic-latin</a
          >
        </div>
      </div>

      <div class="conteudo">
        <h3>Regular Expression</h3>
        <p>
          Expressões utilizadas para identificar cadeias de caracteres de
          interesse, como caracteres particulares, palavras ou padrões de
          caracteres.
        </p>
      </div>

      <div class="conteudo" id="literal">
        <h3>Literal</h3>
        <p>
          Utilizar um caracter literal irá realizar uma busca específica deste
          caracter
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /j/;</p>
          <p style="font-weight: bold">'janela'.replace(regex, 'p');</p>
          <p>// panela</p>
        </div>
      </div>

      <div class="conteudo" id="flag-g">
        <h3>Flags</h3>
        <p>
          g -> Global. Seleciona globalmente todos os valores dentro do padrão.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /j/g;</p>
          <p>const frase = "A janela já está aberta"</p>
          <p style="font-weight: bold">frase.replace(regex, 'p');</p>
          <p>// A panela pá está aberta</p>
        </div>
      </div>

      <div class="conteudo" id="flag-i">
        <p>
          i -> Case-insensitive. Ignora a diferença entre letras maiúsculas e
          minúsculas.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /java/i;</p>
          <p>
            const frase = "Juntamente com HTML e CSS, o Java é uma das três
            principais tecnologias da World Wide Web."
          </p>
          <p style="font-weight: bold">frase.replace(regex, 'JavaScript');</p>
          <p>
            // Juntamente com HTML e CSS, o JavaScript é uma das três principais
            tecnologias da World Wide Web.
          </p>
        </div>
      </div>

      <div class="conteudo" id="character-class">
        <h3>Character Class</h3>
        <p>
          [ ] -> Define uma classe. Irá procurar todos os caracteres dentro de
          colchetes, estando em sequência ou não.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /[am]/gi;</p>
          <p>
            const frase = "Juntamente com HTML e CSS, o JavaScript é uma das
            três principais tecnologias da World Wide Web."
          </p>
          <p style="font-weight: bold">frase.replace(regex, 'x');</p>
          <p>
            // Juntxxente cox HTxL e CSS, o JxvxScript é uxx dxs três principxis
            tecnologixs dx World Wide Web.
          </p>
        </div>
      </div>

      <div class="conteudo">
        <p>
          Utilizado também para selecionar um caracter ou outro que estiver
          dentro de colchetes.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /ideali[sz]ar/gi;</p>
          <p>
            const frase = "Idealisar é com z: idealizar."
          </p>
          <p style="font-weight: bold">frase.replace(regex, 'idealizar');</p>
          <p>
            // idealizar é com z: idealizar.
          </p>
        </div>
      </div>

      <div class="conteudo">
        <p>
          [ - ] O traço dentro de colchetes pode servir para definirmos um
          alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à
          9. A tabela UNICODE é utilizada como referência para definir os
          caracteres dentro do alcance.
        </p>
        <p style="font-weight: bold">Exemplo: /[A-Z]/g</p>
        <img src="@/assets/exemplo1.svg" alt="Exemplo 1" />
      </div>

      <div class="conteudo">
        <p style="font-weight: bold">Exemplo: /[A-z]/g</p>
        <img src="@/assets/exemplo2.svg" alt="Exemplo 2" />
      </div>

      <div class="conteudo">
        <p style="font-weight: bold">Exemplo: /[0-9]/g</p>
        <img src="@/assets/exemplo3.svg" alt="Exemplo 3" />
      </div>

      <div class="conteudo" id="negated-set">
        <h3>Negated Set</h3>
        <p>
          [^] -> Acento circunflexo dentro de colchetes é utilizado para negar
          uma seleção.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /[^0-9]/gi;</p>
          <p>const frase = "O arquivo 362 está na pasta desktop."</p>
          <p style="font-weight: bold">frase.replace(regex, "");</p>
          <p>// 362</p>
        </div>
      </div>

      <div class="conteudo" id="dot">
        <h3>Dot</h3>
        <p>
          /./ -> O ponto seleciona qualquer caracter, menos quebras de tinha.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /./g;</p>
          <p>const frase = "O arquivo 362 está na pasta desktop."</p>
          <p style="font-weight: bold">frase.replace(regex, 'x');</p>
          <p>// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
        </div>
      </div>

      <div class="conteudo" id="escaped-characters">
        <h3>Escaped Characters</h3>
        <p>
          /\/ -> Usada para tornar literais os caracteres especiais
          +*?^$\.[]{}()|/
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /\./g;</p>
          <p>const frase = "134.908.876-10"</p>
          <p style="font-weight: bold">frase.replace(regex, "");</p>
          <p>// 134908876-10</p>
        </div>
      </div>

      <div class="conteudo" id="word">
        <h3>Word</h3>
        <p>
          /\w -> Seleciona qualquer caracter alfanumérico e o underline. É a
          mesma coisa que [A-Za-z0-9_]
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /\w/g;</p>
          <p>
            const frase = "O código CSS pode ser aplicado diretamente nas tags
            ou ficar contido dentro das tags &lt;style&gt;. "
          </p>
          <p style="font-weight: bold">frase.replace(regex, '-');</p>
          <p>
            // - -ó---- --- ---- --- -------- ----------- --- ---- -- -----
            ------- ------ --- ---- &lt;-----&gt;.
          </p>
        </div>
      </div>

      <div class="conteudo" id="not-word">
        <h3>Not Word</h3>
        <p>
          /\W -> Seleciona qualquer caracter que não for alfanumérico nem o
          underline.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /\W/g;</p>
          <p>
            const frase = "O código CSS pode ser aplicado diretamente nas tags
            ou ficar contido dentro das tags &lt;style&gt;. "
          </p>
          <p style="font-weight: bold">frase.replace(regex, '-');</p>
          <p>
            //
            O-c-digo-CSS-pode-ser-aplicado-diretamente-nas-tags-ou-ficar-contido-dentro-das-
            tags--style---
          </p>
        </div>
      </div>

      <div class="conteudo" id="digit">
        <h3>Digit</h3>
        <p>
          /\d -> Seleciona qualquer digito. É a mesma coisa que [0-9]
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /\d/g;</p>
          <p>
            const frase = "(11)98667-3442"
          </p>
          <p style="font-weight: bold">frase.replace(regex, '.');</p>
          <p>
            // (..).....-....
          </p>
        </div>
      </div>

      <div class="conteudo" id="not-digit">
        <h3>Not Digit</h3>
        <p>
          /\D -> Seleciona tudo que não for digito, menos quebra de linha. É a
          mesma coisa que [^0-9]
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /\D/g;</p>
          <p>
            const frase = "(11)98667-3442"
          </p>
          <p style="font-weight: bold">frase.replace(regex, '.');</p>
          <p>
            // .11.98667.3442
          </p>
        </div>
      </div>

      <div class="conteudo" id="whitespace">
        <h3>Whitespace</h3>
        <p>
          /\s -> Seleciona os espaços em branco (espaço, tab e quebra de linha).
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /\s/g;</p>
          <p>
            const frase = "+55 (11) 98667- 3442 "
          </p>
          <p style="font-weight: bold">frase.replace(regex, "");</p>
          <p>
            // +55(11)98667-3442
          </p>
        </div>
      </div>

      <div class="conteudo" id="not-whitespace">
        <h3>Not Whitespace</h3>
        <p>
          /\S -> Seleciona tudo o que não for o espaço em branco.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /\S/g;</p>
          <p>
            const frase = "+55 (11) 98667- 3442 "
          </p>
          <p style="font-weight: bold">frase.replace(regex, '-');</p>
          <p>
            // --- ---- ------ ----
          </p>
        </div>
      </div>

      <div class="conteudo" id="quantifier">
        <h3>Quantifier</h3>
        <p>
          /{} -> Seleciona caracteres seguidos.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /o{2}/g;</p>
          <p>
            const frase = "shampoo"
          </p>
          <p style="font-weight: bold">frase.replace(regex, 'u');</p>
          <p>
            // shampu
          </p>
        </div>
      </div>

      <div class="conteudo" id="quantifier-min-max">
        <h3>Quantifier Min E Max</h3>
        <p>
          /{,} -> Seleciona caracteres seguidos de acordo com a quantidade
          informada para mínimo e máximo.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /o{2,4}/g;</p>
          <p>
            const frase = "shampoooooo"
          </p>
          <p style="font-weight: bold">frase.replace(regex, 'u');</p>
          <p>
            // shampuu
          </p>
        </div>
      </div>

      <div class="conteudo" id="plus">
        <h3>Plus</h3>
        <p>
          + -> Seleciona quando existir pelo menos uma ou mais ocorrências.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /o+/g;</p>
          <p>
            const frase = "O shampoo acabou hoje."
          </p>
          <p style="font-weight: bold">frase.replace(regex, 'u');</p>
          <p>
            // O shampu acabuu huje.
          </p>
        </div>
      </div>

      <div class="conteudo" id="star">
        <h3>Star</h3>
        <p>
          * -> Seleciona quando existir 0 ou mais ocorrências.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /ru*/g;</p>
          <p>
            const frase = "HTML e CSS da maneira certa e usando boas práticas da
            web, estruturando seu código para legibilidade e layouts
            verdadeiramente interessantes"
          </p>
          <p style="font-weight: bold">frase.replace(regex, '_');</p>
          <p>
            // HTML e CSS da manei_a ce_ta e usando boas p_áticas da web,
            est_tu_ando seu código pa_a legibilidade e layouts ve_dadei_amente
            inte_essantes
          </p>
        </div>
      </div>

      <div class="conteudo" id="optional">
        <h3>Optional</h3>
        <p>
          ? -> O caracter se torna opcional, pode ou não existir.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /a?r?raia/g;</p>
          <p>
            const frase = "O certo é raia ou arraia?"
          </p>
          <p style="font-weight: bold">frase.replace(regex, 'ARRAIA');</p>
          <p>
            // O certo é ARRAIA ou ARRAIA ?
          </p>
        </div>
      </div>

      <div class="conteudo" id="alternation">
        <h3>Alternation</h3>
        <p>
          | -> Seleciona a opção antes ou depois do sinal.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /css|html|javascript/i;</p>
          <p>
            const frase = "Juntamente com HTML e CSS, o JavaScript é uma das
            três principais tecnologias da World Wide Web."
          </p>
          <p style="font-weight: bold">frase.replace(regex, '___');</p>
          <p>
            // Juntamente com ___ e CSS, o JavaScript é uma das três principais
            tecnologias da World Wide Web.
          </p>
        </div>
      </div>

      <div class="conteudo" id="begenning">
        <h3>Begenning</h3>
        <p>
          ^ -> Corresponde ao início da string ou ao início de uma linha.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /^\w+/gi;</p>
          <p>
            const frase = "email@email.com"
          </p>
          <p style="font-weight: bold">frase.replace(regex, 'outroemail');</p>
          <p>
            // outroemail@email.com
          </p>
        </div>
      </div>

      <div class="conteudo" id="end">
        <h3>End</h3>
        <p>
          $ -> Corresponde ao final da string ou final de uma linha.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /\w+$/gi;</p>
          <p>
            const frase = "email@email.com"
          </p>
          <p style="font-weight: bold">frase.replace(regex, 'com.br');</p>
          <p>
            // email@email.com.br
          </p>
        </div>
      </div>

      <div class="conteudo" id="flag-m">
        <h3>Flag</h3>
        <p>
          m -> Multiline. Com essa flag podemos informar que a busca de início ^
          e final $ de linha devem ocorrer em todas as linhas disponíveis.
        </p>
        <div class="codigo">
          <p style="font-weight: bold">const regex = /\w+$/gm</p>
          <p style="font-weight: bold">
            'email@email.com<br />
            'outroemail@email.com'.replace(regex, 'com.br');
          </p>
          <p>
            // email@email.com.br<br />
            outroemail@email.com.br
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regex",
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

.wrapper {
  padding: 0 100px;
}

.links {
  display: flex;
  margin-bottom: 40px;
}

.links h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-bottom: 5px;
}

.links a,
.links a:visited {
  margin-right: 60px;
  font-family: Arial, Helvetica, sans-serif;
  color: #5a85da;
}

.links a:hover {
  text-decoration: underline;
}

.conteudo {
  margin-top: 10px;
  margin-bottom: 30px;
}

.conteudo h3 {
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: bold;
}

.conteudo p {
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}

.conteudo img {
  margin: 10px auto;
}

.codigo {
  background: #dcdce6;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .titulo {
    font-size: 1rem;
    margin: 20px 0 30px;
  }

  .wrapper {
    padding: 0 50px;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    font-size: 0.75rem;
  }

  .links div + div {
    margin-top: 20px;
  }

  .conteudo h3 {
    font-size: 0.875rem;
  }

  .conteudo p {
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 425px) {
  .wrapper {
    padding: 0 15px;
  }
}
</style>
