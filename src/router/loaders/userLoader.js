import store from '../../app/store';
import {addUser, fetchUserById} from '../../features/user/userAPI';

const userLoader = async ({params}) => {
  const {dispatch} = store;
  const {user} = store.getState();
  const {id, username} = user.dataTG;

  try {
    const data = await dispatch(fetchUserById(id));

    if (!data || !data.payload) {
      const payload = {
        id,
        username,
        level: {
          current: 1,
          scores: 0,
        },
        totalScores: 0,
        scoresPerTap: 1,
      };

      await dispatch(addUser({id, payload}));
    }
  } catch (err) {
    console.error('Error fetching or creating user:', err);
  }

  return user;
};

export default userLoader;
