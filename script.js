function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light"); // altera a classe para light e vice-versa

  const img = document.querySelector("#profile img");

  //   Se a classe tiver setada como light, a funcao remove. caso contrário, adiciona
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile_light_avatar.png");
    img.setAttribute("alt", "Foto de Lucas com fundo azul claro e azul escuro");
  } else {
    img.setAttribute("src", "./assets/profile_dark_avatar.png");
    img.setAttribute("alt", "Foto de Lucas com fundo roxo e azul claro");
  }
}
