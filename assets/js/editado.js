setTimeout(function (){ // tempo para carregar código html
    var a;
    //artigos recentes
        $.getJSON("artigos/infoRecentes.json",function(obj){

           
            
            obj.recentes.forEach(function(atual,cont){

                try{
                    
                    //guia menu (desktop)        
                    a = document.querySelector(String("#campo"+(cont+1)));
                    a.setAttribute("href",atual.link);
                    a.innerHTML = atual.nome;


                    //guia do escorpo 
                    a = document.querySelector(String("#artTema"+(cont+1)));
                    a.innerHTML = atual.tema;

                    a = document.querySelector(String("#artDetalhes"+(cont+1)));
                    a.innerHTML = atual.detalhes;

                    a = document.querySelector(String("#artLink"+(cont+1)));
                    a.setAttribute("href",atual.link);

                    a = document.querySelector(String("#artImg"+(cont+1)));
                    a.setAttribute("src",atual.img);

                    
                }catch(e){
                    
                    window.location.reload();
                    alert("O site está em BETA, podendo encontrar alguns erros. Pedimos a colaboração e nos informe em caso de erro. Obrigado ");
                    
                    //guia menu (desktop)        
                    a = document.querySelector(String("#campo"+(cont+1)));
                    a.innerHTML = atual.nome;


                    //guia do escorpo 
                    a = document.querySelector(String("#artTema"+(cont+1)));
                    a.innerHTML = atual.tema;

                    a = document.querySelector(String("#artDetalhes"+(cont+1)));
                    a.innerHTML = atual.detalhes;

                    a = document.querySelector(String("#artLink"+(cont+1)));
                    a.setAttribute("href",atual.link);

                    a = document.querySelector(String("#artImg"+(cont+1)));
                    a.setAttribute("src",atual.img);
                    
                    
                }
            });
            
        
            

        });

    
},300);



function widthPlataforma(){
    return document.querySelector('body').clientWidth;
}



