import './App.css';
import SortingVisualizer from './sortingVisualizer/sortingVisualizer';

function App() {
  return (
    <body>
    <div className="App">
      <h1>Sorting Visualizer</h1> 
      <div className = "sorting">
        <SortingVisualizer></SortingVisualizer>
      </div>
        <h1 className="by-title">By: Husan Sattarov</h1>
    </div>
    </body>
  );
}

export default App;