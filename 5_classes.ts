class TypeScript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

class Car {
    //объявляем поля до конструктора
    readonly model: string;
    readonly numberOfWheels: number = 4;

    //Приватные поля можно перезаписать только внутри конструктора
    constructor(theModel: string) {
        this.model = theModel;
    }
}

class Car2 {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {}
}

//Модификаторы. Protected, private, public

class Animal {
    //protected - поле могут быть доступна в теле класса и всех его дочерних классах
    protected voice: string = '';
    public color: string = 'black';
    constructor() {
        this.go();
    }

    //private - они доступны в классе которых были определены
    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
//cat.voice

//======================
//Абстрактный класс от них можно наследоваться но они не во что не компилируются. Класс шаблон
abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log('Componen on render');
    }

    info(): string {
        return 'This is info';
    }
}
