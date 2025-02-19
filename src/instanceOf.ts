{
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string){
            this.name = name;
            this.species = species;
        }

        getMakeSound(){
            return `Hi, I am ${this.name} and I am making sound!`
        }
    }

    class Dog extends Animal{

        constructor(name: string, species: string) {
            super(name, species);
        }

        getDogSound(){
            return `Hi, I am ${this.name} and I make sound like Ghew Ghew`
        }
    }

    class Cat extends Animal{

        constructor(name: string, species: string){
            super(name, species)
        }

        getCatSound(){
            return `Hi, I am ${this.name} and I make sound like Mew Mew`
        }
    }

    const isDog = (animal: Animal) =>{
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal) =>{
        return animal instanceof Cat;
    }

    const getAnimalSound = (animal: Animal)=>{
        if(isDog(animal)){
            return animal.getDogSound();
        }else if(isCat(animal)){
            return animal.getCatSound();
        }else{
            return animal.getMakeSound();
        }
    }

    const dog = new Dog("Mr Doglass", "Dog");
    const cat = new Cat("Mr Catwoot", "Cat");

    const dogSound = getAnimalSound(dog);
    const catSound = getAnimalSound(cat);

    console.log({dogSound, catSound});
}