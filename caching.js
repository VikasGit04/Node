const NodeCache = require('node-cache')
const myCache = new NodeCache();

function getApiCall() {
    return new Promise((reject, resolve) => {
        setTimeout(()=> {
            resolve('Response')
        }, 1000);
    })
}

async function getData() {
    const cacheData = myCache.get('myData');

    if(cacheData) {
        return cacheData;
    }

    const data = await getApiCall();
    myCache.set('myData', data);
    return data;
}


console.log(await getData()); // it will call getApiCall function
console.log(await getData()); // it will get the data from node cache