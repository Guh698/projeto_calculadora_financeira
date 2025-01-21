document.addEventListener("DOMContentLoaded", function () {
  const addClickEvent = (element, handler) => {
    if (element) element.addEventListener("click", handler);
  };
  const forms = document.querySelector(".forms");
  const formulasnav = document.querySelector(".tabela_formulas");
  const tabela = document.querySelector(".formulas");
  const tabela2 = document.querySelector(".formulas2");
  const botaoFormulas = document.querySelector(".botao_formulas");
  const incognita = document.querySelector(".incognitas_juros");
  const incognitadescontos = document.querySelector(".incognitas_descontos");
  const incnav = document.querySelector(".incnav");
  const botao1 = document.querySelector(".btn_f1");
  const botao2 = document.querySelector(".btn_f2");
  const botao3 = document.querySelector(".btn_f3");
  const botao4 = document.querySelector(".btn_f4");
  const botao5 = document.querySelector(".btn_f5");
  const conta1 = document.querySelector(".conta1");
  const conta2 = document.querySelector(".conta2");
  const conta3 = document.querySelector(".conta3");
  const conta4 = document.querySelector(".conta4");
  const conta5 = document.querySelector(".conta5");
  const conta6 = document.querySelector(".conta6");
  const conta7 = document.querySelector(".conta7");
  const conta8 = document.querySelector(".conta8");
  const conta9 = document.querySelector(".conta9");
  const conta10 = document.querySelector(".conta10");
  const botaoescolha1 = document.querySelector(".botaoescolha1");
  const botaoescolha2 = document.querySelector(".botaoescolha2");
  const botaoescolha3 = document.querySelector(".botaoescolha3");
  const botaoescolha4 = document.querySelector(".botaoescolha4");
  const botaoescolha5 = document.querySelector(".botaoescolha5");
  const botaoescolha6 = document.querySelector(".botaoescolha6");
  const botaoescolha7 = document.querySelector(".botaoescolha7");
  const botaoescolha8 = document.querySelector(".botaoescolha8");
  const botaoescolha9 = document.querySelector(".botaoescolha9");
  const botaoCalcular1 = document.getElementById("calcular8");
  const botaoCalcular2 = document.getElementById("calcular9");
  const botaoCalcular3 = document.getElementById("calcular10");
  const capitalInput = document.querySelector("#capital");
  const taxaInput = document.querySelector("#taxa");
  const tempoInput = document.querySelector("#tempo");
  const resultadoSimples = document.querySelector("#resultadoSimples");
  const resultado8 = document.getElementById("resultado8");
  const resultado9 = document.getElementById("resultado9");
  const resultado10 = document.getElementById("resultado10");
  const resultados = document.querySelectorAll(".resultado");
  const icone_menu = document.getElementById("icone_menu");
  const menu = document.getElementById("menu");
  const config_option = document.getElementById("gear_icon");
  const config_menu = document.getElementById("menuconfigs");
  const close_config_menu = document.getElementById("close_config");
  const overlay = document.querySelector(".overlay");
  const arrowLeft = document.querySelector("#arrow-left");
  const arrowRight = document.querySelector("#arrow-right");
  const sizes = Array.from(document.querySelectorAll(".tamanhos div"));
  const content = document.querySelector(".content");
  const arrowLeft2 = document.getElementById("arrow-left2");
  const arrowRight2 = document.getElementById("arrow-right2");
  const arrowLeft3 = document.querySelector("#arrow-left3");
  const arrowRight3 = document.querySelector("#arrow-right3");
  const temas = document.querySelectorAll(".temas div");
  const volumes = document.querySelectorAll(".volumes div");
  const resultado20 = document.querySelector(".resultado20");
  const resultado21 = document.querySelector(".resultado21");
  const resultado22 = document.querySelector(".resultado22");
  const closewin1 = document.getElementById("closewin1");
  const closewin2 = document.getElementById("closewin2");
  const closewin3 = document.getElementById("closewin3");

  function calcularJurosSimples() {
    let capital = parseFloat(document.getElementById("capital").value);
    let taxa = parseFloat(document.getElementById("taxa").value) / 100;
    let tempo = parseFloat(document.getElementById("tempo").value);

    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo)) {
      document.getElementById("resultado1").textContent =
        "Por favor, insira valores válidos.";
      return;
    }

    let juros = capital * taxa * tempo;

    document.getElementById(
      "resultado1"
    ).textContent = `O valor dos juros simples é: R$ ${juros.toFixed(2)}`;
  }

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

  function calcularSAC() {
    let principal = parseFloat(document.getElementById("principal").value);
    let taxa = parseFloat(document.getElementById("taxa8").value) / 100;
    let parcelas = parseFloat(document.getElementById("parcelas").value);

    if (isNaN(principal) || isNaN(taxa) || isNaN(parcelas)) {
      document.getElementById("resultado8").innerHTML =
        "Por favor, insira valores válidos.";
      return;
    }

    let amortizacaoFixa = principal / parcelas;
    let totalJuros = 0;
    let totalPrestacoes = 0;
    let saldoDevedor = principal;
    let detalhesParcelas = `
        <table border="1" style="width: 100%; text-align: left;">
            <tr>
                <th>Parcela</th>
                <th>Amortização</th>
                <th>Juros</th>
                <th>Prestação</th>
                <th>Saldo Devedor</th>
            </tr>
    `;

    for (let i = 1; i <= parcelas; i++) {
      let juros = saldoDevedor * taxa;
      let prestacao = amortizacaoFixa + juros;

      totalJuros += juros;
      totalPrestacoes += prestacao;

      if (parcelas <= 10) {
        detalhesParcelas += `
              <tr>
                  <td>${i}</td>
                  <td>R$ ${amortizacaoFixa.toFixed(2)}</td>
                  <td>R$ ${juros.toFixed(2)}</td>
                  <td>R$ ${prestacao.toFixed(2)}</td>
                  <td>R$ ${saldoDevedor.toFixed(2)}</td>
              </tr>
          `;
      }

      saldoDevedor -= amortizacaoFixa;
    }

    if (parcelas <= 10) {
      detalhesParcelas += `</table>`;
    } else {
      detalhesParcelas =
        "<p><em>O detalhamento das parcelas foi omitido devido ao número elevado de parcelas.</em></p>";
    }

    let resultadoFinal = `
      <strong>Resumo:</strong><br>
      Total Pago: R$ ${totalPrestacoes.toFixed(2)}<br>
      Total de Juros: R$ ${totalJuros.toFixed(2)}<br>
      Amortização Total: R$ ${principal.toFixed(2)}<br><br>
      ${parcelas <= 10 ? `<br>${detalhesParcelas}` : detalhesParcelas}
  `;

    const resultado8 = document.getElementById("resultado8");
    resultado8.innerHTML = resultadoFinal;
  }

  if (botaoCalcular1 && resultado8) {
    botaoCalcular1.addEventListener("click", calcularSAC);
    resultado8.classList.remove("show0");
  }

  function calcularPrice() {
    let principal = parseFloat(document.getElementById("principal2").value);
    let taxa = parseFloat(document.getElementById("taxa9").value) / 100;
    let parcelas = parseFloat(document.getElementById("parcelas2").value);

    if (isNaN(principal) || isNaN(taxa) || isNaN(parcelas)) {
      document.getElementById("resultado9").innerHTML =
        "Por favor, insira valores válidos.";
      return;
    }

    let coeficiente =
      (taxa * Math.pow(1 + taxa, parcelas)) /
      (Math.pow(1 + taxa, parcelas) - 1);

    let prestacao = principal * coeficiente;
    let totalJuros = 0;
    let saldoDevedor = principal;
    let detalhesParcelas = `
        <table border="1" style="width: 100%; text-align: left;">
            <tr>
                <th>Parcela</th>
                <th>Prestação</th>
                <th>Juros</th>
                <th>Amortização</th>
                <th>Saldo Devedor</th>
            </tr>
    `;

    for (let i = 1; i <= parcelas; i++) {
      let juros = saldoDevedor * taxa;
      let amortizacao = prestacao - juros;

      totalJuros += juros;

      saldoDevedor -= amortizacao;

      if (parcelas <= 10) {
        detalhesParcelas += `
                <tr>
                    <td>${i}</td>
                    <td>R$ ${prestacao.toFixed(2)}</td>
                    <td>R$ ${juros.toFixed(2)}</td>
                    <td>R$ ${amortizacao.toFixed(2)}</td>
                    <td>R$ ${saldoDevedor.toFixed(2)}</td>
                </tr>
            `;
      }
    }

    if (parcelas <= 10) {
      detalhesParcelas += `</table>`;
    } else {
      detalhesParcelas =
        "<p><em>O detalhamento das parcelas foi omitido devido ao número elevado de parcelas.</em></p>";
    }

    let totalPago = prestacao * parcelas;

    // Exibir os resultados finais
    let resultadoFinal = `
        <strong>Resumo:</strong><br>
        Total Pago: R$ ${totalPago.toFixed(2)}<br>
        Total de Juros: R$ ${totalJuros.toFixed(2)}<br>
        Amortização Total: R$ ${principal.toFixed(2)}<br><br>
        ${parcelas <= 10 ? `<br>${detalhesParcelas}` : detalhesParcelas}
    `;

    resultado9.innerHTML = resultadoFinal;
  }

  botaoCalcular2.addEventListener("click", calcularPrice);

  function calcularAmericano() {
    let principal = parseFloat(document.getElementById("principal3").value);
    let taxa = parseFloat(document.getElementById("taxa10").value) / 100;
    let parcelas = parseFloat(document.getElementById("parcelas3").value);

    if (isNaN(principal) || isNaN(taxa) || isNaN(parcelas)) {
      document.getElementById("resultado10").innerHTML =
        "Por favor, insira valores válidos.";
      return;
    }

    let jurosPorParcela = principal * taxa;
    let totalJuros = jurosPorParcela * parcelas;
    let ultimaParcela = jurosPorParcela + principal;
    let totalPago = jurosPorParcela * (parcelas - 1) + ultimaParcela;

    let detalhesParcelas = `
        <table border="1" style="width: 100%; text-align: left;">
            <tr>
                <th>Parcela</th>
                <th>Juros</th>
                <th>Amortização</th>
                <th>Prestação</th>
            </tr>
    `;

    for (let i = 1; i <= parcelas; i++) {
      if (parcelas <= 10) {
        let amortizacao = i === parcelas ? principal : 0;

        let prestacao = i === parcelas ? ultimaParcela : jurosPorParcela;

        detalhesParcelas += `
                <tr>
                    <td>${i}</td>
                    <td>R$ ${jurosPorParcela.toFixed(2)}</td>
                    <td>R$ ${amortizacao.toFixed(2)}</td>
                    <td>R$ ${prestacao.toFixed(2)}</td>
                </tr>
            `;
      }
    }

    if (parcelas <= 10) {
      detalhesParcelas += `</table>`;
    } else {
      detalhesParcelas =
        "<p><em>O detalhamento das parcelas foi omitido devido ao número elevado de parcelas.</em></p>";
    }

    let resultadoFinal = `
        <strong>Resumo:</strong><br>
        Prestação (exceto última): R$ ${jurosPorParcela.toFixed(2)}<br>
        Última Prestação: R$ ${ultimaParcela.toFixed(2)}<br>
        Total Pago: R$ ${totalPago.toFixed(2)}<br>
        Total de Juros: R$ ${totalJuros.toFixed(2)}<br>
        Amortização Total: R$ ${principal.toFixed(2)}<br><br>
        ${parcelas <= 10 ? `<br>${detalhesParcelas}` : detalhesParcelas}
    `;

    resultado10.innerHTML = resultadoFinal;
  }

  botaoCalcular3.addEventListener("click", calcularAmericano);

  if (forms && botaoFormulas && incognita) {
    forms.addEventListener("click", function () {
      botaoFormulas.classList.toggle("show");

      tabela.classList.remove("show");
      tabela2.classList.remove("show");
      incognita.classList.remove("show");
      incognitadescontos.classList.remove("show");
      conta1.classList.remove("show");
      conta2.classList.remove("show");
      conta3.classList.remove("show");
      conta4.classList.remove("show");
      conta5.classList.remove("show");
      conta6.classList.remove("show");
      conta7.classList.remove("show");
      conta8.classList.remove("show");
      conta9.classList.remove("show");
      conta10.classList.remove("show");
      botaoescolha1.classList.remove("show");
      botaoescolha2.classList.remove("show");
      botaoescolha3.classList.remove("show");
      botaoescolha4.classList.remove("show");
      botaoescolha5.classList.remove("show");
      botaoescolha6.classList.remove("show");
      botaoescolha7.classList.remove("show");
      botaoescolha8.classList.remove("show");
      botaoescolha9.classList.remove("show");
      resultado20.classList.remove("show");
      resultado21.classList.remove("show");
      resultado22.classList.remove("show");
    });
  }

  if (formulasnav && tabela && tabela2) {
    formulasnav.addEventListener("click", function () {
      tabela.classList.toggle("show");
      tabela2.classList.toggle("show");

      botaoFormulas.classList.remove("show");
      conta1.classList.remove("show");
      conta2.classList.remove("show");
      conta3.classList.remove("show");
      conta4.classList.remove("show");
      conta5.classList.remove("show");
      conta6.classList.remove("show");
      conta7.classList.remove("show");
      conta8.classList.remove("show");
      conta9.classList.remove("show");
      conta10.classList.remove("show");
      botaoescolha1.classList.remove("show");
      botaoescolha2.classList.remove("show");
      botaoescolha3.classList.remove("show");
      botaoescolha4.classList.remove("show");
      botaoescolha5.classList.remove("show");
      botaoescolha6.classList.remove("show");
      botaoescolha7.classList.remove("show");
      botaoescolha8.classList.remove("show");
      botaoescolha9.classList.remove("show");
      incognitadescontos.classList.remove("show");
      incognita.classList.remove("show");
      resultado20.classList.remove("show");
      resultado21.classList.remove("show");
      resultado22.classList.remove("show");
    });
  }

  if (incnav && tabela && botaoFormulas && forms) {
    incnav.addEventListener("click", function () {
      tabela.classList.remove("show");
      tabela2.classList.remove("show");
      botaoFormulas.classList.remove("show");
      conta1.classList.remove("show");
      conta2.classList.remove("show");
      conta3.classList.remove("show");
      conta4.classList.remove("show");
      conta5.classList.remove("show");
      conta6.classList.remove("show");
      conta7.classList.remove("show");
      conta8.classList.remove("show");
      conta9.classList.remove("show");
      conta10.classList.remove("show");
      botaoescolha1.classList.remove("show");
      botaoescolha2.classList.remove("show");
      botaoescolha3.classList.remove("show");
      botaoescolha4.classList.remove("show");
      botaoescolha5.classList.remove("show");
      botaoescolha6.classList.remove("show");
      botaoescolha7.classList.remove("show");
      botaoescolha8.classList.remove("show");
      botaoescolha9.classList.remove("show");
      incognitadescontos.classList.toggle("show");
      incognita.classList.toggle("show");
      resultado20.classList.remove("show");
      resultado21.classList.remove("show");
      resultado22.classList.remove("show");
    });
  }

  if (botao1) {
    botao1.addEventListener("click", function () {
      tabela.classList.remove("show");
      tabela2.classList.remove("show");
      botaoFormulas.classList.remove("show");
      incognitadescontos.classList.remove("show");
      incognita.classList.remove("show");

      botaoescolha1.classList.add("show");
      botaoescolha2.classList.add("show");
    });
  }

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

  if (botao2) {
    botao2.addEventListener("click", function () {
      tabela.classList.remove("show");
      botaoFormulas.classList.remove("show");
      incognita.classList.remove("show");
      incognitadescontos.classList.remove("show");

      conta3.classList.toggle("show");
    });
  }

  if (botao3) {
    botao3.addEventListener("click", function () {
      tabela.classList.remove("show");
      botaoFormulas.classList.remove("show");
      incognita.classList.remove("show");
      incognitadescontos.classList.remove("show");

      botaoescolha3.classList.add("show");
      botaoescolha4.classList.add("show");
    });
  }

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
      tabela.classList.remove("show");
      botaoFormulas.classList.remove("show");
      incognita.classList.remove("show");
      incognitadescontos.classList.remove("show");

      botaoescolha5.classList.add("show");
      botaoescolha6.classList.add("show");
    });
  }

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

  if (botao5) {
    botao5.addEventListener("click", function () {
      tabela.classList.remove("show");
      botaoFormulas.classList.remove("show");
      incognita.classList.remove("show");
      incognitadescontos.classList.remove("show");
      botaoescolha7.classList.add("show");
      botaoescolha8.classList.add("show");
      botaoescolha9.classList.add("show");
    });
  }

  if (botaoescolha7 && resultado20) {
    botaoescolha7.addEventListener("click", function () {
      botaoescolha7.classList.remove("show");
      botaoescolha8.classList.remove("show");
      botaoescolha9.classList.remove("show");
      resultado20.classList.remove("show");
      conta8.classList.toggle("show");
    });
    if (resultado20 && botaoCalcular1) {
      botaoCalcular1.addEventListener("click", function () {
        resultado20.classList.add("show");
      });
    }
    if (closewin1) {
      closewin1.addEventListener("click", function () {
        resultado20.classList.remove("show");
        resultado8.classList.remove("show");
      });
    }
  }

  if (botaoescolha8 && resultado21) {
    botaoescolha8.addEventListener("click", function () {
      botaoescolha7.classList.remove("show");
      botaoescolha8.classList.remove("show");
      botaoescolha9.classList.remove("show");

      resultado21.classList.remove("show");
      conta9.classList.toggle("show");
    });
    if (resultado21 && botaoCalcular2) {
      botaoCalcular2.addEventListener("click", function () {
        resultado21.classList.add("show");
      });
    }
    if (closewin2) {
      closewin2.addEventListener("click", function () {
        resultado21.classList.remove("show");
        resultado9.classList.remove("show");
      });
    }
  }

  if (botaoescolha9 && resultado22) {
    botaoescolha9.addEventListener("click", function () {
      botaoescolha7.classList.remove("show");
      botaoescolha8.classList.remove("show");
      botaoescolha9.classList.remove("show");

      resultado22.classList.remove("show");
      conta10.classList.toggle("show");
    });
    if (resultado22 && botaoCalcular3) {
      botaoCalcular3.addEventListener("click", function () {
        resultado22.classList.add("show");
      });
    }
    if (closewin3) {
      closewin3.addEventListener("click", function () {
        resultado22.classList.remove("show");
        resultado10.classList.remove("show");
      });
    }
  }

  // Menu Toggle
  addClickEvent(icone_menu, () => menu?.classList.toggle("show"));

  // Config Menu Toggle
  addClickEvent(config_option, () => {
    config_menu?.classList.add("show");
    menu?.classList.remove("show");
    overlay?.classList.add("active");
  });

  addClickEvent(close_config_menu, () => {
    config_menu?.classList.remove("show");
    overlay?.classList.remove("active");
  });

  // Atualização de tamanho de fonte
  let currentFontSizeIndex = sizes.findIndex((size) =>
    size.classList.contains("padrao")
  );

  const updateFontSize = () => {
    const classes = ["pequeno", "medio", "padrao", "grande"];
    const currentSize = sizes[currentFontSizeIndex]?.getAttribute("data-size");

    if (currentSize) {
      document.documentElement.classList.remove(...classes);
      document.documentElement.classList.add(currentSize);
      sizes.forEach((size) => size.classList.remove("active"));
      sizes[currentFontSizeIndex]?.classList.add("active");
    }
  };

  addClickEvent(arrowLeft, () => {
    currentFontSizeIndex =
      (currentFontSizeIndex - 1 + sizes.length) % sizes.length;
    updateFontSize();
  });

  addClickEvent(arrowRight, () => {
    currentFontSizeIndex = (currentFontSizeIndex + 1) % sizes.length;
    updateFontSize();
  });

  updateFontSize();

  // Atualização de tema
  let currentThemeIndex = 0;

  const updateTheme = () => {
    const currentTheme = temas[currentThemeIndex]?.getAttribute("data-theme");
    if (currentTheme) {
      document.documentElement.className = currentTheme;
      temas.forEach((theme) => theme.classList.remove("active"));
      temas[currentThemeIndex]?.classList.add("active");
    }
  };

  addClickEvent(arrowLeft2, () => {
    currentThemeIndex = (currentThemeIndex - 1 + temas.length) % temas.length;
    updateTheme();
  });

  addClickEvent(arrowRight2, () => {
    currentThemeIndex = (currentThemeIndex + 1) % temas.length;
    updateTheme();
  });

  updateTheme();
});
