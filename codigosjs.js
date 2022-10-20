window.alert("E ae, fera, tudo na tranquilidade");
function exibir_janela_alerta()
{
    var name =  window.prompt ("Por favor, digite o seu nome","<Seu Nome aqui!>");
    if (name != null && name != "" && name !="<Seu Nome aqui!>") {
        window.alert("Olá" + name + "Tudo brother?");
    } else {
        window.alert("Deu ruim, major! FAltou digitar o nome.")
    }
}
function exibir_num_objbody()
{
    var name =  window.prompt ("Paaaaor favor, digite o seu nome","<Seu Nome aqui!>");
//    if (name != null && name != "")
//    {   
      divexibirnome.innerHTML = String("Olá " + name + "! Tudo brother?");
//    }
}