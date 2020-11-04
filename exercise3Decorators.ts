type APIConstructor<T> = new(...args: any[])=> T;

interface Payload {
    data: string;
    id: string;
}

function serializable< T extends APIConstructor<{
    getValue(): Payload
}>
>(constructor: T) {
    return class extends constructor {
        serialize() {
            return this.getValue().toString()
        }
    }
}

// tslint:disable-next-line: max-classes-per-file
@serializable
class APIPayload {
    getValue(): Payload {
        return {
            data: 'one',
            id: '2'
        }
    }
}

let payload = new APIPayload();
let serialized = payload.serialize();
console.log(serialized);
