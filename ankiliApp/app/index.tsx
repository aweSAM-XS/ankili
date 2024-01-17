import { View, Text } from 'react-native';
import { useId } from '@/utils/hooks';
import { Redirect } from 'expo-router';

const Page = () => {
  const [hasId] = useId();

  return hasId ? (
    <Redirect href={'/(tabs)/Sets'} />
  ) : (
    <View>
      <Text>awesam</Text>
    </View>
  );
};

export default Page;
