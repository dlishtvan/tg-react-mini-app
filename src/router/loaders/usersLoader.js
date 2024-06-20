import store from '../../app/store';
import {fetchUsers} from '../../features/user/userAPI';

const userLoader = async () => {
  const {dispatch} = store;

  try {
    await dispatch(fetchUsers());
  } catch (err) {
    console.error('Error fetching or creating user:', err);
  }

  return null;
};

export default userLoader;
