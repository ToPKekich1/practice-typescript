const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5]; //generic syntax
const arrayOfStrings: Array<string> = ['Hello', 'Wold']; //generic syntax

//Массив и функция будет подстраиваться под тип параметров, которые мы передаем
function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
