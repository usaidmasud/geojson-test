import MapPosition from './components/MapPosition'
import MyMap from './components/MyMap'
import "leaflet/dist/leaflet.css";
function App() {
  return (
    <div className="w-full min-h-screen">
      <h1 className="">MAP GEO JSON</h1>
      <div className="w-full min-h-screen">
        <MapPosition />
      </div>
    </div>

  )
}

export default App
