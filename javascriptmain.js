var id=0;
            var id2=0;
            var s=00;
            var m=00;
            var ms=00;
            var snd=document.getElementById("aud");
            function reset()
            {
                s=0;
                m=0;
                ms=0;
                document.getElementById("h2").innerHTML=m+" Minutes "+s+" Seconds "+ms+" Milliseconds";
            }
            function add()
            {
                document.getElementById("h2").innerHTML=m+" Minutes "+s+" Seconds "+ms+" Milliseconds";
                if(ms==100){
                    ms=0;
                    s++;
                }
                if(s==60){
                    s=0;
                    m++;
                }
                if(m==60){
                    m=0;
                }
                ms++;
                document.getElementById("start").style.visibility="hidden";
            }
            function start() {
                id=window.setInterval(add,10);
            }
            function stop() {
                document.getElementById("start").style.visibility="visible";
                window.clearInterval(id);
            }