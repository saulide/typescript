// Task: Create a subset of State

interface State {
    userId: string;
    title: string;
    filesLoaded: string;
    content: string;
}

interface HeaderState {
    userId: string;
    title: string;
}

// Picking/Subsetting

type THeaderState = {
    userId: State['userId'];
    title: State['title'];
}

type THeaderState2 = {
    [k in 'userId' | 'title']: State[k]
}



type THeaderStatePick = Pick<State, 'userId' | 'title'>