import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to React',
      partials: {
        header: {
          profile: 'Profile',
          createSession: 'Create Session',
          addService: 'Add Service',
        },
        bottomTabBar: {
          home: 'Home',
          calendar: 'Calendar',
          notification: 'Notification',
          overview: 'Overview',
        },
      },
      screens: {
        privateScreens: {
          addService: {},
          calendar: {},
          home: {
            lastCounts: 'Last Counts',
            todaysSessions: "Today's Sessions",
          },
          notifications: {},
          overview: {
            tabView: {
              myNetwork: {
                myClients: {},
                myStaffs: {},
              },
              myUpdates: {
                myPackages: {},
                myServices: {},
              },
            },
          },
          profile: {
            accountSettings: {},
            changePassword: {},
            profileHome: {},
          },
          sessions: {
            createSession: {},
            sessionDetail: {},
            sessionHome: {},
          },
        },
        publicScreens: {
          partials: {
            header: {},
            bottom: {},
          },
          screens: {
            auth: {
              forgotPassword: {},
              inviteCode: {},
              signIn: {},
              signUp: {},
            },
          },
        },
      },
    },
  },
  tr: {
    translation: {
      welcome: 'Welcome to React',
      partials: {
        header: {
          profile: 'Profil',
          createSession: 'Seans Oluştur',
          addService: 'Hizmet Ekle',
        },
        bottomTabBar: {
          home: 'Ana Sayfa',
          calendar: 'Takvim',
          notification: 'Bildirimler',
          overview: 'Genel Bakış',
        },
      },
      screens: {
        privateScreens: {
          addService: {},
          calendar: {},
          home: {
            lastCounts: 'Güncel Paketler',
            todaysSessions: 'Bugunkü Oturumlar',
          },
          notifications: {},
          overview: {
            tabView: {
              myNetwork: {
                myClients: {},
                myStaffs: {},
              },
              myUpdates: {
                myPackages: {},
                myServices: {},
              },
            },
          },
          profile: {
            accountSettings: {},
            changePassword: {},
            profileHome: {},
          },
          sessions: {
            createSession: {},
            sessionDetail: {},
            sessionHome: {},
          },
        },
        publicScreens: {
          partials: {
            header: {},
            bottom: {},
          },
          screens: {
            auth: {
              forgotPassword: {},
              inviteCode: {},
              signIn: {},
              signUp: {},
            },
          },
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'tr',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
