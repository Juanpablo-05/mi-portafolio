// src/App.tsx
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Presentation from "./components/Presentation";

function App() {
  return (
    <>
      <div id="top-sentinel" style={{ height: "1px" }}></div>

      <Header />
      <main>
        <Presentation />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
