// Тип который служит для объектво или классов
interface Rect {
    readonly id: string; //параметр только для чтения
    color?: string; // необязательный параметр
    size: {
        width: number;
        height: number;
    };
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 10,
        height: 20
    },
    color: '#ccc'
};

const rect2: Rect = {
    id: '12345',
    size: {
        width: 20,
        height: 30
    }
};

rect2.color = 'black';

//Старые объявления
const react3 = {} as Rect;
const rect4 = <Rect>{};

//==============================
//Взаимодействие с интерфейсом

interface RectWithArea extends Rect {
    getArea: () => number; //тип функции и что она возвращает
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 11,
        height: 21
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
};

//==============================
//Interface называеют через большую букву I

interface IClock {
    time: Date;
    setTime(date: Date): void;
}

//Можем создать класс, и для того чтобы ТС понял что данный класс он имплементируется от интерфейса и должен реализовать его методы мы пишем implements

class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

//==========================

interface Styles {
    [ket: string]: string; // Данная запись позволяет задавать произвольное количество ключей с значениями типа string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
