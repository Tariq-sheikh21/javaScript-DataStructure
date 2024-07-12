//Promises in Js 
const fetchData = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const success = true;
        if(success){
            resolve('Data Fatched');
        } else{
            reject('Error Fetching data')
        }
    }, 2000);
})

fetchData 
    .then(data=>{
        console.log(data);
        return 'Proccessing Data'
    })
    .then(result =>{
        console.log(result);
    })

    .catch(error=>{
        console.log(error);
    })