## Guideline:
   Instruções de como configurar o ambiente de desenvolvimento.
    
   Precisaremos instalar algumas dependências que são primordiais e devem ser seguidas para que possamos iniciar e rodar um projeto React Native. 

   Os tópicos estão em sequência, devem ser seguidos na ordem. 

## Tópicos sequênciais:

 - Documentação oficinal do [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
 - [Node](#node)
    * [Node Package Manager - NPM](#Node-Package-Manager-npm) 
- [Create React Native App -CRNA](#create-react-native-app-crna)
- [Start no Projeto](#start-no-projeto)
- [Expo](#expo)
- [Dúvidas](#duvidas)

## Node 
   A primeira coisa a ser feita é fazer o download do [Node](https://nodejs.org/en/download/).
    Ao concluir a instalação, precisamos nos certificar que ocorreu tudo certo durante o processo.
    Abra o seu terminal e digite o comando abaixo(sem o cifrão):
    ```$ node -v```
    Precisará aparecer o número da versão instalada.
    Exemplo:
    
    ```shell
    v10.8.0```
    
### Node Package Manager - NPM
   Provavelmente o Node instalará o Npm, porém precisamos verificar se a instalação também ocorreu de forma esperada. 
    Para checar a versão do npm use o comando:
    
    ```shell
    $ npm -v```  
    
   Precisará aparecer o número da versão instalada.
    Exemplo:
    
     ```shell
     6.2.0```
     
## Create React Native App (CRNA)
   Existem outras formas de iniciar um projeto com React Native. Mas, nos basearemos na cli create-react-native-app. 
    Essa cli abstraí boa parte da complexidade do setup de criação(Create React Native App), com alguns comandos no terminal, teremos o ambiente de desenvolvimento configurado. Para rodar o projeto no celular por padrão ela utiliza o Expo.
    Vamos instalar o react-native, para isto execute o comando no terminal:
    ```shell
    $ npm i -g create-react-native-app```
    Recomendo sempre verificar a versão da dependência que foi instalada. Sendo assim, digite no seu terminal o seguite comando:
    ```shell
    $ create-react-native-app --version```
    A mensagem de torno terá que ser:
    ```shell
    create-react-native-app version: 1.0.0```
## Start no Projeto
   Agora vamos criar o projeto com os comandos abaixo:
     ```shell
     $ create-react-native-app meu-primeiro-app```
    Ao concluir a execução do comando, uma mensagem será exibida "Success! Created...". 
    Para acessarmos o diretório do projeto:
    ```shell
    $ cd meu-primeiro-app```
    Para rodar o projeto:
    ```shell
    $ npm start```
## Expo 
   Expo Client é uma ferramenta que nos auxiliará na visualização do projeto em tempo real.
    Caso você faça qualquer mudança, você conseguirá ve-la rapidamente pelo Expo.  
    Precisaremos dele para rodar nossa aplicação no celular [clique aqui e faça o download no seu celular] (https://expo.io/tools#client)
    Após a criação do app vamos abrir o Expo App (no celular) e usá-lo para fazer a leitura do QR code que apareceu no terminal. 
## Dúvidas 
   Houve algum problema durante o setup ou está com dúvidas?
    Sinta-se a vontade para abrir uma [issue](https://github.com/oskojess/react-native-forbegginners/issues/new)ou entrar em contato comigo pelo [Facebook](https://www.facebook.com/jessica.osko.7).

    

