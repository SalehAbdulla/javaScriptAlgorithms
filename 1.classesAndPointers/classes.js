class Cookie {
    constructor(color) {
        this.color = color
    }

    getColor(){
        return this.color
    }

    setColor(color) {
        this.color = color
    }

}

let cookieOne = new Cookie('green')
let cookieTwo = new Cookie('blue')

console.log(cookieOne.getColor())
cookieOne.setColor("yellow")
console.log(cookieOne.getColor())
console.log(cookieTwo.getColor())



