
import { Home } from '../HomeScreen/Home'
import { createStackNavigator } from '@react-navigation/stack';
import {ItemDetail} from '../Item/itemDetail'

import {CreateScreen} from '../createScreen/create'
const Stack = createStackNavigator();

const NavStack = () => {
    return (
    <Stack.Navigator initialRouteName='Overview'>
        <Stack.Screen name="Overview" component={Home} options={{
                    headerLeft: () => null
                }} />
        <Stack.Screen name="Detail" component={ItemDetail}/>
        <Stack.Screen name="Create" component={CreateScreen}/>
     </Stack.Navigator>
    )
}

export {NavStack}