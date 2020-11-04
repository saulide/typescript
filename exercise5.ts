// Type vs Interface

type TState = {
    uiElement: string;
    id: string;
}

interface IState {
    uiElement: string;
    id: string;
}

// index signature
type TStateExt = { [key: string] : string}
interface IStateExt {
    [key: string] : string
}

// TODO: example for index signature

const stateTest: TStateExt = {
    uiElement: '22',
    id: '22',
    // number?
}


// Function Types

type TStateReducer = (x: string)=> string;
interface IStateReducer {
    (x: string): string;
}

// Extending

type TBox = {
    name: string;
}

type TBoxExt = TBox & {
    placeInShelf: number
}

// Extending Union types

type TUnion = TBox | TState;
type TRayTraycing = TUnion & {
    source: string;
}

// Declaration merging

interface IBook {
    name: string;
}

interface IBook {
    pages: number;
}

const book: IBook = {
    // Todo implement
}


