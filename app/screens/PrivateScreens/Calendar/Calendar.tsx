import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

import { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListItem from '@oxvo-mobile/components/ListItem/ListItem';

import { TaskInterface } from './types';

const EVENTS = [
  {
    id: 0,
    name: 'Pilates Workout',
    customer: 'Mia Goth',
    status: 1,
    image: 'https://cdn-icons-png.flaticon.com/256/435/435041.png',
    session: '12:30-14:30',
  },
  {
    id: 1,
    name: 'Yoga Workout',
    customer: 'Mia Goth',
    status: 2,
    image: 'https://cdn-icons-png.flaticon.com/256/435/435061.png',
    session: '12:30-14:30',
  },
  {
    id: 2,
    name: 'Yoga Workout',
    customer: 'Mia Goth',
    status: 0,
    image: 'https://cdn-icons-png.flaticon.com/256/435/435065.png',
    session: '12:30-14:30',
  },
];

const TASKS: TaskInterface[] = EVENTS.map((item, index) => ({
  ...item,
  index,
}));

const App: FC = () => {
  const [tasks, setTasks] = useState(TASKS);

  function changeStatus(index: any, status: any) {
    const nextShapes = TASKS.map((shape) => {
      if (shape.index !== index) {
        return shape;
      } else {
        shape.status = status;
        return {
          ...shape,
        };
      }
    });
    // Re-render with the new array
    setTasks(nextShapes);
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView
          style={{
            flex: 1,
            marginTop: 40,
          }}
        >
          {tasks.map((task) => (
            <ListItem key={task.index} task={task} changeStatus={changeStatus} />
          ))}
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
