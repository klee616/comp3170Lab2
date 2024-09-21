import { artists } from './best-selling-music-artists';
import HomeApp  from './components/HomeApp';

function App() {

  return (
    <div className="app">
      <HomeApp title="Best-selling music artists" artistlist={artists} />
    </div>
  );
}

export default App;
