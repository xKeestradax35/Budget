import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform } from 'react-native';

//Screens
import Login from './screens/Login'
import Register from './screens/Register'
//Tabs
import Dashboard from './screens/tabs/Dashboard'
import Setting from './screens/tabs/Setting'
import Calculator from './screens/tabs/Calculator';

//Components Account
import AddAccount from './screens/components/account/AddAccount';
import Account from './screens/components/account/Account'
import AccountSetting from './screens/components/account/AccountSetting';
//Components Transactions
import AddTransaction from './screens/components//transaction/AddTransaction';
import ModifyTransaction from './screens/components/transaction/ModifyTransaction';
//Components Notification
import Notifications from './screens/components/notification/Notifications';
//Components Statements
import StatementsViewCard from './screens/components/statements/StatementsViewCard';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Home' options={{ headerShown: false }}>{() => (
          <SafeAreaProvider>
            <Tab.Navigator
              barStyle={{ backgroundColor: 'white' }}>
              <Tab.Screen name="DashboardTab" options={{
                headerShown: false,
                tabBarActiveTintColor: '#688ea7',
                tabBarInactiveTintColor: '#cdcdcd',
                tabBarIcon: ({ color }) => (
                  <Icon name="home" color={color} size={26} />
                ),
                tabBarLabel: 'Dashboard',
              }}>
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerLargeTitle: true }}></Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen name="CalculatorTab" options={{
                headerShown: false,
                tabBarActiveTintColor: '#688ea7',
                tabBarInactiveTintColor: '#cdcdcd',
                tabBarIcon: ({ color }) => (
                  <Icon name="calculator-variant" color={color} size={26} />
                ),
                tabBarLabel: 'Calculator',
              }}>
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen name='Calculator' component={Calculator} options={{headerShown:false, headerLargeTitle: false }}></Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
              <Tab.Screen name="SettingTab" options={{
                headerShown: false,
                tabBarActiveTintColor: '#688ea7',
                tabBarInactiveTintColor: '#cdcdcd',
                tabBarIcon: ({ color }) => (
                  <Icon name="cog" color={color} size={26} />
                ),
                tabBarLabel: 'Setting'
              }}>
                {() => (
                  <Stack.Navigator>
                    <Stack.Screen name='Setting' component={Setting} options={{ headerLargeTitle: true }}></Stack.Screen>
                  </Stack.Navigator>
                )}
              </Tab.Screen>
            </Tab.Navigator>
          </SafeAreaProvider>
        )}</Stack.Screen>
        <Stack.Screen name='Login' component={Login} options={{
          headerShown: false
        }}></Stack.Screen>
        <Stack.Screen name='SignUP' component={Register} options={{
          headerShown: false
        }}></Stack.Screen>
        <Stack.Screen name='AddAccount' component={AddAccount} options={{
          presentation: Platform.OS === 'ios' ? 'modal' : 'card',
          headerLargeTitle: Platform.OS === 'ios' ? true : false,
          headerTitleAlign: 'center',
        }}></Stack.Screen>
        <Stack.Screen name='AddTransaction' component={AddTransaction} options={{
          presentation: Platform.OS === 'ios' ? 'modal' : 'card',
          headerLargeTitle: Platform.OS === 'ios' ? true : false,
          headerTitleAlign: 'center',
        }}></Stack.Screen>
        <Stack.Screen name='Account' component={Account}></Stack.Screen>
        <Stack.Screen name='ModifyTransaction' component={ModifyTransaction}
          options={{
            presentation: Platform.OS === 'ios' ? 'modal' : 'card',
            headerLargeTitle: Platform.OS === 'ios' ? true : false,
            headerTitleAlign: 'center',
          }}></Stack.Screen>
        <Stack.Screen name='AccountSetting' component={AccountSetting}
          options={{
            presentation: Platform.OS === 'ios' ? 'modal' : 'card',
            headerLargeTitle: Platform.OS === 'ios' ? true : false,
            headerTitleAlign: 'center',
          }}></Stack.Screen>
        <Stack.Screen name='Notification' component={Notifications}
          options={{
            presentation: Platform.OS === 'ios' ? 'modal' : 'card',
            headerLargeTitle: Platform.OS === 'ios' ? true : false,
            headerTitleAlign: 'center',
          }}></Stack.Screen>
        <Stack.Screen name='Statement' component={StatementsViewCard}
          options={{
            presentation: Platform.OS === 'ios' ? 'card' : 'card',
            headerLargeTitle: Platform.OS === 'ios' ? true : false,
            headerTitleAlign: 'center',
          }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
