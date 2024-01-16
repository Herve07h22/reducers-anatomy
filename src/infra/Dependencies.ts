import { Book } from "../reducers";


export type Dependencies = {
    fetchBooks: (query: string) => Promise<Book[]>;
};
