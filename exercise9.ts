const browserWindow = {
    title: 'GitPod',
    browser: 'Chrome',
    user: "Friedrich"
}

// Todo: Create a index signature

type Browser = {[property: string]: string}; // To Broad?

const browserWindow2 : Browser = {
    title: 'GitPod',
    browser: 'Chrome',
    user: "Friedrich"
}

// Parsing CSV

interface Row {
    a: number,
    b?: number,
    c?: number
}

type TRow =
| {a: number}
| {a: number; b: number}
| {a: number; b: number, c: number}

// Is to broad, narrowing
type TRow2 = Record<'a'|'b'|'c', number>
// mapped type

type Trows = {[k in 'a'| 'b'| 'c']: number};
type TRowsButTyped = {[k in 'a'| 'b'| 'c']: k extends 'b' ? string : number}

