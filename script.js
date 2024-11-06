// VARIAVEIS DOS CAMPOS LOGIN 

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");


let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");

nome.addEventListener('keyup',()=>{
  if(nome.value.length <= 5){
    labelNome.setAttribute('style', "color: red")
    labelNome.innerHTML = 'Nome *Insira pelo menos 5 caracteres'
    nome.setAttribute('style', 'border-color: red')
  }else{
    labelNome.setAttribute('style', "color: green")
    nome.setAttribute('style', 'border-color:green')

  }
})


senha.addEventListener('keyup',()=>{
  if(senha.value.length <= 8){
    labelSenha.setAttribute('style', "color: red")
    labelSenha.innerHTML = 'Nome *Insira pelo menos 8 caracteres'
    senha.setAttribute('style', 'border-color: red')
  }else{
    labelSenha.setAttribute('style', "color: green")
    senha.setAttribute('style', 'border-color:green')

  }
})
function login(){
  alert("Logou!!");
  let listaUser = Json.parse(localStorage.getItem('listaUser') || [])

  listaUser.push(
    {
      nomeCad: nome.value,
      userCad: senha.value
    }
  )
  localStorage.setItem('listaUser', JSON.stringify(listaUser))
}