document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    // Aqui você pode adicionar a lógica para processar os dados do formulário, como enviá-los para um servidor ou salvá-los localmente
    
    alert("Cadastro realizado com sucesso!\nNome: " + nome + "\nEmail: " + email);
  });
  document.getElementById("toggleMenu").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
      document.getElementById("toggleMenu").textContent = "Fechar Menu";
      setTimeout(function() {
        menu.style.display = "none";
        document.getElementById("toggleMenu").textContent = "Abrir Menu";
      }, 6000); // Fecha o menu após 6 segundos (6000 milissegundos)
    } else {
      menu.style.display = "none";
      document.getElementById("toggleMenu").textContent = "Abrir Menu";
    }
  });