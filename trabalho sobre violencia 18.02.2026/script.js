  const botao1 = document.getElementById("bttn-ft1");
  const container = document.getElementById("img1");

  botao.addEventListener("click", () => {
    // Faz o botão sumir
    botao.style.display = "none";

    // Cria a imagem
    const img = document.createElement("img");
    img.src = ".//imgs/Captura de tela_19-2-2026_32544_www.google.com.br"; // coloca o link da sua imagem
    img.alt = "Minha imagem";
    img.style.width = "70%"; // ajusta o tamanho se quiser
    img.style.height = "auto";

    // Adiciona a imagem no container
    container.appendChild(img);
  });