---
title: 🟦 beginner typescript progression
slug: beginner-typescript-progression
date: "2022-02-16"
topic:
    name: coding
    icon: 💻
---

_This post is part of a series. The intermediate and advanced progressions will be published at a later date._

---

When I learned [TypeScript][typescript], I turned it on in a project and was confronted with tons of errors. It was a frustrating experience with a new technology. To alleviate the same frustration for you, this post will walk you through the first steps with TypeScript.

## 1️⃣ basic types

There are a few foundational types that everything else is built on. The are `string`, `number`, and `boolean`. Below is an example of how to type variables using these [basic types][basic-types].

```typescript
const make: string = "Chevrolet"
const model: string = "Corvette"
const year: number = 2022
const new: boolean = true
```

When it comes to these primitive types, you do not have to explicitly declare them. The TypeScript compiler can _infer_ them

```typescript
// inferred primitive types
const make = "Chevrolet"
const model = "Corvette"
const year = 2022
const new = true
```

## 2️⃣ declaring types

Beyond primitive types, you can [declare your own types][type-alias] using the `type` keyword. This works just like assigning variables in JavaScript, but the right hand side of the expression must be a TypeScript type.

In this simple case, we are giving the name `Text` to a type, then using it to define the type of the `message` variable. Declaring types can help us think about complex values in simpler terms.

```typescript
type Text = string
const message: Text = "A secret message."
```

## 3️⃣ union types

Sometimes it can be handy to limit the type to a few specific options, that's where [union types][union-type] come in. In this example, we've declared a `Transmission` union type that can be only one of two `string` values. We can then use the custom `Transmission` type to describe the type of the `transmission` variable.

```typescript
type Transmission = "automatic" | "manual"
const transmission: Transmission = "manual"
```

Here is another example using a `number` union type. Union types can also be applied to more complex TypeScript objects, but we'll cover that in another post.

```typescript
type Doors = 2 | 4
const doors: Doors = 2
```

## 4️⃣ array types

```typescript
const models: string[] = ["Tahoe", "Corvette", "Malibu"]
const prices: number[] = [70000, 80000, 40000]
const inStock: boolean[] = [true, false, true]
```

## 5️⃣ object types

```typescript
type Vehicle = {
    make: string
    model: string
    year: number
    new: boolean
    doors: Doors
    transmission: Transmission
}

const vehicle: Vehicle = {
    make: "Chevrolet",
    model: "Corvette",
    year: 2022,
    new: true,
    doors: 4,
    transmission: "manual",
}
```

```typescript
const vehicle: Vehicle[] = [
    {
        make: "Chevrolet",
        model: "Corvette",
        year: 2022,
        new: true,
        doors: 4,
        transmission: "manual",
    },
]
```

## 6️⃣ intersection types

```typescript
type Truck = Vehicle & {
    towingCapacity: number
}

const truck: Truck = {
    make: "Chevrolet",
    model: "Silverado",
    year: 2022,
    new: true,
    doors: 4,
    transmission: "automatic",
    towingCapacity: 7000,
}
```

## 7️⃣ typing functions

```typescript
const greet = (name: string): string => {
    const greeting = `Hello, ${name}!`
    return greeting
}
```

```typescript
const Greet = (name: string): string

const greet: Greet = name => {
    const greeting = `Hello, ${name}!`
    return greeting
}
```

[typescript]: https://typescriptlang.org
[basic-types]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
[type-alias]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
[union-type]: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
