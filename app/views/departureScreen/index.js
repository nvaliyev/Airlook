import React, { useState, useEffect } from 'react';
import { View,FlatList} from 'react-native';
import styles from './style';
import FlightsCard from '../../components/flightsCard/index';
import FilterButtons from '../../components/filterButtons';
import moment from 'moment';

const DepartureScreen = ({ navigation }) => {

  const [loading, setloading] = useState(false)
  const [date, setDate] = useState()
  const [data, setData] = useState()

  const toDay = moment().format("DD-MM-YYYY");
  console.log('Today------>>..........................', toDay)

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch(`https://api.iev.aero/api/flights/${date}`)
    const json = await response.json()
    setData(json.body.departure) 
  };
  fetchData()
      setDate(toDay)
  }, [])

  const renderItem = (item) => {

    const api = {
      flight: `${item['carrierID.IATA']} ${item.fltNo} (${item.term}) `,
      city: item['airportToID.name_en'],
      logo: `https://api.iev.aero${item.logo}`,
      departuretime: moment(item.timeDepShedule).format("HH:m"),
      status:item.status
    }
    return (
      <FlightsCard navigation={navigation} time={api.departuretime} city={api.city} info={api.status} flight={api.flight} logo={api.logo} />
    )

  }

  return !data ? null : (
    <View style={styles.container}>
      <View style={styles.filters}>
        <FilterButtons />
      </View>
      <View style={styles.flightlist}>

        <FlatList
          style={{ alignSelf: 'stretch' }}
          keyExtractor={item => item.id}
          data={data}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    </View>
  )
}

export default DepartureScreen;
