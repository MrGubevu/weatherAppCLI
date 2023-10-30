import { useEffect, useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import GetLocation from 'react-native-get-location';

const useLocation = () => {
  const [permissionGranted, setPermissionGranted] = useState(false); 

  useEffect(() => {
    async function getLocalPermission() {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'This app needs location permission to determine your current location.',
              buttonNegative: 'DENY',
              buttonPositive: 'ALLOW',
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setPermissionGranted(true);
            getCurrentLocation();
          } else {
            console.log('Location permission denied');
          }
        } catch (error) {
          console.error('Error requesting location permission:', error);
        }
      }
    }

    getLocalPermission();
  }, []);

  function getCurrentLocation() {
    if (permissionGranted) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          console.log(location);
        })
        .catch(error => {
          const { code, message } = error;
          console.warn('Location error:', code, message);
        });
    } else {
      console.log('Permission not granted, cannot get location.');
    }
  }
};

export default useLocation;
