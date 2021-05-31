
//  From class you create objects/instances --> each rectangle knows how to draw itself from the constructor
// class Rectangle {
    
//     constructor(size) {
//         this.size = size
//     }
//     constructor(size, color) {
//         this.size = size
//         this.color = color
//     }


// }

// let rectangle = new Rectangle(10)
// let rectangleTwo = new Rectangle(20)

// let redRectangle = new Rectangle(30, 'red')

// this is how we'd normally do it
// let rectangle = {
//     color: 'red',
//     size: 12,
//     getArea: function() {
//         return 0
//     }
// }

// let otherRectangle = {
//     color: 'green',
//     size: 12,
//     getArea: function() {
//         return 0
//     }
// }

// let catGarden = []
// const MIN_AGE = 1
// const MAX_AGE = 20
// for (let i = 0; i < 10; i++) {
//     let randomAge = Math.floor(Math.random() * MAX_AGE) + 1
//     let cat = new Cat(randomAge)
//     catGarden.push(cat)
// }

// class Animal {

//     constructor(age, color, weight) {
//         this.age = age
//         this.color = color
//         this.weight = weight
//     }

//     talk() {
//         return 'The animal makes some sounds...'
//     }
// }

// class AnimalWithBreed extends Animal {

//     constructor(age, color, weight, breed) {
//         super(age, color, weight)
//         this.breed = breed
//     }
// }

// class Dog extends AnimalWithBreed {

//     constructor(age, color, weight, breed) {
//         super(age, color, weight, breed)
//     }

//     talk() {
//         return 'Woof!'
//     }

//     rideOnHippo(hippo) {
//         let hippoSound = hippo.talk()
//         if (!hippo.isPeaceful) {
//             hippo.isPeaceful = true
//         }
//         console.log('Hippo makes sound ' + hippoSound)
//         console.log('The dog makes sound ' + this.talk())
//         console.log('Everyone is happy everafter!')
//     }
// }

// class Hippo extends Animal {

//     constructor(age, color, weight, isPeaceful) {
//         super(age, color, weight)
//         this.isPeaceful = isPeaceful
//     }

//     talk() {
//         return 'GROWWOLL!'
//     }
// }

// class Cat extends AnimalWithBreed {

//     constructor(age, color, weight, breed, hasClaws) {
//         super(age, color, weight, breed)
//         this.hasClaws = hasClaws
//     }

//     talk() {
//         return 'Meow'
//     }
// }

// class Direction {
//     constructor(dir) {
//         this.dir = dir
//     }
// }

// class CareGiver {

//     constructor(name, age, yearsOfExperience) {
//         this.name = name
//         this.age = age
//         this.yearsOfExperience = yearsOfExperience
//     }

//     introduce() {
//         return `Hello! My name is ${this.name}, and I am ${this.age} years old.\n
//                 I have ${this.yearsOfExperience} years of experience.`
//     }
// }

// class careGiverInfo {

//     constructor(personName, personAge, personYearsOfExperience) {
//         this.personName = personName
//         this.personAge = personAge
//         this.personYearsOfExperience = personYearsOfExperience
//     }
// }

// class NationalPark {

//     constructor(name) {

//         this.name = name

//         this.southHabitat = []
//         this.westHabitat  = []
//         this.northHabitat = []
//         this.eastHabitat  = []
//         this.unassignedAnimals = []

//         this.availableCaregivers = []
//         this.busyCaregivers = []
//     }

//     assignCaregiverToPark(careGiverInfo) {
//         let caregiver = new CareGiver(careGiverInfo.personName, careGiverInfo.personAge, careGiverInfo.personYearsOfExperience)
//         this.availableCaregivers.push(caregiver)
//     }

//     putAnimalToHabitat(dirObject, animal) {
//         let dir = dirObject.dir.toUpperCase()
//         let caregiver = this.availableCaregivers.pop()
//         this.busyCaregivers.push(caregiver)

//         if (!caregiver) {
//             console.log('No available caregivers found.')
//             return 
//         }

//         switch(dir) {
//             case 'NORTH':
//                 this.northHabitat.push(animal)
//                 break
//             case 'SOUTH':
//                 this.southHabitat.push(animal)
//                 break 
//             case 'WEST':
//                 this.westHabitat.push(animal)
//                 break
//             case 'EAST':
//                 this.eastHabitat.push(animal)
//                 break
//             default: 
//                 this.unassignedAnimals.push(animal)
//         }
//         console.log(`Animal of color ${animal} is put into the ${dir} habitat.`)
//     }

// }


// let np = new NationalPark()

// let caregiverInfoOne = new caregiverInfo('Albert', 70, 33)
// let caregiverInfoTwo = new caregiverInfo('Hoffman', 60, 55)
// np.assignCaregiverToPark(caregiverInfoOne)
// np.assignCaregiverToPark(caregiverInfoTwo)



// let dog   = new Dog(10, 'brown', 20, 'Bloodhound')
// let cat   = new Cat(5, 'white', 10, 'Siamese', true)
// let hippo = new Hippo(40, 'gray', 15, true)
// np.putAnimalToHabitat(new Direction('north'), dog)
// np.putAnimalToHabitat(new Direction('north'), cat)
// np.putAnimalToHabitat(new Direction('south'), hippo)



// box with X
// ctx.beginPath()
// ctx.moveTo(0, 0)
// ctx.lineTo(800, 600)
// ctx.moveTo(0, 600)
// ctx.lineTo(800, 0)
// ctx.stroke()

// spiral

let canvas = document.getElementById('myCanvas')
let ctx    = canvas.getContext('2d')

const CENTER_POINT = {
    X: canvas.width  / 2,
    Y: canvas.height / 2
}

class Circle {

    constructor(middleX, middleY, radius) {
        this.middleX = middleX
        this.middleY = middleY
        this.radius  = radius
    }

    setColor(color) {
        this.color = color
    }

    draw() {
        ctx.beginPath()
        if (this.color) {
            ctx.fillStyle = '#ff0000'
        }
        ctx.arc(this.middleX, this.middleY, this.radius, 0, 2 * Math.PI, false)
        // ctx.fill()
        ctx.stroke()
    }
}


for (let i = 0; i < 100; i++) {
    let randomX = Math.floor(Math.random() * canvas.width)
    let randomY = Math.floor(Math.random() * canvas.height)
    let randomRadius = Math.floor(Math.random() * 100)
    let circle = new Circle(randomX, randomY, randomRadius)
    circle.draw()
}



// let step = 20 
// for (let i = 0; i < 500; i++) {
//     let firstStep = step
//     ctx.moveTo(currentPos.X, currentPos.Y)
//     ctx.lineTo(currentPos.X + 25, currentPos.Y - step)
//     ctx.lineTo(currentPos.X + step, currentPos.Y)
//     step += 10
//     ctx.lineTo(currentPos.X + step, currentPos.Y + step)
//     ctx.lineTo(currentPos.X + firstStep - step, currentPos.Y + step)
//     step += 10
//     currentPos = {X: currentPos.X + firstStep - step, Y: currentPos.Y + step}
//     ctx.stroke()
// }


// Inheritance
class MusicInstrument {
    
    constructor(size, color) {
        this.size = size 
        this.color = color 
    }

    play() {
        console.log('The instrument plays the sounds of grand mystery...')
    }
}

class Violin extends MusicInstrument{
    constructor(size, color, type) {
        super(size, color) 
        this.type = type 
    }
    // Method overriding --> play function specific to violin
    play() {
        console.log(`${this.type} violin is playing beautiful music.`)
    }
}

class Piano extends MusicInstrument {
    constructor(size, color, type) {
        super(size, color) 
        this.type  = type 
    }
}

class Orchestra {
    
    constructor(name, musicians) {
        this.name = name 
        this.musicians = musicians
    }

    addMusician(musician) {
        this.musicians.push(musician)
    }

    playTogether() {
        for (let musician of this.musicians) {
            musician.perform()
        }
    }
}

class Musician {

    constructor(name, instrument) {
        this.name       = name
        this.instrument = instrument
    }

    perform() {
        this.instrument.play()
        console.log(`${this.name} has wonderfully performed to a big audience.`)
    }
}

class MusicalEnterprise {

    constructor(orchestras) {
        this.orchestras = orchestras
        this.salaries = new Map()

        this.wage = 1000
    }

    makePerform(nameOfOrchestra) {
        let orchestra = this.orchestras.get(nameOfOrchestra)
        orchestra.playTogether()

        let salary = this.salaries.get(orchestra.name)
        if (salary) {
            this.salaries.set(orechstra.name, salary + this.wage)
        } else {
            this.salaries.set(orechstra.name, this.wage)
        }
        console.log(`Wage of ${this.wage} was paid to the orchestra ${orechstra.name}`)
        console.log(`The totaly salary for the orchestra ${orechstra.name} is ${this.salaries.get(orechstra.name)}`)
    }
}


let firstPiano = new Piano('small', 'white', 'electronic')
let firstViolin = new Violin('medium', 'brown', 'wood')

let musicianOne = new Musician('Jack', firstPiano)
let secondMusician = new Musician('Greta', firstViolin)

let musicians = [musicianOne, secondMusician]
let orchestra = new Orchestra('White Eagle Sounds', musicians)
orchestra.addMusician(new Musician(new Violin('medium', 'green', 'electronic'), 'Paul'))

let orchestras = new Map()
orchestras.set(orechstra.name, orchestra)
let musicalEnterprise = new MusicalEnterprise(orchestras)
musicalEnterprise.makePerform('White Eagle Sounds')


// let myMap = new Map()

// myMap.set('john.wick@gmail.com', 'John Wick')
// myMap.set('ulfrica.zerender@andex.ru', 'Ulfrica Zerender')

// let johnWick = myMap.get['john.wick@gmail.com']
// console.log(johnWick)



// class Person {

//     constructor(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }
// }

// let newMap = new Map()
// newMap.set(123, new Person('Geralt', 'Rivyan', 40))

// let person = newMap.get(123)
// console.log(person)