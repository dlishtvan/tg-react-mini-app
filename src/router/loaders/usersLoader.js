import store from '../../app/store';
import {fetchUsers} from '../../features/user/userAPI';

const userLoader = async () => {
  const {dispatch} = store;
  const {user} = store.getState();

  try {
    if (user.list.length) {
      return null;
    }

    await dispatch(fetchUsers());
  } catch (err) {
    console.error('Error fetching or creating user:', err);
  }

  return null;
};

export default userLoader;
