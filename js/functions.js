var engine = {
    "cores": ['green','purple','pink','red','yellow','orange','grey','black'],
    "hexadecimais": {
      'green':'#02EF00',
      'purple':'#790093',
      'pink': '#F02A7E',
      'red':'#E90808',
      'yellow':'#E7D703',
      'orange':'#F16529',
      'grey':'#EBEBEB',
      'black':'#141414',
    },
    "moedas": 0
}

function sortearCor() {
  var indexCorSorteada = Math.floor(Math.random() * engine.cores.length);
  var legendaCorDaCaixa = document.getElementById('cor-na-caixa');
  var nomeCorSorteada = engine.cores[indexCorSorteada];

  legendaCorDaCaixa.innerText = nomeCorSorteada.toUpperCase();

  return engine.hexadecimais[nomeCorSorteada];
}