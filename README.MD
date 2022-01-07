# Fundamentos NodejS Ignite
## Conceitos NodeJS
- Baseado em eventos 
- single thread (o event loop só escuta uma requisição por vez, porém, por default ele tem 4 threads para distribuir essas requisições (FIFO))
- non-blocking I/O 

## Rest

1. Client-server - dividir as atribuições (backend pode ser o client tmb) </br>
2. Stateless - a cada requisição, é necessário passar todas as informações necessárias (o servidor n salva nada) </br>
3. Cache - garantir que a API vai ter suporte para cache </br>
4. interface uniforme </br>
4.1 Identificação dos recursos </br>
4.2 Representação dos recursos </br>
4.3 Mensagens auto-descritivas </br>
4.4 HATEOAS (hypertext as the engine of application satate) - retorna links dentro da requisição </br>
4.5 Camadas - deve permitir que existam camadas entre o client e o server </br>
4.6 Código sob demanda - permite que as funcionalidades do cliente sejam estendidas na forma de scripts ou mini aplicativos 

## Métodos de requisição

- GET - leitura
- POST - criação 
- PUT - atualizaçãp 
- DELETE - deleção 
- PATCH - atualização parcial (tipo mudança de avatar)

## Tipos de parâmetros

- Route Params => Identificar um recurso editar/deletar/buscar
- Query Params => Paginação / Filtro
- Body Params => objetos que vamos passar para inserção/alteração de algum recurso (JSON)

## HTTP code

1XX - informativo 
2XX - confirmação 
3XX - redirecionamento 
4XX - erro do cliente
5XX - erro no servidor
