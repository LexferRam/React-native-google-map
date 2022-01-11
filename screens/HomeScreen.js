import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { Card, Button } from 'react-native-paper';
import { DataTable, List } from 'react-native-paper';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const optionsPerPage = [2, 3, 4];

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};


const HomeScreen = () => {

    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-2`}>
                <Image
                    style={{
                        width: 100, height: 100, resizeMode: 'contain'
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder="Where From"
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18
                        }
                    }}
                    onPress={(data, details = null) => {
                        console.log(data)
                        console.log(details)
                        console.log('aqui')
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    minLength={2}
                    enablePoweredByContainer={false}
                />

                {/* <NavOptions />
                <Card>
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>


                <List.Section title="Accordions">
                    <List.Accordion
                        title="Uncontrolled Accordion"
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Controlled Accordion"
                        left={props => <List.Icon {...props} icon="folder" />}
                        expanded={expanded}
                        onPress={handlePress}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>
                </List.Section> */}

                <LineChart
                    data={{
                        labels: ['January', 'February', 'March', 'April'],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ],
                            },
                        ],
                    }}
                    width={Dimensions.get('window').width - 16} // from react-native
                    height={220}
                    yAxisLabel={'Rs'}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
                {/* <ProgressChart
                    data={[0.4, 0.6, 0.8]}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                /> */}
                {/* <BarChart
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        datasets: [
                            {
                                data: [20, 45, 28, 80, 99, 43],
                            },
                        ],
                    }}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    yAxisLabel={'Rs'}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                /> */}
                {/* <StackedBarChart
                    data={{
                        labels: ['Test1', 'Test2'],
                        legend: ['L1', 'L2', 'L3'],
                        data: [
                            [60, 60, 60],
                            [30, 30, 60],
                        ],
                        barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
                    }}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                /> */}
                {/* <PieChart
                    data={[
                        {
                            name: 'Seoul',
                            population: 21500000,
                            color: 'rgba(131, 167, 234, 1)',
                            legendFontColor: '#7F7F7F',
                            legendFontSize: 15,
                        },
                        {
                            name: 'Toronto',
                            population: 2800000,
                            color: '#F00',
                            legendFontColor: '#7F7F7F',
                            legendFontSize: 15,
                        },
                        {
                            name: 'New York',
                            population: 8538000,
                            color: '#ffffff',
                            legendFontColor: '#7F7F7F',
                            legendFontSize: 15,
                        },
                        {
                            name: 'Moscow',
                            population: 11920000,
                            color: 'rgb(0, 0, 255)',
                            legendFontColor: '#7F7F7F',
                            legendFontSize: 15,
                        },
                    ]}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute //for the absolute number remove if you want percentage
                /> */}
                <ContributionGraph
                    values={[
                        { date: '2019-01-02', count: 1 },
                        { date: '2019-01-03', count: 2 },
                        { date: '2019-01-04', count: 3 },
                        { date: '2019-01-05', count: 4 },
                        { date: '2019-01-06', count: 5 },
                        { date: '2019-01-30', count: 2 },
                        { date: '2019-01-31', count: 3 },
                        { date: '2019-03-01', count: 2 },
                        { date: '2019-04-02', count: 4 },
                        { date: '2019-03-05', count: 2 },
                        { date: '2019-02-30', count: 4 },
                    ]}
                    endDate={new Date('2019-04-01')}
                    numDays={105}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    }
})

