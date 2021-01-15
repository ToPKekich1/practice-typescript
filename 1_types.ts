const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;

const message: string = 'hello!';

const numberArray: number[] = [1, 1, 2, 3, 5, 8];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8]; //jeneric запись

const words: string[] = ['Hello', 'TypeScript'];

//Tuple - массив из разных типов данных
const contact: [string, number] = ['Vladilen', 12345];

//Any
let variable: any = 42;
//...
variable = 'NewString';

//===
function sayMyName(name: string): void {
    //void если функция не возвращает ничего
    console.log(name);
}

//Never - когда функция ошибку возвращает или постоянно что-то возращает
function throwError(message: string): never {
    throw new Error('NEVER!!!');
}

function infiniite(): never {
    while (true) {}
}

//Type - свои именнованые типы
type Login = string;

const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

type SomeType = string | null | undefined;
