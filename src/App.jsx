import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Nav />
      </Main>
    </>
  );
}

export default App;
