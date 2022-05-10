import { BookList } from "./components/BookList";
import { Navbar } from "./components/Navbar";
import { ThemeToggle } from "./components/ThemeToggle";


function App() {
  return (
    <div className="App">
        <Navbar  />
        <BookList />
        <ThemeToggle />
    </div>
  );
}

export default App;
