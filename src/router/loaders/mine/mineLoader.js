import store from '../../../app/store';
import {fetchBrands} from '../../../features/mine/mineAPI';

const mineLoader = async () => {
  const {dispatch} = store;
  const {mine} = store.getState();

  try {
    if (mine.brands.types.length) {
      return null;
    }

    await dispatch(fetchBrands());
  } catch (err) {
    console.error('Error fetching or creating user:', err);
  }

  return null;
};

export default mineLoader;
