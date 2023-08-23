import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Svg, Path, Circle, G } from 'react-native-svg';
import { getAccounts } from '../../api/firebase/accounts';

const PieChart = () => {
    const [data, setdata] = useState([])

    const getAmount = async () =>{
        const queryGetAccounts = await getAccounts()
    
        onSnapshot(queryGetAccounts, (snap) =>{
            const tmp =[]
            tmp.push(snap.data().accounts)
            setdata([... data, {name: snap.data().accounts}])
        })
    }
    useEffect(() =>{
        getAmount()
        console.log(data)
    }, [])
    // const [selectedIndex, setSelectedIndex] = useState(-1);

    // const total = data.reduce((acc, item) => acc + item.value, 0);

    // const angles = data.map(item => item.value / total * 360);

    // let currentAngle = 90;

    // const onPressItem = index => {
    //     setSelectedIndex(index);
    // };

    return (
        <View style={styles.container}>
            {/* <Svg height={200} width={200}>
                {angles.map((angle, index) => {
                    const x1 = 100 + Math.cos(currentAngle * Math.PI / 180) * 90;
                    const y1 = 100 + Math.sin(currentAngle * Math.PI / 180) * 90;
                    currentAngle += angle;
                    const x2 = 100 + Math.cos(currentAngle * Math.PI / 180) * 90;
                    const y2 = 100 + Math.sin(currentAngle * Math.PI / 180) * 90;
                    const largeArcFlag = angle > 180 ? 2 : 0;
                    const pathData = `M${x1},${y1} A90,90 0 ${largeArcFlag},1 ${x2},${y2} L100,100 Z`;
                    return (
                        <TouchableWithoutFeedback key={index} onPress={() => onPressItem(index)}>
                            <G>
                                <Path
                                    d={pathData}
                                    fill={selectedIndex === index ? '#688ea7' : data[index].fill}
                                />
                                {selectedIndex === index && (
                                    <Circle
                                        cx={100}
                                        cy={100}
                                        r={70}
                                        fill="white"
                                        strokeWidth={20}
                                        stroke={3}
                                        
                                    />
                                )}
                                {selectedIndex === index && (
                                    <Text
                                        x={100}
                                        y={100}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                    >
                                        {`$${data[index].value.toFixed(2)}`}
                                    </Text>
                                )}
                            </G>
                        </TouchableWithoutFeedback>
                    );
                })}
            </Svg> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default PieChart;
