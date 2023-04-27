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

import TabViewKey from '@oxvo-mobile/components/TabView/TabViewKey.types';
import { UserRoles } from '@oxvo-mobile/constants/oxvo';
import { BOTTOM_TAB_ROUTES, PRIVATE_ROUTES } from '@oxvo-mobile/constants/routes';
import useCurrentUserRole from '@oxvo-mobile/domains/Me/hooks/useCurrentUserRole';
import {
  BottomTabParamList,
  PrivateStackParamList,
  PublicStackParamList,
} from '@oxvo-mobile/navigation/types';

import useTabViewStore from '../TabView/useTabViewStore';
import { HeaderContainer, LeftElement, MiddleElement, RightElement } from './Header.styled';
import HeaderCompanyInfo from './HeaderCompanyInfo';
import HeaderProfile, { HeaderLeftActionType } from './HeaderProfile';
import HeaderRightAction from './HeaderRightAction';

type HeaderProps = {
  leftComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  rightComponent: React.ReactElement;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = memo<HeaderProps>(({ leftComponent, middleComponent, rightComponent }) => {
  const handleOnLayout = (event) => {
    const { width, x } = event.nativeEvent.layout;
    console.log('HeaderMiddle width:', width);
    console.log('HeaderMiddle x position:', x);
  };
  return (
    <HeaderContainer>
      <LeftElement>{leftComponent}</LeftElement>
      <MiddleElement onLayout={handleOnLayout}>
        <HeaderCompanyInfo />
      </MiddleElement>
      <RightElement>{rightComponent}</RightElement>
    </HeaderContainer>
  );
});

type BottomTabRoutes = keyof BottomTabParamList;
type PrivateRoutes = keyof PrivateStackParamList;
type PublicRoutes = keyof PublicStackParamList;

const ServiceNavigatorHeader = memo(() => {
  // Routes: PRIVATE_ROUTES.ADD_SERVICE
  const HeaderLeft = useCallback(() => {
    return <HeaderProfile action={HeaderLeftActionType.GO_BACK} />;
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
  const HeaderLeft = useCallback(() => {
    switch (route) {
      // Routes: PUBLIC_ROUTES.FORGOT_PASSWORD, PUBLIC_ROUTES.INVITE_CODE, PUBLIC_ROUTES.SIGN_IN, PUBLIC_ROUTES.SIGN_UP
      // Configure components as needed
      default:
        return null;
    }
  }, [route]);

  const HeaderMiddle = useCallback(() => {
    switch (route) {
      // Routes: PUBLIC_ROUTES.FORGOT_PASSWORD, PUBLIC_ROUTES.INVITE_CODE, PUBLIC_ROUTES.SIGN_IN, PUBLIC_ROUTES.SIGN_UP
      // Configure components as needed
      default:
        return null;
    }
  }, [route]);

  const HeaderRight = useCallback(() => {
    switch (route) {
      // Routes: PUBLIC_ROUTES.FORGOT_PASSWORD, PUBLIC_ROUTES.INVITE_CODE, PUBLIC_ROUTES.SIGN_IN, PUBLIC_ROUTES.SIGN_UP
      // Configure components as needed
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

const ProfileNavigatorHeader = memo(({ route }: { route: PrivateRoutes }) => {
  // Routes: PRIVATE_ROUTES.PROFILE.PROFILE_HOME, PRIVATE_ROUTES.PROFILE.CHANGE_PASSWORD, PRIVATE_ROUTES.PROFILE.ACCOUNT_SETTINGS
  const HeaderLeft = useCallback(() => {
    return <HeaderProfile action={HeaderLeftActionType.GO_BACK} />;
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

const SessionsNavigatorHeader = memo(({ route }: { route: PrivateRoutes }) => {
  // Routes: PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME, PRIVATE_ROUTES.SESSIONS.CREATE_SESSION, PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL
  const HeaderLeft = useCallback(() => {
    switch (route) {
      default:
        return null;
    }
  }, [route]);

  const HeaderMiddle = useCallback(() => {
    switch (route) {
      // Routes: PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME, PRIVATE_ROUTES.SESSIONS.CREATE_SESSION, PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL
      // Configure components as needed
      default:
        return null;
    }
  }, [route]);

  const HeaderRight = useCallback(() => {
    switch (route) {
      // Routes: PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME, PRIVATE_ROUTES.SESSIONS.CREATE_SESSION, PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL
      // Configure components as needed
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

const BottomTabNavigatorHeader = memo(({ route }: { route: BottomTabRoutes }) => {
  const { currentTabViewKey } = useTabViewStore((state) => state);
  const currentUserRole = useCurrentUserRole();

  const HeaderLeft = useCallback(() => {
    return <HeaderProfile />;
  }, []);

  const HeaderMiddle = useCallback(() => {
    switch (route) {
      case BOTTOM_TAB_ROUTES.HOME:
        return <HeaderCompanyInfo />;
      default:
        return null;
    }
  }, [route]);

  const HeaderRight = useCallback(() => {
    switch (route) {
      case BOTTOM_TAB_ROUTES.HOME:
      case BOTTOM_TAB_ROUTES.CALENDAR:
        // if (currentUserRole === UserRoles.STAFF) {
        //   return null;
        // } // TODO: Uncomment this
        return (
          <HeaderRightAction
            title="Add Session"
            navigateRoute={PRIVATE_ROUTES.SESSIONS.SESSIONS_NAVIGATOR}
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
  }, [currentTabViewKey, currentUserRole, route]);

  return (
    <Header
      leftComponent={<HeaderLeft />}
      middleComponent={<HeaderMiddle />}
      rightComponent={<HeaderRight />}
    />
  );
});

export {
  PublicNavigatorHeader,
  ProfileNavigatorHeader,
  SessionsNavigatorHeader,
  BottomTabNavigatorHeader,
  ServiceNavigatorHeader,
};
