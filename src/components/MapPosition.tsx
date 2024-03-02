import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import dasMap from '../utils/constants/DAS+Geo.geojson.json'
import hwMap from '../utils/constants/HW+Geo.geojson.json'
import sungaiMap from '../utils/constants/Sungai.geojson.json'

import tileLayer from '../utils/tileLayer'
const center = [-8.606216880645102, 116.12950000123683]

function MapPosition() {

  const onEachFeature = (feature:any, layer:any) => {
    if (feature.properties) {
      let popupContent = `
        <table class="table-auto text-xs border-collapse border border-blue-500">
          <thead>
            <tr>
              <th class="px-3 py-1 bg-blue-200 border border-blue-500">Property</th>
              <th class="px-3 py-1 bg-blue-200 border border-blue-500">Value</th>
            </tr>
          </thead>
          <tbody>`;
      
      for (const [key, value] of Object.entries(feature.properties)) {
        popupContent += `
            <tr>
              <td class="px-3 py-1 border border-blue-500">${key}</td>
              <td class="px-3 py-1 border border-blue-500">${value}</td>
            </tr>`;
      }
      
      popupContent += `
          </tbody>
        </table>`;
      
      layer.bindPopup(popupContent);
    }
  };
  return (
    <MapContainer className='w-full min-h-screen' center={center as any} zoom={13} scrollWheelZoom={false}>
      <TileLayer {...tileLayer} />
      <GeoJSON data={dasMap as any}  onEachFeature={onEachFeature}/>
      <GeoJSON data={hwMap as any} interactive  onEachFeature={onEachFeature}/>
      <GeoJSON data={sungaiMap as any}  onEachFeature={onEachFeature}/>
    </MapContainer>
  )
}

export default MapPosition
