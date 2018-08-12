## Guideline:
   Instruções de como configurar o ambiente de desenvolvimento.
    
   Precisaremos instalar algumas dependências que são primordiais e devem ser seguidas para que possamos iniciar e rodar um projeto React Native. 

   Os tópicos estão em sequência, devem ser seguidos na ordem. 

## Tópicos sequênciais:

 - Documentação oficinal do [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
 - [Node](#node)
    - [Node Package Manager NPM](#node-package-manager-npm) 
- [Create React Native App CRNA](#create-react-native-app-crna)
- [Start no Projeto](#start-no-projeto)
- [Expo](#expo)
- [Dúvidas](#duvidas)

## Node 
   A primeira coisa a ser feita é fazer o download do [Node](https://nodejs.org/en/download/).
    Ao concluir a instalação, precisamos nos certificar que ocorreu tudo certo durante o processo.
    Abra o seu terminal e digite o comando abaixo(sem o cifrão):
    
    $ node -v
    
   Precisa aparecer o número da versão instalada.
   
   Exemplo:
    
    v10.8.0
    
### Node Package Manager - NPM
  O Node instalará o npm, porém precisamos verificar se a instalação também ocorreu de forma esperada. 
   
   Para checar a versão do npm use o comando:
    
   
    $ npm -v
    
   Precisa aparecer o número da versão instalada.
   
   Exemplo:
    
    
     6.2.0
     
## Create React Native App (CRNA)
   Existem outras formas de iniciar um projeto com React Native. 
   Mas, nos basearemos na cli create-react-native-app. 
    Essa cli abstraí boa parte da complexidade do setup de criação(Create React Native App), com alguns comandos no terminal, teremos o     ambiente de desenvolvimento configurado. \o/
    Para rodar o projeto no celular por padrão esta cli utiliza o Expo.
    
   Vamos instalar o react-native, para isto execute o comando no terminal:
   
    $ npm i -g create-react-native-app
    
   Recomendo sempre verificar a versão da dependência que foi instalada. 
   Sendo assim, digite no seu terminal o seguite comando:
   
    $ create-react-native-app --version
    
  A mensagem de torno terá que ser:
    
    create-react-native-app version: 1.0.0
    
    
## Start no Projeto
   Agora vamos criar o projeto com os comandos abaixo:
   
     
     $ create-react-native-app meu-primeiro-app`
     
   Ao concluir a execução do comando, uma mensagem será exibida `"Success! Created..."`. 
   
    Para acessarmos o diretório do projeto:
    
    
    $ cd meu-primeiro-app
    
   Para rodar o projeto:
    
    
    $ npm start
    
## Expo 
   Expo Client é uma ferramenta que nos auxiliará na visualização do projeto em tempo real.
    Caso você faça qualquer mudança, rapidamente aparecerá no Expo.  
    Vamos precisar dele para rodar nossa aplicação no celular. [faça o download no seu celular](https://expo.io/tools#client)
    Após a criação do app vamos abrir o Expo App (no celular) e usá-lo para fazer a leitura do QR code que apareceu no terminal. 
## Dúvidas 
   Houve algum problema durante o setup ou está com dúvidas?
    Sinta-se a vontade para abrir uma [issue](https://github.com/oskojess/react-native-forbegginners/issues/new)ou entrar em contato comigo pelo [Facebook](https://www.facebook.com/jessica.osko.7).

    

