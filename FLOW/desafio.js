/* script da parte do chatBot sobre o desafio */

function  run ( respostaString )  {
    const  respostaRepositoriosAPI  =  JSON . analisar ( respostaString )
    
    const  avatar  =  respostaRepositoriosAPI . avatar
 
    let  repositoriosTakeblip  =  [ ] ,
        índice  =  0 ;
    respostaRepositoriosAPI . listaRepositorios . forEach ( repositorio  =>  {
        repositoriosTakeblip [ index ++ ]  =  {
            nome : repositorio . nome ,
            descricao : repositorio . descrição
        }
    } ) ;
    // Criando o carrosel
    content  =  {
        itemType : "application / vnd.lime.document-select + json" ,
        itens : [
            {
                cabeçalho : {
                    digite : "application / vnd.lime.media-link + json" ,
                    valor : {
                        título : ` $ { repositoriosTakeblip [ 0 ] . nome } ` ,
                        texto : ` $ { repositoriosTakeblip [ 0 ] . descricao } ` ,
                        tipo : "imagem / jpeg" ,
                        uri : ` $ { avatar } `
                    }
                }
            } ,
            {
                cabeçalho : {
                    digite : "application / vnd.lime.media-link + json" ,
                    valor : {
                        título : ` $ { repositoriosTakeblip [ 1 ] . nome } ` ,
                        texto : ` $ { repositoriosTakeblip [ 1 ] . descricao } ` ,
                        tipo : "imagem / jpeg" ,
                        uri : ` $ { avatar } `
                    }
                }
            } ,
            {
                cabeçalho : {
                    digite : "application / vnd.lime.media-link + json" ,
                    valor : {
                        título : ` $ { repositoriosTakeblip [ 2 ] . nome } ` ,
                        texto : ` $ { repositoriosTakeblip [ 2 ] . descricao } ` ,
                        tipo : "imagem / jpeg" ,
                        uri : ` $ { avatar } `
                    }
                }
            } ,
            {
                cabeçalho : {
                    digite : "application / vnd.lime.media-link + json" ,
                    valor : {
                        título : ` $ { repositoriosTakeblip [ 3 ] . nome } ` ,
                        texto : ` $ { repositoriosTakeblip [ 3 ] . descricao } ` ,
                        tipo : "imagem / jpeg" ,
                        uri : ` $ { avatar } `
                    }
                }
            } ,
            {
                cabeçalho : {
                    digite : "application / vnd.lime.media-link + json" ,
                    valor : {
                        título : ` $ { repositoriosTakeblip [ 4 ] . nome } ` ,
                        texto : ` $ { repositoriosTakeblip [ 4 ] . descricao } ` ,
                        tipo : "imagem / jpeg" ,
                        uri : ` $ { avatar } `
                    }
                }
            }
        ]
    }
    retornar  conteúdo ;  
}