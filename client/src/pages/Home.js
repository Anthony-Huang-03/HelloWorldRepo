import React, { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker, Popup } from "leaflet/src/layer";
import "../../node_modules/leaflet/dist/leaflet.css"

const Home = () => {
    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/ProblemIdentification');
    };
    const handleClick2 = () => {
        navigate('/HeroSelection');
    };

    const [location, setLocation] = useState([51.505, -0.09]);

    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(
    //             (position) => {
    //                 setLocation([
    //                     position.coords.latitude,
    //                     position.coords.longitude
    //                 ]);
    //             },
    //             (error) => {
    //                 console.error('Error getting location:', error);
    //             }
    //         );
    //     } else {
    //         console.error('Geolocation is not supported by this browser.');
    //     }
    // }, []);

    return (
        <div style = {{height: "100vh", width: "100vw"}}>
            <MapContainer center={[10,0]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/*<Marker position={location}>*/}
                {/*    <Popup>*/}
                {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
                {/*    </Popup>*/}
                {/*</Marker>*/}
            </MapContainer>
        </div>
    );
};

export default Home;