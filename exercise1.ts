// Here we will introduce basic types
// And lint

// var i = 2;
// let n = 2;
// const m = 2;

// interface SomeData {
//     a: string,
//     b: number
// }

// const data: SomeData = {
//     a: 'two',
//     b: 1
// }

// const otherData: SomeData = {
//     b: 2,
//     c: 4
// }

// TODO: Create here a class with public elements

// Composition. Unions
type booleans = true | false;

// Functions

let addStuff: (x: number, y: number) => number = (x: number, y: number): number => {
    return x + y;
}

//vs

let addStuffInferred = (x: number, y: number): number => {
    return x + y
}