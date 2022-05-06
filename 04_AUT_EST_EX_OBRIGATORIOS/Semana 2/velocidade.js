var gravidade  = 10

function calculate() {
    velocidade = document.getElementById("Velocidade").value;
    var tempo = velocidade / gravidade
    var alturamax = (velocidade * velocidade) / 2 * gravidade
    alert("O tempo será " + tempo+ " segundos");
    alert("A altura máxima é "+alturamax+ " metros");
}