async function fetchData () {
    let promise = new Promise((res, rej) => {
        let val = Math.random().toFixed(1)
        
        setTimeout(() => {
            if(val > 0.5) res("Request processed successfully")
            rej("Request can't process currently, try again later!!")
        }, 1000)
    })

    return promise
}


async function fetchDataHandler() {
    try {
        let res = await fetchData();
        console.log(res);
    } catch (error) {
        console.error("Error fetching data!!\nReason: ", error);
    }
}

fetchDataHandler()