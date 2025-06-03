# Starting

# starting 
inicio do projeto 

# aula 01
git, cofigurações, criação dos compoonentes body, header, main, footer 

# aula 02
criação do html e css dos component
onde setar o css:
style.css adicionamos os style globais
component.css
dentro da tag style={...}
no arquivo index adicionamos as fontes do projeto
feita a configuração conf. do css globsl no srquivo app.component.css
obs: Inicio do conhecimento sobre API de rotas
1º No arquivo app.routes.ts é p local da mossa configurações globais
2º Falaremos sobre routlink="...." que fica dentro do componente header.html
temos de importar seu "Module"
Estudar JS Objetos e JS Arraysou List

# Aula 3 
configurar o app Main e Footer
instalação do luxon npm npm install --save-dev @types/luxon, npm install full-icu, falaremos sobre inicio de encapsulamento 
Criação construtor do Angular e não JS.
Inicio a injeção de dependencia e tipo de injeção()
Falaremos sobre injeção de dependencia usando o Router como exemplo this.router.navigateByUrl('/hit-class/project') e this.router.navigate(['/hit-class/project'])
Inicio sobre interpolação{{...}}OBS: Interpolação somente para .HTML 
Inicio sobre Template Literais `${...}` OBS: Template Literals somente para .TS

# Aula 04
1º Criação de componentes home, projets
2º Continuação da aula sobre rotas, no arquivo app.routes.ts
3º Explicação sobre rotas comuns e loadlazy
4º Evento de {click} ="..." e outros

# Aula 05
Configuração do firebase hosting 
Copiar o template para outro projeto do git

# Aula 06 
1º Começar por criar dentro do "starting-class-hit" a pasta "firebasehosting3" usar a opção css e "No" no passo seguinte que vai criar todos os arquivos.
2º Dentro do Visual Code vamos excluir a pasta "node_modules"
3º No gestor de ficheiros vamos substituir os arquivos "src", "package.json" e "package-lock.janson" do arquivo antigo para o novo, substituindo os arquivos iguais
4º Criação da pasta "environments" dentro do "src"
5º Criação dos arquivos "environment.keys.ts", "environment.prod.ts" e "environment.ts" dentro da pasta "environments" 
Nota: os arquivos "environment" não levam "s".
6º Dentro do site "Firebase" vamos criar um novo projeto, introduzimos o nome do projeto exemplo: firehosting3-hit-belchior, depois desativamos o Gemini e o Google Analystics e criamos o projeto
7º Ainda dentro do site vamos as configurações do projeto e dentro dos seus aplicativos abilitamos o codigo "</>", introduzimos o nome para registar a app
8º Dentro do "cmder" e do respetivo diretorio introduzimos "npm install firebase" que é dado no site
9º Copiar o excerto do código dado pelo site 
exemplo:// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB98nm3-cuf5NZajTMQHCL6RFAnQ8wZHo",
  authDomain: "firehosting3-hit-belchior.firebaseapp.com",
  projectId: "firehosting3-hit-belchior",
  storageBucket: "firehosting3-hit-belchior.firebasestorage.app",
  messagingSenderId: "836113540975",
  appId: "1:836113540975:web:fd1a78bbf8bce71d04ea9a"
};
10º Dentro do Visual Code, no arquivo "environment.prod.ts" vamos colar esse código e antes do const vamos colocar export
exemplo:
export const firebaseConfig = {
  apiKey: "AIzaSyCB98nm3-cuf5NZajTMQHCL6RFAnQ8wZHo",
  authDomain: "firehosting3-hit-belchior.firebaseapp.com",
  projectId: "firehosting3-hit-belchior",
  storageBucket: "firehosting3-hit-belchior.firebasestorage.app",
  messagingSenderId: "836113540975",
  appId: "1:836113540975:web:fd1a78bbf8bce71d04ea9a"
};
11º Vamos dar "ctrl x" ao texto que vai ser recebido na variavel apikey, exemplo:"AIzaSyCB98nm3-cuf5NZajTMQHCL6RFAnQ8wZHo",
12º Dentro do arquivo environment.keys.ts vamos criar um export const keys
exemplo:
export const keys ={
    firebaseApiKey: "AIzaSyC_oEsmEQ6wlrg_cD412_nFyZ5Qka2LM8c", // texto copiado anteriormente
}
13º Voltando ao "environment.prod.ts" a variavel que retiramos o excerto do código "apiKey" introduzir "Keys.firebaseApiKey". "firebaseApiKey" é o nome da variavel do arquivo "environement.prod.ts"
14º Passar o  rato em cima do keys e dar "Quich Fix" e dar "import"
15º No arquivo "envirenment.prod.ts", antes de da variavel apiKey vamos adicionar "production: true,"
16º Copiar o código todo e colar no arquivo "envirenment.ts" substituindo o "true" para "false"
17º Dentro do arquivo "angular.json" por volta da linha 35 onde diz "production" não sendo nas configurações do buildervamos colar este código:
"fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                } 
	      ],
exemplo:
"configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
18º Dentro do arquivo "package.json" vamos adicionar os scripts 
    "serveprod": "ng serve --configuration production",
    "buildprod": "ng build --configuration production"

19º Dentro do arquivo ".gitignore" vamos colar na ultima linha:
# Environments
# Seccrets
src/environments/environment.keys.ts 

20º Dentro da pasta "src" e "app" vamos ao arquivo "app.config.ts" e colamos este excerto
// Initialize Firebase
const app = initializeApp(firebaseConfig);

passando o rato por cima do "initializeApp" vamos dar "Quick Fix" e "add import" e repetir o processo para o "firebaseConfig"

21º Dentro de "cmder" vamos introduzir "src\environments\environment.prod.ts", depois "cat src\environments\environment.keys.ts" e depois "cat src\environments\environment.ts"
22º Depois "npm install firebase"
23º Depois "firebase login"
24º Depois "firebase init" de seguida dar "Yes", depois em "Hosting" dar espaço e enter, depois escolher "Use an existing project", depois escolher o nome escolhido, depois "dist/starting2/browser", depois "Yes" e de seguida "No"
25º Ainda dentro do cmder vamos colar este código "npm run buildprod" e dar "yes" depois
26º Colar "firebase deploy" para obter o link
