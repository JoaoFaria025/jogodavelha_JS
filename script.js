    const p1 = "x";
    const p2 = "o";
    var turn = p1;
    var winner = false;
    
    turnPlayer(); //verfica de quem é a vez
    play(); //add
    
    function turnPlayer(){
        if (winner){
            return;
        }
        if (turn == p1){//verificar de quem é a vez e att a img
            var player = document.querySelectorAll("main img")[0];
            player.setAttribute("src","img/x.png");
        }
        else{
            var player = document.querySelectorAll("main img")[0];
            player.setAttribute("src","img/o.png");
        }
    }
    
    function play(){
        var espacos = document.getElementsByClassName('joga');
        for(var i=0;i<espacos.length;i++){
            espacos[i].addEventListener("click", function(){//monitora o click e se não estiver acabado a partida add a imagem na class Joga
                if(winner){
                    return;
                }
                if(this.getElementsByTagName("img").length==0)
                {
                    if(turn == p1){
                        this.innerHTML = "<img src='img/x.png' width='80' height='80'>";
                        this.setAttribute("joga",p1);
                        turn = p2;   
                    }else{
                        this.innerHTML = "<img src='img/o.png' width='80' height='80'>";
                        this.setAttribute("joga",p2);
                        turn = p1;   
                    }
                    turnPlayer();validaWinner();
                }
                
            })
        }
    }
    
    
    async function validaWinner(){ //verificar se n houve vitoria
    let winner_pos = document.querySelectorAll(".joga");
    var p11 = document.getElementById("p11").getAttribute("joga");//var recebe o elemento do atributo de id p11
    var p12 = document.getElementById("p12").getAttribute("joga");
    var p13 = document.getElementById("p13").getAttribute("joga");
    
    var p21 = document.getElementById("p21").getAttribute("joga");
    var p22 = document.getElementById("p22").getAttribute("joga");
    var p23 = document.getElementById("p23").getAttribute("joga");
    
    var p31 = document.getElementById("p31").getAttribute("joga");
    var p32 = document.getElementById("p32").getAttribute("joga");
    var p33 = document.getElementById("p33").getAttribute("joga");
    
    var venc = "";
    
    if(((p11 == p22 && p11 == p33 && p11 != ""))){//a partir da posição atual verifica as possíveis possibilidades de vitória
        venc = p11;
        for(var i=0;i<=8;i++){
            if((i==0) || (i==4) || (i==8)){
            winner_pos[i].style.border = "4px solid green";    
            }
        }
    }else if(p11 == p21 && p11 == p31 && p11 != ""){
        venc = p11;
        for(var i=0;i<=8;i++){
            if((i==0) || (i==3) || (i==6)){
            winner_pos[i].style.border = "4px solid green";    
            }
        }
    }
    else if(p11 == p12 && p11 == p13 &&  p11 != ""){
        venc = p11;
        for(var i=0;i<=2;i++){
            winner_pos[i].style.border = "4px solid green";
        }
    }else if(((p21 == p22 && p21 == p23 && p21 != ""))){
        venc = p21;
        for(var i=3;i<=5;i++){
            winner_pos[i].style.border = "4px solid green";
        }
    }else if(p22 == p12 && p22 == p32 && p22 != ""){
        venc = p22;
        for(var i=0;i<=8;i++){
            if((i==1) || (i==4) || (i==7)){
                winner_pos[i].style.border = "4px solid green";
            }
        }
    }else if(p22 == p13 && p22 == p31 && p22 != ""){
        venc = p22;
        for(var i=0;i<=8;i++){
            if((i==2) || (i==4) || (i==6)){
            winner_pos[i].style.border = "4px solid green";
            }
        }
    }
    else if(((p31==p32 && p31 == p33 && p31 != ""))){
        venc = p31;
        for(var i=6;i<=8;i++){
            winner_pos[i].style.border = "4px solid green";
        }
    }else if((p13 == p23 && p13 == p33 & p13 != "")){
        venc = p13;
        for(var i=2;i<=8;i++){
            if((i==2) || (i==5) || (i==8)){
                winner_pos[i].style.border = "4px solid green";
            }
        }
    }
    else if(p11 != "" && p22 != "" && p33 != "" &&  p21 != "" && p22 != "" && p23 != "" && p31 != "" && p32 != "" && p33 != "")
        {
            winner = true;
            await sleep(50);
            alert("😭 POXA, que pena deu velha!");
            for(var i=0;i<=8;i++){
                winner_pos[i].style.border = "4px solid red";
            }
        }
    
    if(venc != ""){//exibir vencedor 
            winner = true;
            await sleep(50);    
            alert ("👏 PARABÉNS!! O jogador de letra '"+venc+"' venceu!");
        }
     
    }
    
    function sleep(ms){
        return new Promise(resolve=>setTimeout(resolve,ms));
    }
    /*
    function limpar(){
        let frame = document.querySelector(".tabuleiro");
        frame.children.p11.innerText = "";
        frame.children.p12.innerText = "";
        frame.children.p13.innerText = "";

        frame.children.p21.innerText = "";
        frame.children.p22.innerText = "";
        frame.children.p23.innerText = "";

        frame.children.p31.innerText = "";
        frame.children.p32.innerText = "";
        frame.children.p33.innerText = "";
    }*/
