import { Header } from './components/Header';
import './scss/App.scss';
import { About } from './sections/About';
import { FAQ } from './sections/FAQ';
import { Rules } from './sections/Rules';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <About />
        <FAQ />
        <Rules />
      </main>
    </div>
  );
}

export default App;
