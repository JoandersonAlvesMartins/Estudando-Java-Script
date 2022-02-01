// função map com this
const maca = {value: 2,}
const laranja = {value: 3,}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('Usando o this\nArray Original',nums);
console.log('Maçã', mapComThis(nums, maca));
console.log('Laranja', mapComThis(nums, laranja));


// função map sem this
function mapSemThis(arr){
    return arr.map(function (item){
        return item * 2;
    });
}

const num = [2, 4, 6, 8, 10];

console.log('Sem o this\nArray Original',num);
console.log(mapSemThis(num));