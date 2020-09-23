const array = [{}, {}, {}, {}, {}]

array.map((object, i) => {
    object.number = i
})
console.log(array)