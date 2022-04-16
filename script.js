var mais = document.getElementById('maioroumenor')
        var aleatorio = Math.floor(Math.random() * 101);
        var jogadas = 0
        var bot = document.getElementById('botao')
        var refresh = document.getElementById('refresh')

        function clicou() {
            var chute = window.prompt('Digite algum número:')
            if (chute < aleatorio) {
                mais.innerHTML += `<p> Você falou ${chute}. O meu número é <b> MAIOR. </b>`
                jogadas++ 
            } else if (chute > aleatorio) {
                mais.innerHTML += `<p> Você falou ${chute}. O meu número é <b> MENOR. </b>`
                jogadas++
            } else if (chute == aleatorio) {
                jogadas++
                mais.innerHTML += `<p2> <b> Parabéns, você acertou em ${jogadas} jogadas. Eu tinha sorteado o número ${aleatorio} :)</p2> </b>`
                document.getElementById('botao').style.visibility='hidden'
                refresh.innerHTML += '<button id="clicar"> Jogar novamente </button>'
                var refrescar = document.getElementById('clicar')
                refrescar.addEventListener('click', function(){
                    location.reload()
                })    
                refrescar.addEventListener('mouseout',function(){
                    refrescar.style.boxShadow='5px 5px 10px black'
                    refrescar.style.color='black'
                })
                refrescar.addEventListener('mouseenter',function(){
                    refrescar.style.boxShadow='5px 5px 10px green'
                    refrescar.style.color='green'
                })
            } else{
                mais.innerHTML += '<b>Desculpe, mas isso não é um número.</b><br>'    
            }
        }
        
        function saiu() {
            bot.style.boxShadow='5px 5px 10px black'
            bot.style.color='black'            
        }

        function entrou(){
            bot.style.boxShadow='5px 5px 10px blue'
            bot.style.color='blue'
        }
        var inf = document.getElementById('inf')
        var inter = document.getElementById('interrogacao')
        var capa2 = document.getElementById('inf2')
        function divclick(){
            inf.innerHTML = '<b>COMO JOGAR:</b><br> O computador vai escolher um número de 0 a 100<br> e você deve tentar acertar. <b>Boa sorte!<b>'
        
            capa2.style.background='white'
        }
        function divsaiu(){
            inf.innerHTML = ''
            
        }