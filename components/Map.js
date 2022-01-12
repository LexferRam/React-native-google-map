import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from 'react-native-maps';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)

    useEffect(() => {
        if (!origin || !destination) return;

        //Zoom & fit to markers
        mapRef.current.fitToSuppliendMarkers(['origin', 'destination'], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }
        });
    }, [origin, destination])

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            initialRegion={{
                latitude: 10.48801/*origin.location.lat*/,
                longitude: -66.87919/*origin.location.lng*/,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin?.description}
                    destination={destination?.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}
            {/*origin?.location*/ true && (
                <Marker
                    coordinate={{
                        latitude: 10.48801/*origin.location.lat*/,
                        longitude: -66.87919/*origin.location.lng*/,
                    }}
                    title='Origin'
                    description='Origins Description'/*{origin?.description}*/
                    identifier='origin'
                />
            )}

            {/*destination?.location*/ true && (
                <Marker
                    coordinate={{
                        latitude: 10.48801/*origin.location.lat*/,
                        longitude: -66.87919/*origin.location.lng*/,
                    }}
                    title='Origin'
                    description='Origins Description'/*{origin?.description}*/
                    identifier='origin'
                />
            )}
        </MapView>

    )
}

export default Map

const styles = StyleSheet.create({})
