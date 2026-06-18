import { Tabs } from 'expo-router';
import { BookOpen, CakeSlice, Pizza } from 'lucide-react-native'

export default function Layout() {

  return (
    <Tabs screenOptions={{
      sceneStyle: { backgroundColor: '#fffaf0', },
      headerShown: false,
      tabBarStyle: {   backgroundColor: '#fffaf0', borderTopColor: '#e8dcc6', },
      tabBarActiveTintColor: '#e2da00',
      tabBarInactiveTintColor: '#c7b299',
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({color}) => <BookOpen size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="doces"
        options={{
          title: '',
          tabBarIcon: ({color}) => <CakeSlice size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="salgados"
        options={{
          title: '',
          tabBarIcon: ({color}) => <Pizza size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
