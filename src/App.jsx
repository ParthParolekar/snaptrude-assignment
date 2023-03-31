import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import Map from "./components/Map";
import Cuboid from "./components/Cuboid";

function App() {
  const [lng, setLng] = useState(72.91);
  const [lat, setLat] = useState(19.08);
  const [zoom, setZoom] = useState(11);
  const width = 500;
  const height = 300;

  mapboxgl.accessToken =
    "pk.eyJ1IjoicGFydGhwYXJvbGVrYXIiLCJhIjoiY2xmc2NjOGF1MDR2dzNobzQzOWMzNW5zaSJ9.J48HRSlIdHIHEPTAFxAaeA";

  return (
    <div className="App w-full">
      <Routes>
        <Route
          path="/"
          element={
            <Map
              lng={lng}
              setLng={setLng}
              lat={lat}
              setLat={setLat}
              zoom={zoom}
              setZoom={setZoom}
              width={width}
              height={height}
            />
          }
        />
        <Route
          path="/cuboid"
          element={
            <Cuboid
              lng={lng}
              setLng={setLng}
              lat={lat}
              setLat={setLat}
              zoom={zoom}
              setZoom={setZoom}
              width={width}
              height={height}
              token={mapboxgl.accessToken}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
