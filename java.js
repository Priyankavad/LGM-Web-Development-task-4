let java = document.getElementById('java');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                java.innerText = '';
                break;
            case '=':
                try{
                    java.innerText = eval(java.innerText);
                } catch {
                    java.innerText = "Error"
                }
                break;
            case '←':
                if (java.innerText){
                   java.innerText = java.innerText.slice(0, -1);
                }
                break;
            default:
                java.innerText += e.target.innerText;
            }
    });
});
