import { useState } from "react";
import { Dependencies } from "../infra/Dependencies";

export type Book = {
  isbn: string;
  title: string;
  author: string;
  genre: string;
};

type State = {
  books: Book[];
  loading:boolean;
  input: string | undefined;
};

export type Reducer<T> = (payload: T) => (state: State) => State;

export type Dispatch = (reducer: ReturnType<Reducer<unknown>>) => void;

export type AsyncReducer<T> = (
  payload: T
) => (
  state: State,
  dependencies: Dependencies
) => { updatedState: State; effect?: (dispatch: Dispatch) => Promise<void> };

type AsyncDispatch = (
  reducer: ReturnType<AsyncReducer<unknown>>
) => Promise<void>;

export function useTestStore(initialState: State, dependencies: Dependencies) : [State,AsyncDispatch] {
  const [store, setState] = useState<State>(initialState);

  const dispatch: AsyncDispatch = async (reducer) => {
    const { updatedState, effect } = reducer(store, dependencies);
    setState(updatedState);
    if (effect) {
      await effect(setState);
    }
  };

  return [store, dispatch];
}


