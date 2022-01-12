import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestination, setORigin } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/core'

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Lexfer</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where To?"
                        styles={toInputBoxStyles}
                        onPress={(data, details = null) => {
                            console.log(data)
                            console.log(details)
                            console.log('aqui')
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            // dispatch(setDestination(null))
                            navigation.navigate('RideOptionsCard')
                        }}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en",
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        minLength={2}
                        enablePoweredByContainer={false}
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20, flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0, fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20, paddingBottom: 0,
    }
})
