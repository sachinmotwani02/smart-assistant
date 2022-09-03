import { useEffect, useState, useCallback, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import { useFonts } from 'expo-font';
import HappySVG from './svgs/HappySVG';
import SadSVG from './svgs/SadSVG';
import SmileSVG from './svgs/SmileSVG';
import Animated, {FadeIn, FadeOut, Easing, FadeInDown, FadeOutUp} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import success from './assets/gifs/success.gif'
import fail from './assets/gifs/fail.gif'

export default function App() {
  
  const TASKS = ['Engine Setup', 'Multi-line checking', 'Body Scrape Paint', 'Tyre Functioning Test', 'Gearbox Test', 'Engine Setup', 'Multi-line checking', 'Body Scrape Paint', 'Tyre Functioning Test', 'Gearbox Test', 'Engine Setup', 'Multi-line checking', 'Body Scrape Paint', 'Tyre Functioning Test', 'Gearbox Test']
  const [status, setStatus] = useState('working')
  const MOODS = ['working', 'happy', 'sad'] 
  const [index, setIndex] = useState(0)

  const [fontsLoaded] = useFonts({
    'ProductSans-Bold': require('./assets/fonts/ProductSans-Bold.ttf'),
    'ProductSans-Regular': require('./assets/fonts/ProductSans-Regular.ttf'),
    'ProductSans-Medium': require('./assets/fonts/ProductSans-Medium.ttf')
  });
  

  useEffect(() => {

    // async function prepare() {
    //   await SplashScreen.preventAutoHideAsync();
    // }
    
    // prepare();

    const interval = setInterval(() => {
      setIndex(index => index + 1);
      const Status = MOODS[Math.floor(Math.random() * MOODS.length)]
      setStatus(Status)
    }, 7000);
    return () => clearInterval(interval);
  }, []);


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topCon}>
        <View style={styles.textCon}>
          <Text style={styles.textStyle}>Prev</Text>
          <Text style={styles.textStyle}>Now</Text>
          <Text style={styles.textStyle}>Next</Text>
        </View>
        <View style={styles.taskProgressCon}>
          <Text style={styles.notCurrentTask}>{TASKS[index-1]}</Text>
          <Text style={styles.CurrentTask}>{TASKS[index]}</Text>
          <Text style={styles.notCurrentTask}>{TASKS[index+1]}</Text>
        </View>
      </View>
      <View style={styles.bottomCon}>

          {status==='working' &&
            <Animated.View entering={FadeIn.duration(700).easing(Easing.bezier(0.33, 1, 0.68, 1))} exiting={FadeOut.duration(400).easing(Easing.bezier(0.33, 1, 0.68, 1))}>
              <SmileSVG />
            </Animated.View>
          }

          {status==='happy' &&
            <Animated.View entering={FadeIn.duration(700).easing(Easing.bezier(0.33, 1, 0.68, 1))} exiting={FadeOut.duration(400).easing(Easing.bezier(0.33, 1, 0.68, 1))}>
              <HappySVG />
            </Animated.View>
          }

          {status==='sad' &&
            <Animated.View entering={FadeIn.duration(700).easing(Easing.bezier(0.33, 1, 0.68, 1))} exiting={FadeOut.duration(400).easing(Easing.bezier(0.33, 1, 0.68, 1))}>
              <SadSVG />
            </Animated.View>
          }
      <View style={styles.status}>
        {status==='happy' &&
          <View style={styles.gifCon}>
            <Image style ={{width: 250, height: 250}} source={success} resizeMode={'cover'}/>
          </View>
        }
        {/* {status==='sad' &&
          <View style={styles.gifCon}>
            <Image style ={{width: 80, height: 80}} source={fail} resizeMode={'cover'}/>
          </View>
        } */}
        {status==='working' &&
          <Animated.View entering={FadeInDown.delay(400)} exiting={FadeOutUp}>
            <Text style={[styles.statusText, {color: '#1a1a1a'}]}>Working...</Text>
          </Animated.View>
        }
        {status==='happy' &&
          <Animated.View style={{flexDirection: 'row'}} entering={FadeInDown.delay(4500)} exiting={FadeOutUp}>
            <Ionicons style={{paddingHorizontal: 10
            }} name="md-checkmark-circle-outline" size={22} color="#15BD44" />
            <Text style={[styles.statusText, {color: '#15BD44'}]}>Task Completed</Text>
          </Animated.View>
        }
        {status==='sad' &&
          <Animated.View style={{flexDirection: 'row'}} entering={FadeInDown.delay(400)} exiting={FadeOutUp}>
            <Ionicons style={{paddingHorizontal: 10
            }} name="md-warning-outline" size={22} color="#D81212" />
            <Text style={[styles.statusText, {color: '#D81212'}]}>Please Check Again</Text>
          </Animated.View>
        }
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'aqua',
  },
  bottomCon:{
    flex:1,
    justifyContent: 'space-around'
  },
  topCon:{
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textCon:{
    padding: 20,
  },
  textStyle:{
    textAlign: 'center',
    paddingVertical: 6,
    fontFamily: 'ProductSans-Regular'
  },
  taskProgressCon: {
    padding: 20,
  },
  notCurrentTask: {
    textAlign: 'center',
    paddingVertical: 5,
    color: 'gray',
    fontFamily: 'ProductSans-Regular'
  },
  CurrentTask: {
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 20,
    fontFamily: 'ProductSans-Medium',
  },
  status: {
    flexDirection: 'row',
    // height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'aqua',
    height: '23%',
    position: 'relative'
  },
  statusText: {
    fontFamily: 'ProductSans-Regular',
    fontSize: 18
  },
  gifCon:{
    // width: 100
    position: 'absolute',
    // bottom: 50
  },

});
