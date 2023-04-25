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
import { View } from 'react-native';

import TabViewKey from '@oxvo-mobile/components/TabView/TabViewKey.types';
import { UserRoles } from '@oxvo-mobile/constants/oxvo';
import { BOTTOM_TAB_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from '@oxvo-mobile/constants/routes';
import useCurrentUserRole from '@oxvo-mobile/domains/Me/hooks/useCurrentUserRole';

import styled from 'styled-components/native';

import useTabViewStore from '../TabView/useTabViewStore';
import { HeaderContainer } from './Header.styled';
import HeaderCompanyInfo from './HeaderCompanyInfo';
import HeaderProfile, { HeaderLeftActionType } from './HeaderProfile';
import HeaderRightAction from './HeaderRightAction';

const HeaderMiddleContainer = styled.View`
  width: 49px;
`;

type HeaderProps = {
  leftComponent: React.ReactNode;
  middleComponent: React.ReactNode;
  rightComponent: React.ReactElement;
};

const Header = memo<HeaderProps>(({ leftComponent, middleComponent, rightComponent }) => {
  return (
    <HeaderContainer>
      {leftComponent}
      <HeaderMiddleContainer>{middleComponent}</HeaderMiddleContainer>
      {rightComponent}
    </HeaderContainer>
  );
});

type BottomTabRoutes = (typeof BOTTOM_TAB_ROUTES)[keyof typeof BOTTOM_TAB_ROUTES];
type PrivateRoutes = (typeof PRIVATE_ROUTES)[keyof typeof PRIVATE_ROUTES];
type PublicRoutes = (typeof PUBLIC_ROUTES)[keyof typeof PUBLIC_ROUTES];

const ServiceNavigatorHeader = memo(() => {
  // Routes: PRIVATE_ROUTES.ADD_SERVICE
  const HeaderLeft = useCallback(() => {
    return (
      <HeaderProfile
        navigateRoute={BOTTOM_TAB_ROUTES.OVERVIEW}
        action={HeaderLeftActionType.GO_BACK}
      />
    );
  }, []);

  const HeaderMiddle = useCallback(() => {
    return <HeaderCompanyInfo />;
  }, []);

  const HeaderRight = useCallback(() => {
    return <View />;
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
    return <HeaderProfile />;
  }, []);

  const HeaderMiddle = useCallback(() => {
    switch (route) {
      // Routes: PRIVATE_ROUTES.PROFILE.PROFILE_HOME, PRIVATE_ROUTES.PROFILE.CHANGE_PASSWORD, PRIVATE_ROUTES.PROFILE.ACCOUNT_SETTINGS
      // Configure components as needed
      default:
        return null;
    }
  }, [route]);

  const HeaderRight = useCallback(() => {
    switch (route) {
      // Routes: PRIVATE_ROUTES.PROFILE.PROFILE_HOME, PRIVATE_ROUTES.PROFILE.CHANGE_PASSWORD, PRIVATE_ROUTES.PROFILE.ACCOUNT_SETTINGS
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

const SessionsNavigatorHeader = memo(({ route }: { route: PrivateRoutes }) => {
  const HeaderLeft = useCallback(() => {
    switch (route) {
      // Routes: PRIVATE_ROUTES.SESSIONS.SESSIONS_HOME, PRIVATE_ROUTES.SESSIONS.CREATE_SESSION, PRIVATE_ROUTES.SESSIONS.SESSION_DETAIL
      // Configure components as needed
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
