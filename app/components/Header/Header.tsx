/* eslint-disable react/no-unstable-nested-components */

/**
 * @example:
 * PublicNavigator
 *     - PUBLIC_ROUTES.FORGOT_PASSWORD
 *     - PUBLIC_ROUTES.INVITE_CODE
 *     - PUBLIC_ROUTES.SIGN_IN
 *     - PUBLIC_ROUTES.SIGN_UP
 * PrivateNavigator
 * - PRIVATE_ROUTES.ADD_SERVICE
 *  * ProfieNavigatorHeader
 *      - PRIVATE_ROUTES.PROFILE.PROFILE_HOME
 *      - PRIVATE_ROUTES.PROFILE.CHANGE_PASSWORD
 *      - PRIVATE_ROUTES.PROFILE.ACCOUNT_SETTINGS
 *  * SessionsNavigatorHeader
 *      - PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME
 *      - PRIVATE_ROUTES.SESSIONS.CREATE_SESSION
 *      - PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL
 *  * BottomTabNavigatorHeader
 *      - BOTTOM_TAB_ROUTES.HOME
 *      - BOTTOM_TAB_ROUTES.CALENDAR
 *      - BOTTOM_TAB_ROUTES.NOTIFICATIONS
 *      - BOTTOM_TAB_ROUTES.OVERVIEW
 */
import React, { memo, useCallback } from 'react';

import useCurrentUserRole from '@oxvo-mobile/domains/Me/hooks/useCurrentUserRole';

import {
  HeaderContainer,
  LeftElement,
  MiddleElement,
  RightElement,
} from '@oxvo-mobile/components/Header/Header.styled';
import HeaderCompanyInfo from '@oxvo-mobile/components/Header/HeaderCompanyInfo';
import HeaderLeftAction, {
  HeaderLeftActionType,
} from '@oxvo-mobile/components/Header/HeaderLeftAction';
import HeaderRightAction from '@oxvo-mobile/components/Header/HeaderRightAction';
import TabViewKey from '@oxvo-mobile/components/TabView/TabViewKey.types';
import useTabViewStore from '@oxvo-mobile/components/TabView/useTabViewStore';

import {
  BottomTabParamList,
  PrivateStackNavigationProp,
  PrivateStackParamList,
  PublicStackParamList,
} from '@oxvo-mobile/navigation/types';

import { UserRoles } from '@oxvo-mobile/constants/oxvo';
import { BOTTOM_TAB_ROUTES, PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';

import { useNavigation, useRoute } from '@react-navigation/native';

type HeaderProps = {
  leftComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  rightComponent: React.ReactElement;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = ({ leftComponent, middleComponent, rightComponent }) => {
  return (
    <HeaderContainer>
      <LeftElement>{leftComponent}</LeftElement>
      <MiddleElement>
        <HeaderCompanyInfo />
      </MiddleElement>
      <RightElement>{rightComponent}</RightElement>
    </HeaderContainer>
  );
};

type BottomTabRoutes = keyof BottomTabParamList;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PrivateRoutes = keyof PrivateStackParamList;
type PublicRoutes = keyof PublicStackParamList;

const ServiceNavigatorHeader = memo(() => {
  // Routes: PRIVATE_ROUTES.ADD_SERVICE
  const HeaderLeft = useCallback(() => {
    return <HeaderLeftAction action={HeaderLeftActionType.GO_BACK} />;
  }, []);

  const HeaderMiddle = useCallback(() => {
    return <HeaderCompanyInfo />;
  }, []);

  const HeaderRight = useCallback(() => {
    return null;
  }, []);

  return (
    <Header
      leftComponent={<HeaderLeft />}
      middleComponent={<HeaderMiddle />}
      rightComponent={<HeaderRight />}
    />
  );
});

const PublicNavigatorHeader = memo(({ route }: { route: PublicRoutes }) => {
  // Routes: PUBLIC_ROUTES.FORGOT_PASSWORD, PUBLIC_ROUTES.INVITE_CODE, PUBLIC_ROUTES.SIGN_IN, PUBLIC_ROUTES.SIGN_UP
  const HeaderLeft = useCallback(() => {
    switch (route) {
      default:
        return null;
    }
  }, [route]);

  const HeaderMiddle = useCallback(() => {
    switch (route) {
      default:
        return null;
    }
  }, [route]);

  const HeaderRight = useCallback(() => {
    switch (route) {
      default:
        return null;
    }
  }, [route]);

  return (
    <Header
      leftComponent={<HeaderLeft />}
      middleComponent={<HeaderMiddle />}
      rightComponent={<HeaderRight />}
    />
  );
});

const ProfileNavigatorHeader = memo(() => {
  // Routes: PRIVATE_ROUTES.PROFILE.PROFILE_HOME, PRIVATE_ROUTES.PROFILE.CHANGE_PASSWORD, PRIVATE_ROUTES.PROFILE.ACCOUNT_SETTINGS
  const HeaderLeft = useCallback(() => {
    return <HeaderLeftAction action={HeaderLeftActionType.GO_BACK} />;
  }, []);

  const HeaderMiddle = useCallback(() => {
    return <HeaderCompanyInfo />;
  }, []);

  const HeaderRight = useCallback(() => {
    return null;
  }, []);

  return (
    <Header
      leftComponent={<HeaderLeft />}
      middleComponent={<HeaderMiddle />}
      rightComponent={<HeaderRight />}
    />
  );
});

const SessionsNavigatorHeader = ({ route }: { route: PrivateRoutes }) => {
  const { navigate, getState } = useNavigation<PrivateStackNavigationProp>();
  const routex = useRoute();
  const currentNavigationState = getState();
  const previousRoute = currentNavigationState.routes[currentNavigationState.index - 1];
  // Routes: PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME, PRIVATE_ROUTES.SESSIONS.CREATE_SESSION, PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL
  const HeaderLeft = () => {
    return <HeaderLeftAction routex={previousRoute} action={HeaderLeftActionType.GO_BACK} />;
  };

  const HeaderMiddle = () => {
    return <HeaderCompanyInfo />;
  };

  const HeaderRight = () => {
    // return (
    //   <HeaderRightAction
    //     title="Create Session in Session Screens"
    //     onNavigate={() => {
    //       navigate(PRIVATE_ROUTES.SESSIONS.SESSIONS_NAVIGATOR, {
    //         screen: PRIVATE_ROUTES.SESSIONS.CREATE_SESSION,
    //       });
    //     }}
    //   />
    // );
  };

  return (
    <Header
      leftComponent={<HeaderLeft />}
      middleComponent={<HeaderMiddle />}
      rightComponent={<HeaderRight />}
    />
  );
};

const BottomTabNavigatorHeader = ({ route }: { route: BottomTabRoutes }) => {
  const currentTabViewKey = useTabViewStore((state) => state.currentTabViewKey);
  const currentUserRole = useCurrentUserRole();
  const { navigate } = useNavigation<PrivateStackNavigationProp>();

  const HeaderLeft = () => {
    return <HeaderLeftAction />;
  };

  const HeaderMiddle = () => {
    switch (route) {
      case BOTTOM_TAB_ROUTES.HOME:
        return <HeaderCompanyInfo />;
      default:
        return null;
    }
  };

  const HeaderRight = () => {
    switch (route) {
      case BOTTOM_TAB_ROUTES.HOME:
      case BOTTOM_TAB_ROUTES.CALENDAR:
        // if (currentUserRole === UserRoles.STAFF) {
        //   return null;
        // } // TODO: Uncomment this
        return (
          <HeaderRightAction
            title="Create Session"
            onNavigate={() => {
              navigate(PRIVATE_ROUTES.SESSIONS.SESSIONS_NAVIGATOR, {
                screen: PRIVATE_ROUTES.SESSIONS.CREATE_SESSION,
                params: { from: BOTTOM_TAB_ROUTES.HOME },
              });
            }}
          />
        );
      case BOTTOM_TAB_ROUTES.NOTIFICATIONS:
        return null;
      case BOTTOM_TAB_ROUTES.OVERVIEW:
        if (currentUserRole === UserRoles.CLIENT) {
          return null;
        }

        switch (currentTabViewKey) {
          case TabViewKey.MY_CLIENTS:
          case TabViewKey.MY_PACKAGES:
          case TabViewKey.MY_STAFFS:
            return null;
          case TabViewKey.MY_SERVICES:
            return (
              <HeaderRightAction title="Add Service" navigateRoute={PRIVATE_ROUTES.ADD_SERVICE} />
            );
          default:
            return null;
        }

      default:
        return null;
    }
  };

  return (
    <Header
      leftComponent={<HeaderLeft />}
      middleComponent={<HeaderMiddle />}
      rightComponent={<HeaderRight />}
    />
  );
};

export {
  PublicNavigatorHeader,
  ProfileNavigatorHeader,
  SessionsNavigatorHeader,
  BottomTabNavigatorHeader,
  ServiceNavigatorHeader,
};
