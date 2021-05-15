class pet{
    constructor(name,age){
        this.Name = name;
        this.Age = age
    }
    eat(){
        return `${this.Name} is eating`;
    }
}

class cat extends pet{
    
    constructor(name,age,livesleft = 9){
        super(name,age)
        this.livesleft = livesleft;
    }
    meow(){
        return 'MEOOOOOOW!';
    }
}

class Dog extends pet{
    bark(){
        return 'WOOOOFF WOOOOOOF!';
    }
}