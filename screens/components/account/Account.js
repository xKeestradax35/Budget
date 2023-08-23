import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Dimensions, StatusBar, Text, TouchableOpacity, RefreshControl } from 'react-native'
import { Styles } from '../../../styles/Account'
import { stylesChart } from '../../../styles/Chart'
import { BarChart } from "react-native-chart-kit";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TransactionViewCard from '../transaction/TransactionViewCard';
import { getTransaction } from '../../../api/firebase/accounts';
import moment from 'moment';
import { onSnapshot } from 'firebase/firestore';
import AccountStatistics from './AccountStatistics';
import Statements from '../transaction/Statements'

export default function Account({ route, navigation }) {
  const { uid, titler } = route.params
  useNavigation().setOptions({
    headerRight: () => (
      <View style={Styles.headerButtonView}>
        {titler !== "Expenses" ? <TouchableOpacity onPress={async () => { navigation.navigate("AccountSetting", { AccountID: uid, Name: titler }) }}>
          <Icon name="cog-outline" size={26} color="#688ea7" />
        </TouchableOpacity>
          : null
        }
      </View>
    ),
    title: titler.toUpperCase(),
  })

  const [items, setitems] = useState([])

  const filterByWeekOne = (d) => {
    return moment(d.date).format('DD') <= 7
  }
  const filterByWeekTwo = (d) => {
    return moment(d.date).format('DD') > 7 && moment(d.date).format('DD') < 15
  }
  const filterByWeekThree = (d) => {
    return moment(d.date).format('DD') > 14 && moment(d.date).format('DD') < 23
  }
  const filterByWeekFour = (d) => {
    return moment(d.date).format('DD') >= 23
  }

  const showChartData = async () => {
    const query = await getTransaction({ AccountID: uid })
    onSnapshot(query, (snap) => {
      setitems(snap.docs.map((doc) => ({ ...doc.data() })))
    })
  }

  useEffect(() => {
    showChartData()
  }, [])

  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(45, 15, 126, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const data = {
    labels: ["week 1", "week 2", "week 3", "week 4"],
    datasets: [
      {
        data: [items.filter(filterByWeekOne).reduce((a, b) => a + + b.price, 0), items.filter(filterByWeekTwo).reduce((a, b) => a + + b.price, 0), items.filter(filterByWeekThree).reduce((a, b) => a + + b.price, 0), items.filter(filterByWeekFour).reduce((a, b) => a + + b.price, 0)]
      }
    ]
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fdffff' }}>
      <ScrollView style={Styles.scrollView} horizontal={false}>
        <View style={Styles.viewChart}>
          <BarChart
            style={stylesChart.chart}
            height={300}
            width={screenWidth}
            data={data}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
        </View>
        <AccountStatistics Total={items.reduce((a, b) => a + + b.price, 0).toFixed(2)} isSplit={false}/>
        <View style={Styles.TitleView}>
          <Text style={Styles.Title}>Transactions</Text>
          <TouchableOpacity onPress={() => { navigation.navigate('AddTransaction', { AccountID: uid }) }} style={{ marginHorizontal: 2 }}>
            <Icon name="plus-circle-outline" size={26} color="#688ea7" />
          </TouchableOpacity>
        </View>
        <TransactionViewCard AccountID={uid} />
        <View style={Styles.TitleView}>
          <Text style={[Styles.Title, {fontSize: 18}]}>Statements</Text>
        </View>
        <Statements AccountID={uid}/>
        <StatusBar />
      </ScrollView>
    </SafeAreaView>
  )
}
