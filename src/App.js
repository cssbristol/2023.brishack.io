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
      <iframe className="recap-video" width="560" height="315" src="https://www.youtube.com/embed/yMZZF7GVJqw?si=9x-K1Gavr95iWn-C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='notice'>
        Below is the original website as it was before the event. The event is now over, and you can watch the recap video above! Thank you to everyone who participated, and to our sponsors who made this possible!
      </div>
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
