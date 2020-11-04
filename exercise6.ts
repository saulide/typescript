// Subset of state

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

// Move mouse over THeaderState2
type THeaderState2 = {
    [k in 'userId' | 'title']: State[k]
}

type THeaderStatePick = Pick<State, 'userId' | 'title'>