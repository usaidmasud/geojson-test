import { MapContainer, GeoJSON, TileLayer, CircleMarker, Popup, Circle, Polyline, Polygon, Rectangle } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import testData from '../utils/constants/test.geojson.json'
// const center = [51.505, -0.09]
import sungaiMap from '../utils/constants/Sungai.geojson.json'
import hwMap from '../utils/constants/HW.geojson.json'
import dasMap from '../utils/constants/DAS.geojson.json'

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
]

const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
]

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

const fillBlueOptions = { fillColor: 'blue' }
const blackOptions = { color: 'black' }
const limeOptions = { color: 'lime' }
const purpleOptions = { color: 'purple' }
const redOptions = { color: 'red' }
// -8.590195013454492, 116.2484432346774
function MyMap() {
  // const center = [51.505, -0.09]
  const center =  [ 405724.67670922994148, 9049423.976975539699197]
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ]

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ]

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ]

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]

  const fillBlueOptions = { fillColor: 'blue' }
  const blackOptions = { color: 'black' }
  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }
  const redOptions = { color: 'red' }

  return (
    <MapContainer center={center as any} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={center as any} pathOptions={fillBlueOptions} radius={200} />
      <CircleMarker center={[656.93, 0.6569]} pathOptions={redOptions} radius={20}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <Polyline pathOptions={limeOptions} positions={polyline as any} />
      {/* <Polyline pathOptions={limeOptions} positions={sungaiMap.features[0].geometry.coordinates as any} /> */}
      {/* <Polyline pathOptions={limeOptions} positions={multiPolyline as any} /> */}
      <Polygon pathOptions={purpleOptions} positions={dasMap.features[0].geometry.coordinates as any} />
      {/* <Polygon pathOptions={purpleOptions} positions={polygon as any} />
      <Polygon pathOptions={purpleOptions} positions={multiPolygon as any} />
      <Rectangle bounds={rectangle as any} pathOptions={blackOptions} /> */}
    </MapContainer>
  );
}

export default MyMap
