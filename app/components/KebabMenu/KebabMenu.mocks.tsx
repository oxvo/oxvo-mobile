import { Ionicons } from '@expo/vector-icons';

const settings = [
  {
    icon: <Ionicons name="notifications-circle-outline" size={22} color="black" />,
    text: 'Send again notification',
    color: 'black',
  },
  {
    icon: <Ionicons name="ellipsis-vertical" size={20} color="black" />,
    text: 'Edit',
    color: 'black',
  },
  {
    icon: <Ionicons name="remove-circle-outline" size={20} color="black" />,
    text: 'Delete on today list',
    color: 'black',
  },
  {
    icon: (
      <Ionicons
        name="create-outline"
        size={20}
        color="black"
        style={{ position: 'relative', bottom: 3 }}
      />
    ),
    text: 'Change Status',
    color: 'black',
  },
  {
    icon: <Ionicons name="trash-outline" size={20} color="black" />,
    text: 'Delete Event',
    color: 'red',
  },
];
export { settings };
