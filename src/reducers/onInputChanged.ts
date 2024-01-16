import { AsyncReducer, Dispatch } from ".";
import { onBooksLoaded } from "./onBooksLoaded";


export const onInputChanged: AsyncReducer<string> = (input) => (state, dependencies) => {
    const updatedState = { ...state, input, loading:true };
    const effect = async (dispatch: Dispatch) => {
        const books = await dependencies.fetchBooks(input);
        dispatch(onBooksLoaded(books));
    };
    return {
        updatedState,
        effect,
    };
};
