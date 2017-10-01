/*//variaveis/inicializaão
let ul = document.querySelector("#listarRecentes"),li;


//artigos recentes
$.getJSON("artigos/infoRecentes.json",function(obj){
    
    obj.recentes.forEach(function(atual){
        li = document.createElement("a");
        
        li.setAttribute("id",atual.id);
        li.setAttribute("onclick","abrirPag(event)");
        
        li.innerHTML = atual.nome;
        ul.appendChild(li);
        
    });
    
    console.log(ul);
});
*/