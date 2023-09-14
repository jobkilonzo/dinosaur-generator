document.querySelector('#btnriddle').addEventListener("click", () => {
    getRiddles()
})
async function getRiddles(){
    const res = await fetch('/riddle')
    const data = await res.json()

    if(document.querySelector('#quote') !==null && document.querySelector('#author') !==null){
        document.querySelector('#quote').remove()
        document.querySelector('#author').remove()
    }

    var h = document.createElement("H2");
    h.innerText = data[0].question;
    h.id = 'quote'

    var p = document.createElement("p");
    p.innerText = data[0].answer;
    p.id = 'author'
    var objTo = document.getElementsByClassName('mativational-container');
    
    document.getElementById('mativational-container').appendChild(h);
    document.getElementById('mativational-container').appendChild(p);
}