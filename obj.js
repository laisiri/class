//define class
class Person {
    constructor(firstName,lastName,age,gender,tel) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender; //male:ชาย female:หญิง
        this.tel = tel;//array of telphone's number
        this.counter = 0;
        this.id = ++Person.creater;//count object of class Person    
    }
    static creater = 0;
    get mid(){
        return this.id;
    }

    
}
    const std1 = new Person('Suttipong','Laisiri',55,'male',['0646277934','0996392252']);
    console.log(std1);
    console.log(`std1.tel[1]: ${std1.tel[1]}`);
    console.log(`std1.hasOwnProperty("age"): ${std1.hasOwnProperty("age")}`);
    //method object.hasOwnProperty(str) return true if str is property of object
    Person.prototype.count = function() {
        this.counter++;
        return this.counter;
    }
    const std2 = new Person("Taweep",'Laisiri',18,'male',[0644237001]);
    const std3 = new Person("Sorawich",'Laisiri',18,'male',[0646107743]);
    console.log( std2);
    console.log(`std2.tel[0]: ${std2.tel[0]}`);
    console.log(`std3.tel[0]: ${std3.tel[0]}`);
    console.log(`std2.hasOwnProperty("age"): ${std2.hasOwnProperty("age")}`);
    console.log(std2.count());
    console.log(`std2.counter:${std2.counter}`);
    console.log(std1.count());
    console.log(`std1.counter:${std1.counter}`);
    console.log(`std1.id: ${std1.id}`);
    console.log(`std2.id: ${std2.id}`);
    console.log(`std3.id: ${std3.id}`);


