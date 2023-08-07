const form = document.querySelector('#secform');

async function get(some) {
    let response = await fetch('http://localhost:3000', {
        method: 'POST',
        header: {
            "Content": 'application/json'
        },
        body: JSON.stringify(some)
    })
        .then(response => {
            console.log(response.json())
        })

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let stuff = document.querySelector('#chose').value;

    //get();
    console.log(stuff);
    return stuff;
})