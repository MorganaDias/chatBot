/* retornando o 5 primeiros repositórios da Take na linguagem c# por ordem de criação */

const  express  =  require ( 'express' )
const  consign  =  require ( 'consign' )


módulo . exportações  =  ( )  =>  {
    const  app  =  express ( )

    app . usar ( express . json ( ) )
    app . use ( express . urlencoded ( {
        estendido : verdadeiro
    } ) )
    consignar ( )
        . incluir ( 'controladores' )
        . em ( aplicativo )

    devolver o  aplicativo
}