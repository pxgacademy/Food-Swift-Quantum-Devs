// components/LiveMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import io from "socket.io-client";

const socket = io("http://localhost:5000", {
  auth: {
    token: localStorage.getItem("token"), // তোমার JWT token
  },
});

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  iconSize: [30, 30],
});

const LiveMap = ({ orderId }) => {
  const [location, setLocation] = useState({
    lat: 23.8103,
    lng: 90.4125,
  });

  useEffect(() => {
    socket.emit("joinOrderRoom", orderId);

    socket.on("locationUpdate", (data) => {
      console.log("Location Update:", data);
      setLocation({ lat: data.latitude, lng: data.longitude });
    });

    return () => {
      socket.disconnect();
    };
  }, [orderId]);

  return (
    <div className="h-[500px] rounded-xl overflow-hidden">
      <MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        <Marker position={[location.lat, location.lng]} icon={customIcon}>
          <Popup>
            Delivery Agent's Current Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LiveMap;
