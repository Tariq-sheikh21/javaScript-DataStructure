//callBacl Function
function fetchData(callback){
    setTimeout(() =>{
        console.log('Fetch Data');
        callback();
    }, 2000)
}

function processData(){
    console.log('Proccessing Data');
}

fetchData(processData);






