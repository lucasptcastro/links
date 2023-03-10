function toggleMode() {
  const html = document.documentElement;

  //   Se a classe tiver setada como light, a funcao remove. caso contrário, adiciona

  //   if (html.classList.contains("light")) {
  //     html.classList.remove("light");
  //   } else {
  //     html.classList.add("light");
  //   }

  // Faz o mesmo da funcao acima
  html.classList.toggle("light");
}
