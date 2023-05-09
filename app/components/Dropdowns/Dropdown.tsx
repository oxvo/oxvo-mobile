import { SelectList } from 'react-native-dropdown-select-list';

import { Entypo } from '@expo/vector-icons';

import { SERVICE_DATA } from './Choose.mocks';

const Dropdown = ({
  placeholder = 'test',
  data = SERVICE_DATA,
  icon = <Entypo name="emoji-sad" size={24} color="black" />,
  changeDropDownValue = () => {},
}) => {
  return (
    <SelectList
      setSelected={(val) => changeDropDownValue(val)}
      data={data}
      save="value"
      placeholder={placeholder}
      arrowicon={icon}
      searchPlaceholder={placeholder}
    />
  );
};
export default Dropdown;
