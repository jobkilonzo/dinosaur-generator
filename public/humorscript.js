document.querySelector('#btnhumor').addEventListener("click", () => {
    getHumor()
})
async function getHumor(){
    const res = await fetch('/humor')
    const data = await res.json()

    if(document.querySelector('#quote') !==null && document.querySelector('#author') !==null){
        document.querySelector('#quote').remove()
        document.querySelector('#author').remove()
    }

    var h = document.createElement("H2");
    h.innerText = data[0].quote;
    h.id = 'quote'

    var p = document.createElement("p");
    p.innerText = data[0].author;
    p.id = 'author'
    var objTo = document.getElementsByClassName('mativational-container');
    
    document.getElementById('mativational-container').appendChild(h);
    document.getElementById('mativational-container').appendChild(p);
}