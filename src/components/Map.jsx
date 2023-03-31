import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
mapboxgl.accessToken =
  "pk.eyJ1IjoicGFydGhwYXJvbGVrYXIiLCJhIjoiY2xmc2NjOGF1MDR2dzNobzQzOWMzNW5zaSJ9.J48HRSlIdHIHEPTAFxAaeA";

const Map = ({ lng, setLng, lat, setLat, zoom, setZoom, width, height }) => {
  const mapContainer = useRef();
  //   const [lng, setLng] = useState(72.91);
  //   const [lat, setLat] = useState(19.08);
  //   const [zoom, setZoom] = useState(11);
  //   const width = 500;
  //   const height = 300;

  useEffect(() => {
    let map;
    if (mapContainer.current) {
      map = new mapboxgl.Map({
        container: mapContainer.current, // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        // center: [72.91, 19.08], // starting position [lng, lat]
        center: [lng, lat], // starting position [lng, lat]
        // zoom: 11, // starting zoom
        zoom, // starting zoom
      });

      map.on("move", () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });
    }

    return () => map.remove();
  }, []);

  //   const [imageUrl, setImageUrl] = useState(null);
  //   useEffect(() => {
  //     setImageUrl(
  //       `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lng},${lat},${zoom},0/${width}x${height}?access_token=${mapboxgl.accessToken}`
  //     );
  //   }, [lat, lng, width, height, zoom]);

  return (
    <div className="mx-auto w-full flex flex-col">
      <div
        id="map"
        ref={mapContainer}
        className="rounded-md w-[500px] h-[300px] mx-auto"
      ></div>
      <Link to={"/cuboid"}>
        <button className="mt-20 border border-black rounded-md py-2 px-4 mx-auto hover:bg-black hover:text-white transition-all">
          Show Cube
        </button>
      </Link>
    </div>
  );
};

export default Map;
