const empresas = [
  document.getElementById('org1'),
  document.getElementById('org2'),
  document.getElementById('org3'),
  document.getElementById('org4'),
  document.getElementById('org5'),
  document.getElementById('org6'),
  document.getElementById('org7'),
  document.getElementById('org8'),
  document.getElementById('org9'),
  document.getElementById('org10'),
  document.getElementById('org11'),


];

var click = 0

var valor_venda = 0;

let quantidade = 0;

function agrupar(event) {
  const empresaClicada = event.currentTarget;

  if (empresaClicada.classList.contains('clicada')) {
    quantidade--;
    desmarcar(empresaClicada.id);
  } else {
    quantidade++;
    marcar(empresaClicada.id);
  }

  empresaClicada.classList.toggle('clicada');
}

/**adcionando o evento a todas as empresas */
document.getElementById('org1').addEventListener('click', agrupar, false)
document.getElementById('org2').addEventListener('click', agrupar, false)
document.getElementById('org3').addEventListener('click', agrupar, false)
document.getElementById('org4').addEventListener('click', agrupar, false)
document.getElementById('org5').addEventListener('click', agrupar, false)
document.getElementById('org6').addEventListener('click', agrupar, false)
document.getElementById('org7').addEventListener('click', agrupar, false)
document.getElementById('org8').addEventListener('click', agrupar, false)
document.getElementById('org9').addEventListener('click', agrupar, false)
document.getElementById('org10').addEventListener('click', agrupar, false)
document.getElementById('org11').addEventListener('click', agrupar, false)



/**modificar o estilo da empresa selecionada */
function marcar(id) {
  document.getElementById(id).style.boxShadow = '0px 0px 50px rgba(64, 184, 17, 1)';

  if (id === 'org1') {
    valor_venda += 40000.00
  } else if (id === 'org2') {
    valor_venda += 450000.00
  } else if (id === 'org3') {
    valor_venda += 34000.00
  } else if (id === 'org4') {
    valor_venda += 70000.00
  } else if (id === 'org5') {
    valor_venda += 100000.00
  } else if (id === 'org6') {
    valor_venda += 20000.00
  } else if (id === 'org7') {
    valor_venda += 10000.00
  } else if (id === 'org8') {
    valor_venda += 12500.00
  } else if (id === 'org9') {
    valor_venda += 5000.00
  } else if (id === 'org10') {
    valor_venda = 10000.00
  } else if (id === 'org11') {
    valor_venda += 16000.00
  }


}




/**Desmarcar a empresa */
function desmarcar(id) {
  document.getElementById(id).style.boxShadow = 'none';
  if (id === 'org1') {
    valor_venda -= 40000.00
  } else if (id === 'org2') {
    valor_venda -= 450000.00
  } else if (id === 'org3') {
    valor_venda -= 34000.00
  } else if (id === 'org4') {
    valor_venda -= 70000.00
  } else if (id === 'org5') {
    valor_venda -= 100000.00
  } else if (id === 'org6') {
    valor_venda -= 20000.00
  } else if (id === 'org7') {
    valor_venda -= 10000.00
  } else if (id === 'org8') {
    valor_venda -= 12500.00
  } else if (id === 'org9') {
    valor_venda -= 5000.00
  } else if (id === 'org10') {
    valor_venda -= 10000.00
  } else if (id === 'org11') {
    valor_venda -= 16000.00
  }

}



/**Função para abrir a popup */
function open() {
  var janela = document.getElementById('janela').style
  janela.display = 'block'
}

/**Função para fechar a janela */
function close() {
  var janela = document.getElementById('janela').style
  janela.display = 'none'
}


//abertura da popup
var botão = document.getElementById('btn-click')
botão.addEventListener('click', open, true)

//fechamento da popup
var btn_close = document.getElementById('close')
btn_close.addEventListener('click', close, true)

//procedimento de calculo roi
const btn_plane1 = document.getElementById('plane1')
const btn_plane2 = document.getElementById('plane2')
const btn_plane3 = document.getElementById('plane3')

//indicadores
const roi = document.getElementById('ROI')
const payback = document.getElementById('PAYBACK')
const tir = document.getElementById('TIR')

//tabela do faturamento
const fat_mes = document.getElementById('fatMensal')
const fat_ano = document.getElementById('fatAnual')





/**Calculo de roi  */
function return_Roi(tempo, valor, investimento) {
  let receita = tempo * valor;
  let calc = (receita - investimento) / investimento;
  let calc2 = calc * 100;
  roi.innerText = calc2.toFixed(2)
}





/**calculo Pay back */
function return_Payback(investimento, receita) {
  let valor = investimento / receita
  payback.innerText = valor.toFixed(2)
}


/*zera os valores de roi and payback*/
function zerar() {
  roi.innerText = 0.00
  payback.innerText = 0.00
  tir.innerText = 0.00
}


/**calculo do perfil conservador */
function calculate_economy() {
  zerar()
  let investimento = 3000000.00
  let receita = valor_venda
  receita = receita * quantidade
  let faturamentoMes = 'R$' + receita.toFixed(2).replace('.', ',');
  let faturamentoAno = 'R$' + (receita * 12).toFixed(2).replace('.', ',');

  faturamentoMes = faturamentoMes.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  faturamentoAno = faturamentoAno.replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  fat_mes.innerText = faturamentoMes
  fat_ano.innerText = faturamentoAno
  let tempo = document.getElementById('tmp').value
  const cashFlows = [investimento * -1, receita, receita, receita, receita]
  return_Roi(tempo, receita, investimento)
  return_Payback(investimento, receita)

}



btn_plane1.addEventListener('click', calculate_economy, true)


/*Rotina de alteração de texto no chart */
const paragrafo1 =  document.getElementById('top').style
const paragrafo2 =  document.getElementById('top2').style
const paragrafo3 =  document.getElementById('mei').style
const paragrafo4 =  document.getElementById('bas').style



document.getElementById('one').addEventListener('click',()=>{
  paragrafo4.color='black'
})


document.getElementById('two').addEventListener('click',()=>{
  paragrafo3.color='black'
})


document.getElementById('tree').addEventListener('click',()=>{
  paragrafo2.color='black'
})


document.getElementById('four').addEventListener('click',()=>{
  paragrafo1.color='black'
})
