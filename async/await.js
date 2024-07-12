//Async/Await
function fetchData (){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const success = true;
            if(success){
                resolve('Data Fetched')
            } else{
                reject('Error Fetching Data')
            }
        }, 2000);
    })
}

async function process(){
    try { 
        const data = await fetchData();
        console.log(data);
        console.log('Proccessing Data');
    } catch (error) {
        console.log(error);
    }
}
process();