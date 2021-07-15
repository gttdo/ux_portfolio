import './css/style.css';
import Navbar from './components/sitewide/navigation/Navbar';
import Spotlight from './components/sections/spotlight/Spotlight';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Spotlight />
    </div>
  );
}

export default App;
