const INIT_VARS = {
    source: 'localhost',
    protocol: 'http',
    isTrusted: false
}

// Should we write interface?

interface Options {
    source: string;
    protocol: string;
    isTrusted: false
}

type InitOptions = typeof INIT_VARS;

// That about return values?

const userVal = (id: string) => {
    const id2 = id + 'la';
    const id3 = id + 'la-2';
    return {
        id,
        id2,
        id3
    }
}

type UserValues = ReturnType<typeof userVal>