# API Histórico-IPCA

<p>Projeto criado utilizando <strong>JavaScript</strong> e <strong>Express</strong>.</p>

## Como utilizar

### Ps: antes de continuar, certifique-se de ter instalado o npm e o node nas versões mais recentes

<p>Baixe o projeto através do botão verde escrito <strong><>Code</strong> em seguida em <strong>Download ZIP</strong>. Não esqueça de extrair a pasta. <br>
Também pode usar o git clone caso tenha o GIT utilizando o comando.</p>
<br>

    $ git clone git@github.com:deusielbrizante/api-historico-IPCA.git

<br>
<br>

<p>Abra a pasta que contenha os arquivos e logo em seguida, abra o terminal e digite o comando abaixo para que baixe as dependências necessárias caso não as tenha.</p>

<br>

    $ npm install

<br>
<br>

<p>Após o download das dependências, pode executar o comando abaixo para iniciar o servidor no <br>
endereço <a href="https://localhost:8080/historicoIPCA">localhost:8080/historicoIPCA</a>.</p>

<br>

    $ node index.js
    
<br>
<br>

## Comandos

<p>Utilizando o Postman ou outra ferramenta que possa fazer requisições, coloque no Método <strong>GET</strong> e cole o endereço do servidor nele.</p>

<p>Caso queira exibir todos os resultados da tabela de dados, apenas coloque o endereço padrão e aperte em <strong>Send</strong>.</p>
<br>

    localhost:8080/historicoIPCA

### Ps: No exemplo acima será exibido todos os dados.
<br>
<br>

<p>Caso queira exibir apenas os resultados a partir de um ano, você pode adicionar uma chave com o valor referente ao ano desejado através dos <strong>Query Params</strong> ou através do endereço.</p>
<br>

    localhost:8080/historicoIPCA?ano=2018

### Ps: No exemplo acima será exibido todos os resultados com o {ano: 2018}. <br> Lembre-se de substituir o valor numérico acima para o valor que você deseja.
<br>
<br>

<p>Caso queira exibir apenas um resultado baseado no seu id, podemos adicionar uma barra logo após o endereço inicial e digitá-lo.</p>
<br>

    localhost:8080/historicoIPCA/1

### Ps: No exemplo acima exibirá o resultado com o {id: 1}. <br> Lembre-se de substituir o valor numérico acima para o valor que você deseja.
<br>
<br>

<p>Caso queira fazer um cálculo para ver quanto valeria o dinheiro atual em alguma época passada, você pode pegar o endereço inicial com a barra e digitar <strong>calculo</strong>. <br><br>
Em seguida, será necessário passar os valores através das chaves e valores, podendo ser passado através das <strong>Query Params</strong> novamente ou do endereço.</p>
<br>

    localhost:8080/historicoIPCA/calculo?valor=100&mesInicial=1&anoInicial=2017&mesFinal=8&anOFinal=2022

### Ps: No exemplo acima exibirá o resultado do cálculo dos valores passados. Lembre-se de substituir todos os valores depois do "nomeDaChave=" para o valor desejado.
<br>
