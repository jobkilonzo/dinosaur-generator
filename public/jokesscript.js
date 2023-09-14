document.querySelector('#btnjokes').addEventListener("click", () => {
    getJokes()
})
async function getJokes(){
    const res = await fetch('/jokes')
    const data = await res.json()

    if(document.querySelector('#quote') !==null){
        document.querySelector('#quote').remove()
    }

    var h = document.createElement("H2");
    h.innerText = data[0].joke;
    h.id = 'quote'

    
    
    document.getElementById('mativational-container').appendChild(h);

}

