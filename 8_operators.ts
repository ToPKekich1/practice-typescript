interface Person {
    name: string;
    age: number;
}

//тип может быть только названием полей интерфейса
type PersonKeys = keyof Person; // 'name' | 'age|

let key: PersonKeys = 'name';
key = 'age';

type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: Date;
};

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>; //'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>; //'name' | 'email'

let u1: UserKeysNoMeta = 'name';
// u1 = '_id1'
