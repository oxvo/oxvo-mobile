import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function getIconByNumber(number: any) {
  let icon;

  switch (number) {
    case 5:
      icon = <MaterialCommunityIcons name="arm-flex" size={24} color="black" />;
      break;
    case 10:
      icon = <FontAwesome5 name="swimmer" size={24} color="black" />;
      break;
    case 15:
      icon = <MaterialCommunityIcons name="yoga" size={24} color="black" />;
      break;

    default:
      icon = <AntDesign name="meh" size={24} color="black" />;
      break;
  }

  return icon;
}
