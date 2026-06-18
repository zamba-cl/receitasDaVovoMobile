import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Href, useRouter } from 'expo-router';

interface HomeCardProps {
  title: string;
  route: Href;
}

export default function HomeCard({ title, route }: HomeCardProps) {

  const router = useRouter();

  return (

    <Pressable onPress={() => router.push(route)} style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>

      <View style={styles.content}>

        <Text style={styles.title}>
          {title}
        </Text>

      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({

  card: {
    width: '48%',
    height: 140,
    
    backgroundColor: '#fffaf0',

    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#d9c7a7',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1,},
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },

  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }]
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14
  },

  title: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'fontVovo',
    textAlign: 'center'
  }
});