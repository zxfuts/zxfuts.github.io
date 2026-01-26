// Lista de ideias
const ideias = [
  {
    titulo: "Paris FC: A Ascensão à Ligue 1",
    descricao: "Comece sua carreira no Paris FC, um clube modesto da França. Objetivo: conquistar a Ligue 1. \n\nRegras: mantenha no mínimo 4 jogadores da base no time titular até alcançar o título."
  },
  {
    titulo: "Sheffield Wednesday: Rumo à Premier League",
    descricao: "Inicie no Sheffield Wednesday. Objetivo: subir para a Premier League e se consolidar como time do top 6. \n\nRegras: contrate no máximo 3 jogadores por temporada e use pelo menos 2 jogadores da base no time titular."
  },
  {
    titulo: "Palermo: Reconstrução Italiana",
    descricao: "Escolha o Palermo, time da Serie B italiana, e leve-o à Champions League. \n\nRegras: venda qualquer jogador com mais de 30 anos e use pelo menos 3 jovens da base no time titular."
  },
  {
    titulo: "Fortuna Düsseldorf: Time do Povo",
    descricao: "Comece no Fortuna Düsseldorf e leve o clube de volta à Bundesliga. \n\nRegras: Contrate apenas jogadores do país do clube."
  },
  {
    titulo: "Hearts: Dominando a Escócia",
    descricao: "Inicie no Hearts of Midlothian na Premiership escocesa. Objetivo: ganhar a liga e um título europeu grande como Europa League ou Champions League. \n\nRegras: Não passar de no máximo 8 temporadas."
  },
  {
    titulo: "Real Zaragoza: Orgulho Espanhol",
    descricao: "Comece no Zaragoza, da Segunda Divisão Espanhola, e leve-o ao título da La Liga. \n\nRegras: pelo menos 3 jogadores da base no time titular e não utilize olheiros."
  },
  {
    titulo: "FC Nantes: Retorno à Glória",
    descricao: "Inicie no Nantes, na Ligue 1, e transforme-o em campeão europeu. \n\nRegras: não contrate jogadores estrangeiros no primeiro ano e use pelo menos 3 jogadores da base por temporada."
  },
  {
    titulo: "St. Pauli: Paixão Popular",
    descricao: "Comece no St. Pauli, e leve ao título da Bundesliga. \n\nRegras: só contrate jogadores que seja overall mais baixo que o seu melhor jogador."
  },
  {
    titulo: "Cambridge United: História Free",
    descricao: "Escolha o Cambridge United da Football League Two, e leve-o ao título da Champions League. \n\nRegras: Só vale contratar jogadores que estão livres no mercado."
  },
  {
    titulo: "Sampdoria: Reconstrução Genovesa",
    descricao: "Inicie na Sampdoria, e leve a tríplice coroa (CHAMPIONS/SERIE A/COPA ITÁLIA). \n\nRegras: Só vale contratar jogadores italianos."
  },
  {
    titulo: "Girondins de Bordeaux: Da Crise ao Título",
    descricao: "Comece no Bordeaux em crise financeira e leve o clube ao título da Ligue 1. \n\nRegras: contrate apenas jogadores livres e mantenha pelo menos 5 jogadores da base no time titular."
  },
  {
    titulo: "RC Lens: Conquistando a França",
    descricao: "Inicie no Lens, clube histórico da Ligue 1, e transforme-o em campeão europeu. \n\nRegras: use 3 jogadores franceses sempre nos 11 titulares."
  },
  {
    titulo: "Academy is future",
    descricao: "Comece em um clube europeu de 2 estrelas e conquiste a Champions League. \n\nRegras: não contrate jogadores, só use jogadores da base."
  },
  {
    titulo: "Bordeaux: Revolução da Base",
    descricao: "Comece no Bordeaux e foque em usar talentos da base para conquistar a Ligue 1. \n\nRegras: pelo menos 5 jogadores da base no time titular, sem contratar jogadores acima de 80 de overall."
  },
  {
    titulo: "Ajude um Clube Pequeno a Crescer",
    descricao: "Escolha um time pequeno da liga alemã ou espanhola e leve-o ao título nacional. \n\nRegras: só vale contratar jogadores até 25 anos."
  },
  {
    titulo: "Heerenveen: Surpresa Holandesa",
    descricao: "Comece no Heerenveen, da Eredivisie, e leve-o a um título nacional. \n\nRegras: contrate apenas 1 estrangeiro por temporada."
  },
  {
    titulo: "Real Betis: Desafio Andaluz",
    descricao: "Comece no Betis e leve-o ao título da Champions League. \n\nRegras: só contrate jogadores flopados em outros clubes."
  },
  {
    titulo: "Saint-Étienne: O Gigante Adormecido",
    descricao: "Escolha o Saint-Étienne, clube histórico da Ligue 1, e leve-o novamente ao título nacional. \n\nRegras: não vale usar jogadores da base no time, e não contrate jogadores com overall acima de 82."
  }
];


// Função para gerar ideia aleatória
function gerarIdeia() {
  const random = Math.floor(Math.random() * ideias.length);
  const titulo = ideias[random].titulo;
  const descricao = ideias[random].descricao;

  const card = document.querySelector('.card');
  card.style.opacity = 0;
  
  setTimeout(() => {
    document.getElementById("titulo").innerText = titulo;
    document.getElementById("descricao").innerText = descricao;
    card.style.opacity = 1;
  }, 200);
}


// Botão copiar
const copiarBtn = document.getElementById("copiarBtn");
copiarBtn.addEventListener("click", () => {
  const titulo = document.getElementById("titulo").innerText;
  const descricao = document.getElementById("descricao").innerText;
  const texto = `${titulo}\n${descricao}`;

  navigator.clipboard.writeText(texto).then(() => {
    alert("Ideia copiada!");
  });
});
