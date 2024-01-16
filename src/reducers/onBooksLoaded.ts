import { Reducer, Book } from ".";


export const onBooksLoaded: Reducer<Book[]> = (books) => (state) => ({
    ...state,
    books,
    loading:false
});
