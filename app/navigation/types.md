- PrivateStackRouteProp
- PublicStackScreenProps
- PublicStackParamList


type Props = {
  route: PrivateStackRouteProp<'EVENT_DETAIL'>;
}

const MyComponent = (props: Props) => {
  const { eventId } = props.route.params;

  // eventId'yi kullanarak başka şeyler yapabiliriz
  // ...
}



type Props1 = {
  // ...
};

type Props2 = {
  // ...
};

type MyComponentProps = PublicStackScreenProps<'SIGN_IN'> & Props1 & Props2;

function MyComponent(props: MyComponentProps) {
  const { navigation, route, /* diğer propslar */ } = props;

  // ...
}


  const navigation = useNavigation<PublicStackParamList>();
  const route = useRoute<PublicStackScreenProps<'SIGN_IN'>>();