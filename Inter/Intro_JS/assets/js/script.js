// Cria a variável que irá guardar a array utilizada na aplicação.
// Esse array irá conter todas as respostas selecionadas.
var respostas = [];

// Função inicial, ela irá chamar o código HTML utilizado para a primeira pergunta.
function inicioTeste() {

    let primeiraPergunta = document.getElementById("principal")

        primeiraPergunta.innerHTML = 
        
        "<p> 1. Você passeia a pé por um caminho. O que você vê a sua volta? </p>" +
        
        "<div class='div-answer'>" +
        
            "<input type='radio' id='1a'>" +
                "<label>" +
                    "a. Uma floresta escura, com enormes árvores, que impedem a passagem dos raios de Sol" +
                "</label><br>" + 
            
            "<input type='radio' id='1b'>" + 
                "<label>" + 
                    "b. Um campo de milho, debaixo de um céu fantástico" + 
                "</label> <br>" + 

            "<input type='radio' id='1c'>" + 
                "<label>" + 
                    "c. Montanhas grandes, cobertas por árvores muito verdes" + 
                "</label>" +
        
        "</div>" +

        "<div>" + 

            "<button type='submit' onclick='respAns01()' class='botao'>" +

                "Próxima Pergunta" +

            "</button>" +
        
        "</div>";

}

// Essa função irá armazenar a primeira resposta na posição "0" da array.
function respAns01() {

    if (document.getElementById("1a").checked) {

        let i=0;
        respostas[i] = "1a";
        pergunta2();

    } else if (document.getElementById("1b").checked) {

        let i=0;
        respostas[i] = "1b";
        pergunta2();

    } else if (document.getElementById("1c").checked) {

        let i=0;
        respostas[i] = "1c";
        pergunta2();

    } else {

        let alerta = document.getElementById("alerta");
        alerta.innerHTML = "Precisa fazer uma escolha"

    }

    console.log(respostas)

}

// Essa função irá chamar o código HTML utilizado para a segunda pergunta
function pergunta2() {

    let segundaPergunta = document.getElementById("principal")

        segundaPergunta.innerHTML = 
        
        "<p> 2. Você quase tropeça em algo, o que seria? </p>" +
        
        "<div class='div-answer'>" +
        
            "<input type='radio' id='2a'>" +
                "<label>" +
                    "a. Um espelho" +
                "</label><br>" + 
            
            "<input type='radio' id='2b'>" + 
                "<label>" + 
                    "b. Um anel" + 
                "</label> <br>" + 

            "<input type='radio' id='2c'>" + 
                "<label>" + 
                    "c. Uma garrafa" + 
                "</label>" +
        
        "</div>" +

        "<div>" + 

            "<button type='submit' onclick='respAns02()' class='botao'>" +

                "Próxima Pergunta" +

            "</button>" +
        
        "</div>";

    let apagaAlerta = document.getElementById("alerta")

        apagaAlerta.innerHTML = " ";

}

// Essa função irá armazenar a segunda resposta na posição "1" da array.
function respAns02() {

    if (document.getElementById("2a").checked) {

        let i=1;
        respostas[i] = "2a";
        pergunta3();

    } else if (document.getElementById("2b").checked) {

        let i=1;
        respostas[i] = "2b";
        pergunta3();

    } else if (document.getElementById("2c").checked) {

        let i=1;
        respostas[i] = "2c";
        pergunta3();

    } else {

        let alerta = document.getElementById("alerta");
        alerta.innerHTML = "Precisa fazer uma escolha"

    } console.log(respostas);

}

// Essa função irá chamar o código HTML utilizado para a terceira pergunta
function pergunta3() {

    let terceiraPergunta = document.getElementById("principal")

        terceiraPergunta.innerHTML = 
        
        "<p> 3. Você pegaria algum deles? </p>" +
        
        "<div class='div-answer'>" +
        
            "<input type='radio' id='3a'>" +
                "<label>" +
                    "a. Sim" +
                "</label><br>" + 
            
            "<input type='radio' id='3b'>" + 
                "<label>" + 
                    "b. Não" + 
                "</label> <br>" + 
     
        "</div>" +

        "<div>" + 

            "<button type='submit' onclick='respAns03()' class='botao'>" +

                "Próxima Pergunta" +

            "</button>" +
        
        "</div>";

    let apagaAlerta = document.getElementById("alerta")

        apagaAlerta.innerHTML = " ";

}

// Essa função irá armazenar a terceira resposta na posição "2" da array.
function respAns03() {

    if (document.getElementById("3a").checked) {

        let i=2;
        respostas[i] = "3a";
        pergunta4();

    } else if (document.getElementById("3b").checked) {

        let i=2;
        respostas[i] = "3b";
        pergunta4();

    } else {

        let alerta = document.getElementById("alerta");
        alerta.innerHTML = "Precisa fazer uma escolha"

    } console.log(respostas);

}

// Essa função irá chamar o código HTML utilizado para a quarta pergunta
function pergunta4() {

    let quartaPergunta = document.getElementById("principal")

        quartaPergunta.innerHTML = 
        
        "<p> 4. Seguindo pela mesma trilha, você tem que atravessar um trecho cheio de água. O que seria? </p>" +
        
        "<div class='div-answer'>" +
        
            "<input type='radio' id='4a'>" +
                "<label>" +
                    "a. Um limpo, claro e sereno lago" +
                "</label><br>" + 
            
            "<input type='radio' id='4b'>" + 
                "<label>" + 
                    "b. Uma ruidosa cachoeira" + 
                "</label> <br>" + 

            "<input type='radio' id='4c'>" + 
                "<label>" + 
                    "c. Um borbulhante riacho" + 
                "</label>" +
        
        "</div>" +

        "<div>" + 

            "<button type='submit' onclick='respAns04()' class='botao'>" +

                "Próxima Pergunta" +

            "</button>" +
        
        "</div>";

    let apagaAlerta = document.getElementById("alerta")

        apagaAlerta.innerHTML = " ";

}

// Essa função irá armazenar a quarta resposta na posição "3" da array.
function respAns04() {

    if (document.getElementById("4a").checked) {

        let i=3;
        respostas[i] = "4a";
        pergunta5();

    } else if (document.getElementById("4b").checked) {

        let i=3;
        respostas[i] = "4b";
        pergunta5();

    } else if (document.getElementById("4c").checked) {

        let i=3;
        respostas[i] = "4c";
        pergunta5();

    } else {

        let alerta = document.getElementById("alerta");
        alerta.innerHTML = "Precisa fazer uma escolha"

    } console.log(respostas);

}

// Essa função irá chamar o código HTML utilizado para a quinta pergunta
function pergunta5() {

    let quintaPergunta = document.getElementById("principal")

        quintaPergunta.innerHTML = 
        
        "<p> 5. No meio da travessia, você vê uma chave dentro da água. Qual a aparência dessa chave? </p>" +
        
        "<div class='div-answer'>" +
        
            "<input type='radio' id='5a'>" +
                "<label>" +
                    "a. Comum" +
                "</label><br>" + 
            
            "<input type='radio' id='5b'>" + 
                "<label>" + 
                    "b. Uma bonita chave antiga" + 
                "</label> <br>" + 

            "<input type='radio' id='5c'>" + 
                "<label>" + 
                    "c. Pequenina, como uma chave de cadeado" + 
                "</label>" +
        
        "</div>" +

        "<div>" + 

            "<button type='submit' onclick='respAns05()' class='botao'>" +

                "Próxima Pergunta" +

            "</button>" +
        
        "</div>";

    let apagaAlerta = document.getElementById("alerta")

        apagaAlerta.innerHTML = " ";

}

// Essa função irá armazenar a quinta resposta na posição "4" da array.
function respAns05() {

    if (document.getElementById("5a").checked) {

        let i=4;
        respostas[i] = "5a";
        pergunta6();

    } else if (document.getElementById("5b").checked) {

        let i=4;
        respostas[i] = "5b";
        pergunta6();

    } else if (document.getElementById("5c").checked) {

        let i=4;
        respostas[i] = "5c";
        pergunta6();

    } else {

        let alerta = document.getElementById("alerta");
        alerta.innerHTML = "Precisa fazer uma escolha"

    } console.log(respostas);

}

// Essa função irá chamar o código HTML utilizado para a sexta pergunta
function pergunta6() {

    let sextaPergunta = document.getElementById("principal")

        sextaPergunta.innerHTML = 
        
        "<p> 6. Depois de passar pela água, você continua andando, mais à frente, você vê uma construção. Como é essa construção? </p>" +
        
        "<div class='div-answer'>" +
        
            "<input type='radio' id='6a'>" +
                "<label>" +
                    "a. Uma casa luxuosa" +
                "</label><br>" + 
            
            "<input type='radio' id='6b'>" + 
                "<label>" + 
                    "b. Uma cabana com um gramado bem cortado" + 
                "</label> <br>" + 

            "<input type='radio' id='6c'>" + 
                "<label>" + 
                    "c. Um bonito castelo em ruínas" + 
                "</label>" +
        
        "</div>" +

        "<div>" + 

            "<button type='submit' onclick='respAns06()' class='botao'>" +

                "Próxima Pergunta" +

            "</button>" +
        
        "</div>";

    let apagaAlerta = document.getElementById("alerta")

        apagaAlerta.innerHTML = " ";

}

// Essa função irá armazenar a sexta resposta na posição "5" da array.
function respAns06() {

    if (document.getElementById("6a").checked) {

        let i=5;
        respostas[i] = "6a";
        pergunta7();

    } else if (document.getElementById("6b").checked) {

        let i=5;
        respostas[i] = "6b";
        pergunta7();

    } else if (document.getElementById("6c").checked) {

        let i=5;
        respostas[i] = "6c";
        pergunta7();

    } else {

        let alerta = document.getElementById("alerta");
        alerta.innerHTML = "Precisa fazer uma escolha"

    } console.log(respostas);

}

// Essa função irá chamar o código HTML utilizado para a sétima pergunta
function pergunta7() {

    let setimaPergunta = document.getElementById("principal")

        setimaPergunta.innerHTML = 
        
        "<p> 7. O que você faz? </p>" +
        
        "<div class='div-answer'>" +
        
            "<input type='radio' id='7a'>" +
                "<label>" +
                    "a. Entra" +
                "</label><br>" + 
            
            "<input type='radio' id='7b'>" + 
                "<label>" + 
                    "b. Olha pela janela" + 
                "</label> <br>" + 

            "<input type='radio' id='7c'>" + 
                "<label>" + 
                    "c. Não lhe interessa e vai embora" + 
                "</label>" +
        
        "</div>" +

        "<div>" + 

            "<button type='submit' onclick='respAns07()' class='botao'>" +

                "Próxima Pergunta" +

            "</button>" +
        
        "</div>";

    let apagaAlerta = document.getElementById("alerta")

        apagaAlerta.innerHTML = " ";

}

// Essa função irá armazenar a sétima resposta na posição "6" da array.
function respAns07() {

    if (document.getElementById("7a").checked) {

        let i=6;
        respostas[i] = "7a";
        resposta8();

    } else if (document.getElementById("7b").checked) {

        let i=6;
        respostas[i] = "7b";
        resposta8();

    } else if (document.getElementById("7c").checked) {

        let i=6;
        respostas[i] = "7c";
        resposta8();

    } else {

        let alerta = document.getElementById("alerta");
        alerta.innerHTML = "Precisa fazer uma escolha"

    } console.log(respostas);

}

// Essa função irá chamar o código HTML utilizado para a oitava pergunta
function resposta8() {

    let oitavaPergunta = document.getElementById("principal")

        oitavaPergunta.innerHTML = 
        
        "<p> 8. De repente algo aparece no seu caminho e te assusta. O que é? </p>" +
        
        "<div class='div-answer'>" +
        
            "<input type='radio' id='8a'>" +
                "<label>" +
                    "a. Um urso" +
                "</label><br>" + 
            
            "<input type='radio' id='8b'>" + 
                "<label>" + 
                    "b. Um mago" + 
                "</label> <br>" + 

            "<input type='radio' id='8c'>" + 
                "<label>" + 
                    "c. Um gnomo" + 
                "</label>" +
        
        "</div>" +

        "<div>" + 

            "<button type='submit' onclick='respAns08()' class='botao'>" +

                "Próxima Pergunta" +

            "</button>" +
        
        "</div>";

    let apagaAlerta = document.getElementById("alerta")

        apagaAlerta.innerHTML = " ";

}

// Essa função irá armazenar a oitava resposta na posição "7" da array.
function respAns08() {

    if (document.getElementById("8a").checked) {

        let i=7;
        respostas[i] = "8a";
        pergunta9();

    } else if (document.getElementById("8b").checked) {

        let i=7;
        respostas[i] = "8b";
        pergunta9();

    } else if (document.getElementById("8c").checked) {

        let i=7;
        respostas[i] = "8c";
        pergunta9();

    } else {

        let alerta = document.getElementById("alerta");
        alerta.innerHTML = "Precisa fazer uma escolha"

    } console.log(respostas);

}

// Essa função irá chamar o código HTML utilizado para a nona pergunta
function pergunta9() {

    let nonaPergunta = document.getElementById("principal")

        nonaPergunta.innerHTML = 
        
        "<p> 9. Você continua andando e chega a um muro com uma porta, então você abre. O que você vê do outro lado? </p>" +
        
        "<div class='div-answer'>" +
        
            "<input type='radio' id='9a'>" +
                "<label>" +
                    "a. Um jardim maravilhoso" +
                "</label><br>" + 
            
            "<input type='radio' id='9b'>" + 
                "<label>" + 
                    "b. Um lago no meio do deserto" + 
                "</label> <br>" + 

            "<input type='radio' id='9c'>" + 
                "<label>" + 
                    "c. Uma praia com ruidosas ondas" + 
                "</label>" +
        
        "</div>" +

        "<div>" + 

            "<button type='submit' onclick='respAns09()' class='botao'>" +

                "Resultado" +

            "</button>" +
        
        "</div>";

    let apagaAlerta = document.getElementById("alerta")

        apagaAlerta.innerHTML = " ";

}

// Essa função irá armazenar a nona resposta na posição "8" da array.
function respAns09() {

    if (document.getElementById("9a").checked) {

        let i=8;
        respostas[i] = "9a";
        resultado();

    } else if (document.getElementById("9b").checked) {

        let i=8;
        respostas[i] = "9b";
        resultado();

    } else if (document.getElementById("9c").checked) {

        let i=8;
        respostas[i] = "9c";
        resultado();

    } else {

        let alerta = document.getElementById("alerta");
        alerta.innerHTML = "Precisa fazer uma escolha"

    } console.log(respostas);

}

// Essa função irá gerar o código HTML da página com o resultado do teste
function resultado() {

    var resultadoAns1 = document.getElementById("res-ans1");
    var resultadoAns2 = document.getElementById("res-ans2");
    var resultadoAns3 = document.getElementById("res-ans3");
    var resultadoAns4 = document.getElementById("res-ans4");
    var resultadoAns5 = document.getElementById("res-ans5");
    var resultadoAns6 = document.getElementById("res-ans6");
    var resultadoAns7 = document.getElementById("res-ans7");
    var resultadoAns8 = document.getElementById("res-ans8");
    var resultadoAns9 = document.getElementById("res-ans9");
    var resp1, resp2, resp3, resp4, resp5, resp6, resp7, resp8, resp9;
    var reInicio = document.getElementById("reinicio");

    let apagaPagina = document.getElementById("principal")

    apagaPagina.innerHTML = " ";

    // Este case gera a página HTML com o resultado para a primeira pertunta
    switch (resp1 = respostas[0]){

        case "1a":
            resultadoAns1.innerHTML =
                "<img src='./imagens/floresta.jpg' alt='floresta escura'>" +

                "<p> 1. Como eu vejo a vida... </p><br>" +

                "<p>" + 

                    "A floresta indica que você vai até ao fim nas coisas que quer, sabe identificar os seus objetivos e " +
                    "conciliar as suas metas, porém é quieto, calmo e cauteloso.<br>" + 
                    "Todos os que o conhecem, o acham interessante e não se cansam de elogiar o seu ar misterioso, já que, " +
                    "por nada neste mundo, mostra de imediato seu verdadeiro eu. Sabe ser um bom ouvinte." +

                "</p><br><br><br><br><br>";

            break

        case "1b":
            resultadoAns1.innerHTML =
                "<img src='./imagens/campo_milho.jpg' alt='campo de milho'>" +

                "<p> 1. Como eu vejo a vida... </p><br>" +

                "<p>" +

                    "O campo de milho indica que você é brilhante, sociável, amável e brincalhão. <br>" +
                    "Faz amigos com facilidade e raramente se sente sozinho. Aonde quer que vá, é sempre o centro das atenções e, " +
                    "por isso, sente-se feliz e diverte-se com uma certa facilidade." +

                "</p><br><br><br><br><br>";

            break

        case "1c":
            resultadoAns1.innerHTML =
                "<img src='./imagens/montanhas.jpg' alt='montanhas'>" +

                "<p> 1. Como eu vejo a vida... </p><br>" +

                "<p>" +

                    "Caso tenha escolhido as montanhas, é sinal de que você é sobretudo prático, tem senso de justiça, " +
                    "os pés no chão e conquista as pessoas pela sua honestidade.<br>" + 
                    "Uma prova disso é a sua atitude quando alguém pede ajuda para resolver um problema. " +
                    "Antes de tomar qualquer partido, ouve as partes envolvidas." +

                "</p><br><br><br><br><br>";

    }

    // Este case gera a página HTML com o resultado para a segunda pertunta
    switch (resp2 = respostas[1]) {

        case "2a":
            resultadoAns2.innerHTML =
                "<img src='./imagens/espelho.jpg' alt='espelho'>" +

                "<p> 2. A pessoa dos meus sonhos... </p><br>" + 

                "<p>" +

                    "A escolha do espelho mostra que você não acredita que 'polos opostos se atraem', isto em relação ao amor, " +
                    "e que, só vai sossegar quando encontrar a sua alma gémea, ou seja, uma pessoa que tenha os mesmos ideais " +
                    "que você.<br>" +
                    "Nada mais justo. Só que é bom olhar um pouco mais à volta, porque de repente a pessoa perfeita pode ser "
                    "alguém para quem normalmente você não olharia duas vezes."

                "</p><br><br><br><br><br>";

            break

        case "2b":
            resultadoAns2.innerHTML =
                "<img src='./imagens/anel.jpg' alt='anel'>" +

                "<p> 2. A pessoa dos meus sonhos... </p><br>" + 

                "<p>" +

                    "A escolha do anel significa que você coloca os sentimentos acima de qualquer outra coisa na vida, "+
                    "até do seu amor-próprio. Romântico, acredita em amor eterno, e acredita que amor rima com dor. "+
                    "Mesmo quando está a sofrer e é rejeitado, continua a acreditar que a pessoa um dia vai descobrir que o ama." +
                    "No seu projeto de vida, embora não admita, quer que uam pessoa que cuide de si e supra todas as suas " +
                    "carências." +

                "</p><br><br><br><br><br>";

            break

        case "2c":
            resultadoAns2.innerHTML =
                "<img src='./imagens/garrafa.jpg' alt='garrafa'>" +

                "<p> 2. A pessoa dos meus sonhos... </p><br>" + 

                "<p>" +

                    "Se você escolheu a garrafa é por que é ambicioso, inteligente, prático e quer uma pessoa que o ajude " +
                    "e batalhe ao seu lado, mais do que amor ou paixão, você procura companheirismo e uma pessoa esperta, " +
                    "bem disposta e colaboradora.<br>" +
                    "Prefere manter distância." +

                "</p><br><br><br><br><br>";

    }

    // Este case gera a página HTML com o resultado para a terceira pertunta
    switch (resp3 = respostas[2]) {

        case "3a":
            resultadoAns3.innerHTML =
                "<img src='./imagens/interrogacao.jpg' alt='interrogação'>" +

                "<p> 3. Será que quer um compromisso sério?... </p><br>" + 

                "<p>" +

                    "Sim, você não vê a hora de encontrar a pessoa certa, " +
                    "ou estando com alguém não tem problemas em se envolver mais." +

                "</p><br><br><br><br><br>";

            break

        case "3b":
            resultadoAns3.innerHTML =
                "<img src='./imagens/interrogacao.jpg' alt='interrogação'>" +

                "<p> 3. Será que quer um compromisso sério?... </p><br>" + 

                "<p>" +

                    "Não, você tem outras prioridades, pelo menos por enquanto." +

                "</p><br><br><br><br><br>";

    }

    // Este case gera a página HTML com o resultado para a quarta pertunta
    switch (resp4 = respostas[3]) {

        case "4a":
            resultadoAns4.innerHTML =
                "<img src='./imagens/lago.jpg' alt='lago'>" +

                "<p> 4. Os limites da paixão... </p><br>" + 

                "<p>" +

                    "O lago reflete o seu desejo de querer ver-se livre de relacionamentos superficiais.<br>" +
                    "Porém, só quando encontrar alguém muito especial, é que vai mergulhar de cabeça." +

                "</p><br><br><br><br><br>";

            break

        case "4b":
            resultadoAns4.innerHTML =
                "<img src='./imagens/cachoeira.jpg' alt='cachoeira'>" +

                "<p> 4. Os limites da paixão... </p><br>" + 

                "<p>" +

                    "A cascata revela que você gosta de conquistar, esbanjar o seu charme e saber que as pessoas se " +
                    "apaixonam facilmente por você, mesmo que para você, perca logo a graça.<br>" +
                    "Mas aparece sempre alguém novo, aliás, isso é muito natural."

                "</p><br><br><br><br><br>";

            break

        case "4c":
            resultadoAns4.innerHTML =
                "<img src='./imagens/riacho.jpg' alt='riacho'>" +

                "<p> 4. Os limites da paixão... </p><br>" + 

                "<p>" +

                    "O que um riacho é capaz de fazer? Você vive apaixonado, e sempre por alguém diferente.<br>" +
                    "Você é movido por paixões e emoções intensas, é muito passional. " +
                    "Está sempre com uma pessoa diferente e sempre acredita que encontrou o amor da sua vida." +

                    "</p><br><br><br><br><br>";

    }

    // Este case gera a página HTML com o resultado para a quinta pertunta
    switch (resp5 = respostas[4]) {

        case "5a":
            resultadoAns5.innerHTML =
                "<img src='./imagens/chave_normal.jpg' alt='chave comum'>" +

                "<p> 5. Acerca do futuro... </p><br>" + 

                "<p>" +

                    "Se você viu a chave comum, é porque tem uma vontade secreta de abrir novos horizontes na sua vida, " +
                    "só não sabe que rumo seguir." +

                "</p><br><br><br><br><br>";

            break

        case "5b":
            resultadoAns5.innerHTML =
                "<img src='./imagens/chave_antiga.jpg' alt='chave antiga'>" +

                "<p> 5. Acerca do futuro... </p><br>" + 

                "<p>" +

                    "Se você viu a chave antiga, é porque você tem garra e uma vontade ilimitada de aprender " +
                    "tudo o que puder e que vai atrás e luta pelos seus objetivos." +

                "</p><br><br><br><br><br>";

            break

        case "5c":
            resultadoAns5.innerHTML =
                "<img src='./imagens/chave_cadeado.jpg' alt='chave pequena'>" +

                "<p> 5. Acerca do futuro... </p><br>" + 

                "<p>" +

                    "Ver a chave de um cadeado significa que você acredita que a sua intuição irá ajudá-lo a " +
                    "encontrar um caminho, fora do comum, que lhe abrirá as portas do sucesso." +

                "</p><br><br><br><br><br>";

    }

    // Este case gera a página HTML com o resultado para a sexta pertunta
    switch (resp6 = respostas[5]) {

        case "6a":
            resultadoAns6.innerHTML =
                "<img src='./imagens/casa_luxuosa.jpg' alt='casa luxuosa'>" +

                "<p> 6. Quem é que não tem ambição?... </p><br>" + 

                "<p>" +

                    "Escolher a casa, quer dizer que você tem vários objetivos na vida, e é muito otimistas.<br>" +
                    "Além disso, se esforça para ser o melhor em tudo que faz e sente-se atraído por atividades que dão " +
                    "oportunidade de expressar a sua criatividade." +

                "</p><br><br><br><br><br>";

            break

        case "6b":
            resultadoAns6.innerHTML =
                "<img src='./imagens/cabana.jpg' alt='cabana'>" +

                "<p> 6. Quem é que não tem ambição?... </p><br>" + 

                "<p>" +

                    "A cabana é a visão de uma pessoa realista sobre o seu próprio futuro e que tem os pés firmemente assentados " +
                    "no chão. E provavelmente vencerá em qualquer atividade usando o esforço próprio." +

                "</p><br><br><br><br><br>";

            break

        case "6c":
            resultadoAns6.innerHTML =
                "<img src='./imagens/castelo.jpg' alt='castelo'>" +

                "<p> 6. Quem é que não tem ambição?... </p><br>" + 

                "<p>" +

                    "Caso tenha achado o castelo mais simpático, é porque ainda não conseguiu decifrar muito bem o que " +
                    "deseja para o amanhã. Enquanto isso, para não se desiludir, caso alguma coisa corra mal, " +
                    "prefere sonhar com o que vai fazer com o dinheiro todo que irá ganhar, quando ficar milionário." +

                "</p><br><br><br><br><br>";

    }

    // Este case gera a página HTML com o resultado para a sétima pertunta
    switch (resp7 = respostas[6]) {

        case "7a":
            resultadoAns7.innerHTML =
                "<img src='./imagens/entra.jpg' alt='entra na casa'>" +

                "<p> 7. Quando é que o sucesso chega?... </p><br>" + 

                "<p>" +

                    "Entrar na casa é ter confiança em tudo o que faz, sabendo que existe sempre a possibilidade de " +
                    "errar ou acertar. Sendo assim, nada consegue atrapalhar o seu caminho." +

                "</p><br><br><br><br><br>";

            break

        case "7b":
            resultadoAns7.innerHTML =
                "<img src='./imagens/janela.jpg' alt='janela'>" +

                "<p> 7. Quando é que o sucesso chega?... </p><br>" + 

                "<p>" +

                    "Você olhou pela janela, é porque tem medo de falhar e por isso, desiste de tudo, sem pelo menos tentar." +
                    
                "</p><br><br><br><br><br>";

            break

        case "7c":
            resultadoAns7.innerHTML =
                "<img src='./imagens/vai_embora.jpg' alt='vai embora'>" +

                "<p> 7. Quando é que o sucesso chega?... </p><br>" + 

                "<p>" +

                    "Não se interessou, é porque se contenta com coisas simples e prefere não correr atrás do sucesso." +

                "</p><br><br><br><br><br>";

    }

    // Este case gera a página HTML com o resultado para a oitava pertunta
    switch (resp8 = respostas[7]) {

        case "8a":
            resultadoAns8.innerHTML =
                "<img src='./imagens/urso.jpg' alt='urso'>" +

                "<p> 8. Medo de... </p><br>" + 

                "<p>" +

                    "Para você, que escolheu o urso, depender de alguém é a pior coisa que pode acontecer-lhe na vida. " +
                    "Na sua opinião, uma pessoa alcança a felicidade a partir do momento em que estiver pronta para andar com " +
                    "os próprios pés."

                "</p><br><br><br><br><br>";

            break

        case "8b":
            resultadoAns8.innerHTML =
                "<img src='./imagens/mago.jpg' alt='mago'>" +

                "<p> 8. Medo de... </p><br>" + 

                "<p>" +

                    "Ao escolher o mago, você demonstra o receio que tem das situações que estão fora do seu controlo. " +
                    "No entanto, para aliviar tamanha tensão, você procura a ajuda de um poderoso guia ou mestre e " +
                    "explicações sobrenaturais para os seus problemas pessoais." +

                "</p><br><br><br><br><br>";

            break

        case "8c":
            resultadoAns8.innerHTML =
                "<img src='./imagens/gnomo.jpg' alt='gnomo'>" +

                "<p> 8. Medo de... </p><br>" + 

                "<p>" +

                    "O gnomo é o retrato de uma pessoa preocupada com que os outros vão pensar dela, como os outros vão " +
                    "reagir se disser ou fizer coisas que elas não gostam ou não aprovam. Afinal por quê tanto medo de não " +
                    "ser aceite?" +

                "</p><br><br><br><br><br>";

    }

    // Este case gera a página HTML com o resultado para a nona pertunta
    switch (resp9 = respostas[8]) {

        case "9a":
            resultadoAns9.innerHTML =
                "<img src='./imagens/jardim.jpg' alt='jardim'>" +

                "<p> 9. O EU mais profundo... </p><br>" + 

                "<p>" +

                    "Ao escolher o jardim, você provou que é maduro, honesto, sensível e dono de uma inteligência privilegiada. " +
                    "Não é à toa que todos confiam em você de olhos fechados."

                "</p><br><br><br><br><br>";

            break

        case "9b":
            resultadoAns9.innerHTML =
                "<img src='./imagens/lago-deserto.jpg' alt='lago no deserto'>" +

                "<p> 9. O EU mais profundo... </p><br>" + 

                "<p>" +

                    "Ao escolher o lago no deserto, ela apenas reforça a sua necessidade de ter o seu próprio espaço, " +
                    "até para se isolar quando sente que as coisas não andam exatamente como tinha planeado.<br>" +
                    "Chegará um dia em que você descobrirá que compartilhar os sentimentos com alguém da sua confiança " +
                    "poderá ajudá-lo a ficar melhor." +

                "</p><br><br><br><br><br>";

            break

        case "9c":
            resultadoAns9.innerHTML =
                "<img src='./imagens/praia.jpg' alt='praia'>" +

                "<p> 9. O EU mais profundo... </p><br>" + 

                "<p>" +

                    "A praia é a escolha de quem é apaixonado pela vida, nada convencional, com opiniões próprias, " +
                    "e sem o menor medo de às defender ou mudá-las, se for preciso." +

                "</p><br><br><br><br><br>";

    }

    reInicio.innerHTML = 
    
        "<button type='submit' onclick='inicio()' class='botao'>" +

            "Reiniciar Teste" +

        "</button>"

}

// Está função volta ao início
function inicio() {

    window.location.href = "./index.html"

}
