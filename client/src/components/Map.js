import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import Boredom from "../markerIcon/AsianMan.png"
import BadWeather from "../markerIcon/BadWeather.png"
import Sleep from "../markerIcon/eepy.png"
import Hero from "../markerIcon/Hero.png"
import LimitedFood from "../markerIcon/LimitedFood.png"
import OutOfFuel from "../markerIcon/OutOfFuel.png"
import carBreakdown from "../markerIcon/vehicleBreakdown.png"
import Victim from "../markerIcon/Victim.png"

const Map = ({position, icon, victims, onMarkerSelect}) => {
    const mapRef = useRef(null);
    const latitude = position.latitude;
    const longitude = position.longitude;
    const imgArr = [
        L.icon({ iconUrl: Boredom, iconSize: [32, 32] }),
        L.icon({ iconUrl: BadWeather, iconSize: [32, 32] }),
        L.icon({ iconUrl: Sleep, iconSize: [32, 32] }),
        L.icon({ iconUrl: Hero, iconSize: [32, 32] }),
        L.icon({ iconUrl: LimitedFood, iconSize: [32, 32] }),
        L.icon({ iconUrl: OutOfFuel, iconSize: [32, 32] }),
        L.icon({ iconUrl: carBreakdown, iconSize: [32, 32] }),
        L.icon({ iconUrl: Victim, iconSize: [32, 32] }),
    ];


    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={20} ref={mapRef} style={{height: "50vh", width: "50vw"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[latitude, longitude]}
                icon={imgArr[icon || 0]}>
                    <Popup>
                        <div>
                            <h4>You are here!</h4>
                        </div>
                    </Popup>
            </Marker>

          {/* Additional map layers or components can be added here */}
            {victims ? victims.map(v =>{
                return <Marker
                    data = {v}
                    position = {[v.latitude, v.longitude]}
                    eventHandlers={{
                        click: () => onMarkerSelect(v)
                    }}
                    icon={v.category ? imgArr[0] : null}>
                        <Popup>
                            {v.name} - {v.category}
                        </Popup>
                </Marker>})
                : null}
        </MapContainer>
    );
};
  
export default Map;
