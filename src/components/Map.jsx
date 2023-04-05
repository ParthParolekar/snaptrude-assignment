import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SavedCard from "./SavedCard";
import Cuboid from "./Cuboid";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
mapboxgl.accessToken =
  "pk.eyJ1IjoicGFydGhwYXJvbGVrYXIiLCJhIjoiY2xmc2NjOGF1MDR2dzNobzQzOWMzNW5zaSJ9.J48HRSlIdHIHEPTAFxAaeA";

const Map = ({
  lng,
  setLng,
  lat,
  setLat,
  zoom,
  setZoom,
  userData,
  setUserData,
  imgLink,
  setImgLink,
  token,
  width,
  height,
}) => {
  const mapContainer = useRef();

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

      // map.on("move", () => {});

      map.on("moveend", () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
        setImgLink(
          `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${map
            .getCenter()
            .lng.toFixed(4)},${map.getCenter().lat.toFixed(4)},${map
            .getZoom()
            .toFixed(2)},0/${width}x${height}?access_token=${token}`
        );
      });
    }

    return () => map.remove();
  }, []);

  return (
    <div className="mx-auto w-full flex flex-col">
      <div className="flex">
        <Cuboid
          imgLink={imgLink}
          setImgLink={setImgLink}
          userData={userData}
          setUserData={setUserData}
        />
        <div
          id="map"
          ref={mapContainer}
          className="rounded-md w-[500px] h-[300px] mx-auto"
        ></div>
      </div>

      <h3 className="mt-10 text-2xl font-bold">Saved</h3>
      <div className="flex flex-wrap justify-center items-center gap-2">
        {userData.length < 1 && (
          <h3 className="text-xl font-semibold">No Maps Saved</h3>
        )}
        {userData.map((data) => (
          <SavedCard cuboidImg={data} setImgLink={setImgLink} key={data} />
        ))}
      </div>
    </div>
  );
};

export default Map;
