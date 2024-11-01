document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelector(".forms");
  const tabela = document.querySelector(".formulas");
  const botaoFormulas = document.querySelector(".botao_formulas");
  const incognita = document.querySelector(".incognitas_juros");
  const botao1 = document.querySelector(".btn_f1");
  const botao2 = document.querySelector(".btn_f2");
  const botao3 = document.querySelector(".btn_f3");
  const botao4 = document.querySelector(".btn_f4");
  const conta1 = document.querySelector(".conta1");
  const conta2 = document.querySelector(".conta2");
  const conta3 = document.querySelector(".conta3");
  const conta4 = document.querySelector(".conta4");
  const conta5 = document.querySelector(".conta5");
  const conta6 = document.querySelector(".conta6");
  const conta7 = document.querySelector(".conta7");
  const botaoescolha1 = document.querySelector(".botaoescolha1");
  const botaoescolha2 = document.querySelector(".botaoescolha2");
  const botaoescolha3 = document.querySelector(".botaoescolha3");
  const botaoescolha4 = document.querySelector(".botaoescolha4");
  const botaoescolha5 = document.querySelector(".botaoescolha5");
  const botaoescolha6 = document.querySelector(".botaoescolha6");
  const capitalInput = document.querySelector("#capital");
  const taxaInput = document.querySelector("#taxa");
  const tempoInput = document.querySelector("#tempo");
  const resultadoSimples = document.querySelector("#resultadoSimples");

  // Função para calcular juros simples
  function calcularJurosSimples() {
    // Pega os valores dos inputs
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100; // Dividir por 100 para converter a porcentagem
    let tempo = parseFloat(document.getElementById("tempo").value);

    // Verifica se os valores são válidos
    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
      document.getElementById("resultado1").textContent =
        "Por favor, insira valores válidos.";
      return;
    }

    // Calcula os juros simples
    let juros = capital * taxa * tempo;

    // Exibe o resultado no elemento com id="resultado"
    document.getElementById(
      "resultado1"
    ).textContent = `O valor dos juros simples é: R$ ${juros.toFixed(2)}`;
  }

  // Adiciona evento ao botão de calcular para executar a função calcularJurosSimples
  document
    .getElementById("calcular1")
    .addEventListener("click", calcularJurosSimples);

  function calcularJurosSimplesmontante() {
    let capital = parseFloat(document.getElementById("capital2").value);
    let taxa = parseFloat(document.getElementById("taxa2").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo2").value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
      document.getElementById("resultado2").textContent =
        "Por favor, insira valores válidos.";
      return;
    }

    let montante = capital * (1 + taxa * tempo);

    document.getElementById(
      "resultado2"
    ).textContent = `O seu montante é: R$ ${montante.toFixed(2)}`;
  }

  document
    .getElementById("calcular2")
    .addEventListener("click", calcularJurosSimplesmontante);

  function calcularJurosCompostos() {
    let capital = parseFloat(document.getElementById("capital3").value);
    let taxa = parseFloat(document.getElementById("taxa3").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo3").value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
      document.getElementById("resultado3").textContent =
        "Por favor, insira valores válidos.";
      return;
    }

    let montante = capital * (1 + taxa) ** tempo;

    document.getElementById(
      "resultado3"
    ).textContent = `O seu montante é: R$ ${montante.toFixed(2)}`;
  }

  document
    .getElementById("calcular3")
    .addEventListener("click", calcularJurosCompostos);

  function calcularDescontoSimplesRacional() {
    let nominal = parseFloat(document.getElementById("nominal").value);
    let taxa = parseFloat(document.getElementById("taxa4").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo4").value);

    if (isNaN(nominal) || isNaN(taxa) || isNaN(tempo)) {
      document.getElementById("resultado4").textContent =
        "Por favor, insira valores válidos.";
      return;
    }

    let atual = nominal / (1 + taxa * tempo);

    document.getElementById(
      "resultado4"
    ).textContent = `O seu atual é: R$ ${atual.toFixed(2)}`;
  }

  document
    .getElementById("calcular4")
    .addEventListener("click", calcularDescontoSimplesRacional);

  function calcularDescontoSimplesComercial() {
    let nominal = parseFloat(document.getElementById("nominal2").value);
    let taxa = parseFloat(document.getElementById("taxa5").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo5").value);

    if (isNaN(nominal) || isNaN(taxa) || isNaN(tempo)) {
      document.getElementById("resultado5").textContent =
        "Por favor, insira valores válidos.";
      return;
    }

    let atual = nominal * (1 - taxa * tempo);

    document.getElementById(
      "resultado5"
    ).textContent = `O seu atual é: R$ ${atual.toFixed(2)}`;
  }
  document
    .getElementById("calcular5")
    .addEventListener("click", calcularDescontoSimplesComercial);

  function calcularDescontoCompostoRacional() {
    let nominal = parseFloat(document.getElementById("nominal3").value);
    let taxa = parseFloat(document.getElementById("taxa6").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo6").value);

    if (isNaN(nominal) || isNaN(taxa) || isNaN(tempo)) {
      document.getElementById("resultado6").textContent =
        "Por favor, insira valores válidos.";
      return;
    }

    let atual = nominal / (1 + taxa) ** tempo;

    document.getElementById(
      "resultado6"
    ).textContent = `O seu atual é: R$ ${atual.toFixed(2)}`;
  }

  document
    .getElementById("calcular6")
    .addEventListener("click", calcularDescontoCompostoRacional);

  function calcularDescontoCompostoComercial() {
    let nominal = parseFloat(document.getElementById("nominal4").value);
    let taxa = parseFloat(document.getElementById("taxa7").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo7").value);

    if (isNaN(nominal) || isNaN(taxa) || isNaN(tempo)) {
      document.getElementById("resultado7").textContent =
        "Por favor, insira valores válidos.";
      return;
    }

    let atual = nominal * (1 - taxa) ** tempo;

    document.getElementById(
      "resultado7"
    ).textContent = `O seu atual é: R$ ${atual.toFixed(2)}`;
  }
  document
    .getElementById("calcular7")
    .addEventListener("click", calcularDescontoCompostoComercial);

  if (forms && tabela && botaoFormulas && incognita) {
    forms.addEventListener("click", function () {
      tabela.classList.toggle("show");
      botaoFormulas.classList.toggle("show");
      incognita.classList.toggle("show");

      conta1.classList.remove("show");
      conta2.classList.remove("show");
      conta3.classList.remove("show");
      conta4.classList.remove("show");
      conta5.classList.remove("show");
      conta6.classList.remove("show");
      conta7.classList.remove("show");
      botaoescolha1.classList.remove("show");
      botaoescolha2.classList.remove("show");
      botaoescolha3.classList.remove("show");
      botaoescolha4.classList.remove("show");
      botaoescolha5.classList.remove("show");
      botaoescolha6.classList.remove("show");
    });
  }

  if (botao1) {
    botao1.addEventListener("click", function () {
      // Esconde os elementos principais
      tabela.classList.remove("show");
      botaoFormulas.classList.remove("show");
      incognita.classList.remove("show");

      //botões de escolha
      botaoescolha1.classList.add("show");
      botaoescolha2.classList.add("show");
    });
  }

  // Configura os listeners para os botões de escolha apenas uma vez
  if (botaoescolha1) {
    botaoescolha1.addEventListener("click", function () {
      botaoescolha1.classList.remove("show");
      botaoescolha2.classList.remove("show");
      conta1.classList.toggle("show");
    });
  }

  if (botaoescolha2) {
    botaoescolha2.addEventListener("click", function () {
      botaoescolha1.classList.remove("show");
      botaoescolha2.classList.remove("show");
      conta2.classList.toggle("show");
    });
  }

  // Ação de cálculo ao clicar no botão "Calcular"
  if (botao2) {
    botao2.addEventListener("click", function () {
      // Esconde os elementos principais
      tabela.classList.remove("show");
      botaoFormulas.classList.remove("show");
      incognita.classList.remove("show");

      // Exibe o formulário de Juros Simples
      conta3.classList.toggle("show");
    });
  }

  if (botao3) {
    botao3.addEventListener("click", function () {
      // Esconde os elementos principais
      tabela.classList.remove("show");
      botaoFormulas.classList.remove("show");
      incognita.classList.remove("show");

      //botões de escolha
      botaoescolha3.classList.add("show");
      botaoescolha4.classList.add("show");
    });
  }

  // Configura os listeners para os botões de escolha apenas uma vez
  if (botaoescolha3) {
    botaoescolha3.addEventListener("click", function () {
      botaoescolha3.classList.remove("show");
      botaoescolha4.classList.remove("show");
      conta4.classList.toggle("show");
    });
  }

  if (botaoescolha4) {
    botaoescolha4.addEventListener("click", function () {
      botaoescolha3.classList.remove("show");
      botaoescolha4.classList.remove("show");
      conta5.classList.toggle("show");
    });
  }

  if (botao4) {
    botao4.addEventListener("click", function () {
      // Esconde os elementos principais
      tabela.classList.remove("show");
      botaoFormulas.classList.remove("show");
      incognita.classList.remove("show");

      //botões de escolha
      botaoescolha5.classList.add("show");
      botaoescolha6.classList.add("show");
    });
  }

  // Configura os listeners para os botões de escolha apenas uma vez
  if (botaoescolha5) {
    botaoescolha5.addEventListener("click", function () {
      botaoescolha5.classList.remove("show");
      botaoescolha6.classList.remove("show");
      conta6.classList.toggle("show");
    });
  }

  if (botaoescolha6) {
    botaoescolha6.addEventListener("click", function () {
      botaoescolha5.classList.remove("show");
      botaoescolha6.classList.remove("show");
      conta7.classList.toggle("show");
    });
  }
});
