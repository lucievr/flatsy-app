import { firestore, convertFlatsSnapshotToMap } from '../../firebase/firebase';

export const FETCH_FLATS_START = 'FETCH_FLATS_START';
export const FETCH_FLATS_SUCCESS = 'FETCH_FLATS_SUCCESS';
export const FETCH_FLATS_FAILURE = 'FETCH_FLATS_FAILURE';

export const fetchFlatsStart = () => ({
  type: FETCH_FLATS_START
});

export const fetchFlatsSuccess = (flatsMap) => ({
  type: FETCH_FLATS_SUCCESS,
  payload: flatsMap
});

export const fetchFlatsFailure = errorMessage => ({
  type: FETCH_FLATS_FAILURE,
  payload: errorMessage
});

export const fetchFlatsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('flats');
    dispatch(fetchFlatsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const flatsMap = convertFlatsSnapshotToMap(snapshot);
        dispatch(fetchFlatsSuccess(flatsMap));
      })
      .catch(error => dispatch(fetchFlatsFailure(error.message)));
  };
};
