import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import carBreakdown from "../markerIcon/vehicleBreakdown.png"

const Map = ({position, victims, onMarkerSelect}) => {
    const mapRef = useRef(null);
    const latitude = position.latitude;
    const longitude = position.longitude;

    const customIcon = L.icon({
        iconUrl: carBreakdown, // URL to your custom marker image
        iconSize: [80, 80], // Size of the icon [width, height]
        iconAnchor: [40, 40], // Anchor point of the icon [horizontal, vertical]
    });

    return ( 
      // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[latitude, longitude]} zoom={20} ref={mapRef} style={{height: "50vh", width: "50vw"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[latitude, longitude]}
                icon={customIcon}>
                    <Popup>
                        <div>
                            <h4>You are here!</h4>
                        </div>
                    </Popup>
            </Marker>

          {/* Additional map layers or components can be added here */}
            {victims ? victims.map(v =>
                <Marker
                    data = {v}
                    position = {[v.latitude, v.longitude]}
                    eventHandlers={{
                        click: () => onMarkerSelect(v)
                    }}
                    icon={customIcon}>
                        <Popup>
                            {v.latitude}
                            {v.longitude}
                        </Popup>
                </Marker>)
                : null}
        </MapContainer>
    );
};
  
export default Map;
