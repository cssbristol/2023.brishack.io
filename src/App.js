import { Header } from './components/Header';
import './scss/App.scss';
import { About } from './sections/About';
import { FAQ } from './sections/FAQ';
import { Sponsors } from './sections/Sponsors';
import { Rules } from './sections/Rules';
import { Timings } from './sections/Timings';
import { Prizes } from './sections/Prizes';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <About />
        <Prizes />
        <FAQ />
        <Rules />
        <Sponsors />
        <Timings />
      </main>
      <footer style={{ textAlign: "center", padding: "2em", marginTop: "4em", borderTop: "1px solid #909090" }}>
        CSS and BEEES are supported by the University of Bristol Student's Union.
      </footer>
    </div>
  );
}

export default App;
