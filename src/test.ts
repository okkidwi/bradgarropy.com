const name = "Brad"
const age = 34
const cool = true

type Person = {
    name: string
    year: number
    cool: boolean
}

const me: Person = {
    name: "Brad",
    year: 1987,
    cool: true,
}

type Transmission = "automatic" | "manual"
type Doors = 2 | 4

type Vehicle = {
    make: string
    model: string
    year: number
    new: boolean
    doors: Doors
    transmission: Transmission
}

type Truck = Vehicle & {
    towingCapacity: number
}

type Direction = "north" | "south" | "east" | "west"
const direction: Direction = "north"

const sum = (a: number, b: number): number => {
    const sum = a + b
    return sum
}

type Greet = (name: string) => string

const greet: Greet = name => {
    const greeting = `Hello, ${name}!`
    return greeting
}

export {age, cool, direction, greet, me, name, sum}
