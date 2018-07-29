const fs = require('fs');

let createTable = async(base, limit) => {

    if (!Number(base))
        throw new Error('Base is not a number')

    let output = '';
    for (let i = 1; i <= limit; i++) {
        output += `${base} * ${i} = ${base*i}\n`;
    }

    fs.writeFile(`./files/tabla-${ base }.txt`, output, (err) => {
        if (err) throw err;
    });


    return `tabla-${ base }.txt`;
}


let listTable = async(base, limit) => {

    if (!Number(base))
        throw new Error('Base is not a number')

    let output = '';
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}


module.exports = {
    createTable,
    listTable
}