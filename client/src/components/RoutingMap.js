import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

// import Boredom from "../markerIcon/AsianMan.png"
// import BadWeather from "../markerIcon/BadWeather.png"
// import Sleep from "../markerIcon/eepy.png"
// import Hero from "../markerIcon/Hero.png"
// import LimitedFood from "../markerIcon/LimitedFood.png"
// import OutOfFuel from "../markerIcon/OutOfFuel.png"
// import carBreakdown from "../markerIcon/vehicleBreakdown.png"
// import Victim from "../markerIcon/Victim.png"

import Hero from "../markerIcon/Hero.png"
import Victim from "../markerIcon/Victim.png"

const Routing = ({ hero, victim }) => {

    const map = useMap();

    useEffect(() => {
        if (!map) return;

        
        // Remove any existing routes when the component unmounts or updates
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(hero.latitude, hero.longitude),
                L.latLng(victim.latitude, victim.longitude),
            ],
            routeWhileDragging: true,
            createMarker: function (i, waypoint, n) {
                // Different marker properties based on waypoint index (i)
                if (i === 0) {
                    // Waypoint 1: Undraggable with a specific icon
                    return L.marker(waypoint.latLng, {
                        draggable: true,
                        icon: L.icon({
                            iconUrl: Hero, // Your custom icon for this waypoint
                            iconSize: [32, 32],
                            iconAnchor: [22, 0],
                            popupAnchor: [-3, -76],
                        })
                    });
                } else if (i === 1) {
                    // Waypoint 2: Draggable with a different icon
                    return L.marker(waypoint.latLng, {
                        draggable: false,
                        icon: L.icon({
                            iconUrl: Victim, // Your custom icon for this waypoint
                            iconSize: [32, 32],
                            iconAnchor: [22, 0],
                            popupAnchor: [-3, -76],
                        })
                    });
                }
            }
        }).addTo(map);

        return () => {
            if (routingControl && map) {
                try {
                    // Clear waypoints safely
                    routingControl.getPlan().setWaypoints([]);
                    // Check if the routing control exists on the map before removing it
                    if (routingControl._line && routingControl._line._map) {
                        map.removeControl(routingControl);
                    }
                } catch (error) {
                    console.error("Error removing routing control:", error);
                }
            }
        };
    }, [map, hero, victim]);

    return null;
};


const RoutingMap = ({ hero, victim }) => {
    const mapRef = useRef(null);

    return (
        <MapContainer center={[hero.latitude, hero.longitude]} zoom={20} ref={mapRef} style={{height: "50vh", width: "50vw"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Routing hero={hero} victim={victim} />
        </MapContainer>
    );
};

// const RoutingMap = ({position, icon, victims, onMarkerSelect}) => {
//     const mapRef = useRef(null);
//     const latitude = position.latitude;
//     const longitude = position.longitude;
//     const imgArr = [
//         L.icon({ iconUrl: Boredom, iconSize: [32, 32] }),
//         L.icon({ iconUrl: BadWeather, iconSize: [32, 32] }),
//         L.icon({ iconUrl: Sleep, iconSize: [32, 32] }),
//         L.icon({ iconUrl: Hero, iconSize: [32, 32] }),
//         L.icon({ iconUrl: LimitedFood, iconSize: [32, 32] }),
//         L.icon({ iconUrl: OutOfFuel, iconSize: [32, 32] }),
//         L.icon({ iconUrl: carBreakdown, iconSize: [32, 32] }),
//         L.icon({ iconUrl: Victim, iconSize: [32, 32] }),
//     ];


//     return ( 
//       // Make sure you set the height and width of the map container otherwise the map won't show
//         <MapContainer center={[latitude, longitude]} zoom={20} ref={mapRef} style={{height: "50vh", width: "50vw"}}>
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker
//                 position={[latitude, longitude]}
//                 icon={imgArr[icon || 0]}>
//                     <Popup>
//                         <div>
//                             <h4>You are here!</h4>
//                         </div>
//                     </Popup>
//             </Marker>

//           {/* Additional map layers or components can be added here */}
//             {victims ? victims.map(v =>{
//                 return <Marker
//                     data = {v}
//                     position = {[v.latitude, v.longitude]}
//                     eventHandlers={{
//                         click: () => onMarkerSelect(v)
//                     }}
//                     icon={v.category ? imgArr[0] : null}>
//                         <Popup>
//                             {v.name} - {v.category}
//                         </Popup>
//                 </Marker>})
//                 : null}
//         </MapContainer>
//     );
// };
  
export default RoutingMap;
