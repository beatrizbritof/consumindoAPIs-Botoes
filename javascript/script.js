const racas =
  '{"raca1": "Dobermann", "descricao1": "Por trás da “cara de mau”, jeito imponente e corpo forte e musculoso do doberman, existe uma personalidade bastante afetuosa, leal, companheira e muito protetora. Ele é um grande amigo para toda a família e um ótimo cão de guarda. Também chamado de dobie e doberman pinscher, essa raça é conhecida por sua incrível inteligência e obediência. Não é à toa que esse cachorro é perfeito para atuar em resgates e como policial.", "raca2": "Corgie", "descricao2": "Amorosos, companheiros, obedientes e inteligentes: essas são quatro palavras que poderiam definir bem o temperamento do welsh corgi. Esse é o tipo de cachorro que adora se envolver nas atividades da família e que costuma seguir o tutor pela casa, para onde quer que ele vá. <br>Cachorros deste porte, podem ser treinados para atividades específicas como o pastoreio, motivo pelo qual esses foram desenvolvidos durante séculos.", "raca3": "Pug", "descricao3": "Sendo creditada como uma das raças mais antigas do mundo, o pug tem um tamanho pequeno e seu temperamento dócil o torna versátil e adaptável à rotina dos tutores. No entanto, por ser uma raça braquicefálica, o Pug é um pouco mais sensível do que os outros cãezinhos e, por isso, pede uma atenção especial de sua família humana.", "raca4": "Pastor Alemão", "descricao4": "Como todo canino, o comportamento deste cachorro vai depender muito da forma que for criado pela sua família. Apesar de ser fiel e carinhoso, o Pastor Alemão é uma raça grande e muito defensora, por isso é importante iniciar o adestramento desde cedo para que o cão desenvolva um temperamento equilibrado. Mantê-los sempre ativos com brincadeiras e atividades físicas é imprescindível para que eles não fiquem entediados e não se tornem destruidores.", "raca5": "Golden Retriver", "descricao5": "Essa raça é extremamente amável, muito companheira dos tutores e fica ainda mais alegre na presença de crianças. Se bem treinada, pode ser uma excelente companhia para gatos e outros animais. Certamente uma das principais características do Golden, que o torna um dos cães mais populares, é a sua alta sociabilidade e anseio por afeto. Pode-se dizer que foram feitos para a família e, por isso, precisam ficar junto a seu “bando humano”, dentro de casa, e pouco tempo sozinhos no quintal.", "raca6": "Beagle", "descricao6": "Uma coisa que define o Beagle: personalidade carismática e divertida, além de super aventureira. Não é à toa que para reconhecer a raça Beagle é muito simples: basta procurar pelo cão mais animado do local. Sempre muito ativo e bem-humorado, o Beagle adulto ou filhote ama ter companhia e faz de tudo para estar ao lado dos seus humanos sempre que possível. O único ponto negativo é que, se for deixado de lado por muito tempo, o cachorro Beagle pode latir bastante e ficar irritadísso"}';
const converteParaJson = JSON.parse(racas);

function botao1() {
  document.getElementById("raca").innerHTML = converteParaJson.raca1;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao1;
}
function botao2() {
  document.getElementById("raca").innerHTML = converteParaJson.raca2;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao2;
}
function botao3() {
  document.getElementById("raca").innerHTML = converteParaJson.raca3;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao3;
}
function botao4() {
  document.getElementById("raca").innerHTML = converteParaJson.raca4;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao4;
}
function botao5() {
    document.getElementById("raca").innerHTML = converteParaJson.raca5;
    document.getElementById("descricao").innerHTML = converteParaJson.descricao5;
}

function botao6() {
  document.getElementById("raca").innerHTML = converteParaJson.raca6;
  document.getElementById("descricao").innerHTML = converteParaJson.descricao6;
}