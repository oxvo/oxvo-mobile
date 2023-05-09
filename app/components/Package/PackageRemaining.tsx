import { FC } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Octicons } from '@expo/vector-icons';

import CircleProgress from './CircleProgress';
import getIconByNumber from './IconHelper';

const PACKAGE = [
  {
    remainingCount: 3,
    totalCount: 15,
    companyServiceType: 5,
    companyServiceName: 'GYM',
    detail: 'test',
    lecture_by: 'Mia Goth',
    companyServicePackageName: 'Silver Package',
  },
  {
    remainingCount: 10,
    totalCount: 15,
    companyServiceType: 10,
    companyServiceName: 'Swimming',
    detail: 'test',
    lecture_by: 'Mia Goth',
    companyServicePackageName: 'Silver Package',
  },
  {
    remainingCount: 1,
    totalCount: 15,
    detail: 'test',
    companyServiceType: 15,
    companyServiceName: 'Yoga',
    lecture_by: 'Mia Goth',
    companyServicePackageName: 'Golden Package',
  },
];
type Package = {
  lecture_by: string;
  companyServiceType: number;
  companyServiceName: string;
  detail: string;
  remainingCount: number;
  totalCount: number;
  companyServicePackageName: string;
};

const Package: Package[] = PACKAGE.map((item, index) => ({
  ...item,
  index,
}));
const Remaining: FC = () => {
  return (
    <>
      {Package.map((item) => {
        const ServiceTypeIcon = getIconByNumber(item.companyServiceType);

        return (
          <View style={[styles.taskContainer]}>
            {item.remainingCount <= 3 ? <View style={[styles.status]} /> : null}
            <View style={[styles.task]}>
              {item.remainingCount <= 3 ? (
                <View style={styles.iconContainer}>
                  <Octicons name="alert" size={18} color="#F6BA6F" />
                  <Text style={styles.iconText}>Paketinizi yükseltin</Text>
                </View>
              ) : null}
              <View style={styles.iconBackground}>{ServiceTypeIcon}</View>
              <View style={styles.circlePosition}>
                <CircleProgress max={item.totalCount} current={item.remainingCount}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <Text style={styles.text}>{item.remainingCount}</Text>
                    <View
                      style={{
                        height: 2,
                        width: '40%',
                        backgroundColor: '#CCCC',
                        transform: [{ rotate: '-76deg' }],
                      }}
                    />
                    <Text style={styles.text}>{item.totalCount}</Text>
                  </View>
                </CircleProgress>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: 8,
                }}
              >
                <Text style={styles.package_text}>{item.companyServiceName}</Text>
                <Text style={styles.lecture_by}>with {item.lecture_by}</Text>
              </View>

              <Text style={styles.package_type_text}>{item.companyServicePackageName}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  circlePosition: {
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
  iconBackground: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 32,
    padding: 12,
  },
  iconContainer: {
    position: 'absolute',
    top: 6,
    left: 6,
    display: 'flex',
    flexDirection: 'row',
  },
  customer: {
    fontSize: 12,
    color: '#343144',
  },
  package_type_text: {
    position: 'absolute',
    right: 6,
    top: 6,
    fontSize: 12,
    fontWeight: '600',
  },
  lecture_by: {
    color: '#9BA4B5',
    fontSize: 10,
    marginTop: 8,
  },
  package_text: {
    fontSize: 14,
    fontWeight: '500',
  },
  iconText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#F6BA6F',
    marginLeft: 4,
  },
  status: {
    backgroundColor: '#FFE58A',
    width: '91%',
    height: '105%',
    position: 'absolute',
    bottom: '20%',
    borderRadius: 10,
    shadowColor: '#FFE58A',
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 60,
  },
  task: {
    width: '90%',
    height: 88,
    alignItems: 'center',
    paddingTop: 25,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    // Shadow for iOS
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  },
  taskTitle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },

  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#A084DC',
    textAlign: 'center',
  },
});

export default Remaining;
