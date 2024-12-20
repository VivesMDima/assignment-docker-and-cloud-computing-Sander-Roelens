
import { createStackNavigator } from '@react-navigation/stack';
import { SearchView } from './MostViewed';
import { SettingsScreen } from '../settings/Settings';
import {ItemDetail} from '../Item/itemDetail'
const Stack = createStackNavigator();
const NavStack = () => {
    return (
    <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen name="Search" component={SearchView} options={{
                    headerLeft: () => null
                }}/>
        <Stack.Screen name="Settings" component={SettingsScreen}/>
        <Stack.Screen name="Detail" component={ItemDetail}/>
     </Stack.Navigator>
    )
}

export {NavStack}