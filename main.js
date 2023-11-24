function validateForm() {
    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;

    if (campoB > campoA) {
      document.getElementById("message").innerHTML = "Formulário válido!";
      return true;

    } else {
      document.getElementById("message").innerHTML = "Formulário inválido! B precisa ser maior que A.";
      return false;
    }

    
  }

