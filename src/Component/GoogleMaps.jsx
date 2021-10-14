import React,{useState, useCallback} from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api'; 

const containerStyle = {
    width: '500px',
    height: '800px'
  };
   
  const center = {
    lat: 25.4136637,
    lng: -100.9663437
  };
  const markers={
    lat: 25.41346255,
    lng:  -100.96397225508
  };

const GoogleMaps=()=>{
    //const [map, setMap] = useState(null)
 
    /*const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
   
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])*/
   
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyA-VGFltHlwjxklv4gzw6DB93tyamBdUZE"
      >
        <GoogleMap
         googleMapsApiKey="AIzaSyA-VGFltHlwjxklv4gzw6DB93tyamBdUZE"
          mapContainerStyle={containerStyle}
          center={center}
          markers={markers}
          zoom={10}
          //onLoad={onLoad}
          //onUnmount={onUnmount}
        >
          
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }


export default GoogleMaps