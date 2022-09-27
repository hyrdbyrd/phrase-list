import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PhraseType = string;

export interface CounterData {
    phrase: PhraseType;
    count: number;
}

export type Phrases = Record<PhraseType, CounterData>;

export interface CounterState {
    list: string[];
    phrases: Phrases;
    inversed?: boolean;
}

const initialState: CounterState = {
    list: [],
    phrases: {},
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        toggleInversed: (state) => {
            state.inversed = !state.inversed;
        },
        addCounter: (state, action: PayloadAction<PhraseType>) => {
            const phrase = action.payload;
            if (!phrase || state.phrases[phrase]) return;

            state.phrases[phrase] = { count: 0, phrase };
            state.list.push(phrase);
        },
        deleteCounter: (state, action: PayloadAction<PhraseType>) => {
            const phrase = action.payload;
            state.list.splice(state.list.indexOf(phrase), 1);
            delete state.phrases[phrase];
        },
        incPhrase: (state, action: PayloadAction<PhraseType>) => {
            state.phrases[action.payload].count++;
        },
        decPhrase: (state, action: PayloadAction<PhraseType>) => {
            state.phrases[action.payload].count--;
        },
        changePhrase: (
            state,
            action: PayloadAction<{
                oldPhrase: PhraseType;
                newPhrase: PhraseType;
            }>
        ) => {
            const { oldPhrase, newPhrase } = action.payload;

            if (state.phrases[newPhrase]) return;

            const phrase = { ...state.phrases[oldPhrase] };

            delete state.phrases[oldPhrase];

            phrase.phrase = newPhrase;
            state.list[state.list.indexOf(oldPhrase)] = newPhrase;
            state.phrases[newPhrase] = phrase;
        },
        setCountPhrase: (
            state,
            action: PayloadAction<{
                phrase: PhraseType;
                count: number | string;
            }>
        ) => {
            const { phrase, count } = action.payload;
            state.phrases[phrase].count = Number(count);
        },
    },
});

export const counterReducer = counterSlice.reducer;

export const {
    addCounter,
    incPhrase,
    decPhrase,
    changePhrase,
    deleteCounter,
    toggleInversed,
    setCountPhrase,
} = counterSlice.actions;
