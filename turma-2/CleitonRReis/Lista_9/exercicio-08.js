/*
8 - Crie uma função que concatene dois arrays usando o método push e spread operator.
*/

function concatena() {
    let args = [];
    let arr = [1, 2, 3];
    let arr1 = [4, 5, 6];
    args.push(arr, ...arr1);
    console.log(args);
}

concatena();