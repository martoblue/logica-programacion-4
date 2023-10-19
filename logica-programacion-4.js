function fibonacci() {
  let number = document.getElementById("inputNum").value;
  number = parseInt(number);
  let n1 = 0, n2 = 1, nextTerm = 0, resultado = '';
  for (let i = 1; i <= number; i++) {
    i < number ? resultado += n1 + ', ' : resultado += n1 + '.'
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return document.getElementById("resultado").innerHTML = resultado;
}
