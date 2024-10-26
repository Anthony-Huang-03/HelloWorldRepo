import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "leaflet/src/layer";

const Map = ({position}) => {
    const mapRef = useRef(null);

    return (
        // Make sure you set the height and width of the map container otherwise the map won't show
        <MapContainer center={[position.latitude, position.longitude]} zoom={13} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            {/* Additional markers for each victim */}
            {/*{victims.map(victim => {*/}
            {/*    return <Marker position = {[victim.latitude, victim.longitude]}>*/}
            {/*        <Popup>*/}
            {/*            Some information about {victim.name}*/}
            {/*        </Popup>*/}
            {/*    </Marker>*/}
            {/*})}*/}
        </MapContainer>
    );
};

export default Map;