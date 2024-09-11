let inputText ='';
       let reversed = '';
        
            updateView()
            function updateView(){
                let html = /*HTML*/`
                <div class="main">
                Reverser teksten: ${inputText}<br/>
                ${reversed}
                <br/>
                <input type="text" value="${inputText}"onchange="printLetters(this.value)">
                <button onclick="submit()">Print Letters</button>
                </div>
                `;
                document.getElementById('app').innerHTML = html;
            }
        function submit(){
                updateView();
        }
        function printLetters(inputString){
            letterChecker(inputString);
        }
        function letterChecker(inputString){
            inputText = inputString;
            for(let index = inputText.length - 1; index >= 0; index--){
                reversed += inputText[index]
            }
        }