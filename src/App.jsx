import { useEffect, useState } from "react";
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
  const [userData, setUserData] = useState([
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/72.91,19.08,11,0/500x300?access_token=pk.eyJ1IjoicGFydGhwYXJvbGVrYXIiLCJhIjoiY2xmc2NjOGF1MDR2dzNobzQzOWMzNW5zaSJ9.J48HRSlIdHIHEPTAFxAaeA",
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/2.16,41.38,12,0/500x300?access_token=pk.eyJ1IjoicGFydGhwYXJvbGVrYXIiLCJhIjoiY2xmc2NjOGF1MDR2dzNobzQzOWMzNW5zaSJ9.J48HRSlIdHIHEPTAFxAaeA",
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.41,37.77,12,0/500x300?access_token=pk.eyJ1IjoicGFydGhwYXJvbGVrYXIiLCJhIjoiY2xmc2NjOGF1MDR2dzNobzQzOWMzNW5zaSJ9.J48HRSlIdHIHEPTAFxAaeA",
    "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-43.19,-22.90,12,0/500x300?access_token=pk.eyJ1IjoicGFydGhwYXJvbGVrYXIiLCJhIjoiY2xmc2NjOGF1MDR2dzNobzQzOWMzNW5zaSJ9.J48HRSlIdHIHEPTAFxAaeA",
  ]);

  mapboxgl.accessToken =
    "pk.eyJ1IjoicGFydGhwYXJvbGVrYXIiLCJhIjoiY2xmc2NjOGF1MDR2dzNobzQzOWMzNW5zaSJ9.J48HRSlIdHIHEPTAFxAaeA";

  const [imgLink, setImgLink] = useState(
    `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lng},${lat},${zoom},0/${width}x${height}?access_token=${mapboxgl.accessToken}`
  );

  useEffect(() => {
    setImgLink(
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lng},${lat},${zoom},0/${width}x${height}?access_token=${mapboxgl.accessToken}`
    );
  }, [lat, lng, width, height, zoom]);

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
              userData={userData}
              setUserData={setUserData}
              imgLink={imgLink}
              setImgLink={setImgLink}
              token={mapboxgl.accessToken}
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
              imgLink={imgLink}
              setImgLink={setImgLink}
              userData={userData}
              setUserData={setUserData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
