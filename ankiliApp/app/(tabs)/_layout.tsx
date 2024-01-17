import Colors from '@/constants/Colors';
import { Link, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitle: 'Home',
        headerTintColor: '#fff',
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tabs.Screen
        name='Sets'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' color={color} size={size} />
          ),
          headerRight: () => (
            <Link href='/'>
              <TouchableOpacity>
                <Ionicons
                  name='add'
                  color='#fff'
                  size={30}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name='Search'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name='Profile'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
