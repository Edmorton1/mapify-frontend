import {create} from 'zustand';

interface Coordinates {
  lat: number;
  lng: number;
}

type CoordinatesArray = [number, number];

const defaultCoordinates = {lat: 51.505, lng: -0.09};

interface UserPositionState {
  object: Coordinates;
  array: CoordinatesArray;
  fetchPosition: () => void;
}

const useUserPosition = create<UserPositionState>((set) => ({
  object: defaultCoordinates,
  array: [defaultCoordinates.lat, defaultCoordinates.lng],
  fetchPosition: () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const object = {lat, lng};
          const array = [lat, lng] satisfies CoordinatesArray;
          set({object, array});
        },
        (error) => {
          console.error('Error getting coordinates:', error);
          throw new Error(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      throw new Error('Geolocation API not supported');
    }
  }
}));

export default useUserPosition;
