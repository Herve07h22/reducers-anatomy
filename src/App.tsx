import { useTestStore } from "./reducers";
import { onInputChanged } from "./reducers/onInputChanged";
import { TestDependencies } from "./infra/TestDependencies";

function App() {
  const [state, dispatch] = useTestStore(
    { input: undefined, books: [], loading:false },
    new TestDependencies()
  );
  console.log('Rendering with state ', state)

  return (
    <>
      <h1>Bibliothèque</h1>
      <div>
        <input
          type="text"
          value={state.input || ""}
          onChange={(e) => dispatch(onInputChanged(e.target.value))}
          placeholder="Entrez un titre de livre"
        />
        {state.loading ? "Loading..." : null}

        {state.books.map((book) => (
          <p key={book.isbn}>
            {book.title} by {book.author} ({book.genre})
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
