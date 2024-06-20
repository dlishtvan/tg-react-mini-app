import store from '../../app/store';
import {addUser, fetchUserById} from '../../features/user/userAPI';

const userLoader = async ({params}) => {
  const {dispatch} = store;
  const {user} = store.getState();
  const id = user.dataTG.id;

  try {
    const data = await dispatch(fetchUserById(id));

    if (!data || !data.payload) {
      await dispatch(addUser({id, payload: {id, username: 'New User', scores: 0}}));
    }
  } catch (err) {
    console.error('Error fetching or creating user:', err);
  }

  return user;
};

export default userLoader;
