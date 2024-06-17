import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import {useTelegram} from '../hooks/useTelegram';
import {useAddUserMutation} from '../features/users/api/UsersAPI';
import {useDispatch} from 'react-redux';
import {usersAPI} from '../features/users/api/UsersAPI';

export const Main = () => {
  const {user} = useTelegram();
  const [error, setError] = useState(null);
  const [addUser, {isLoading: isCreating, error: createError}] = useAddUserMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      if (!user.username) return;

      // setLoading(true);
      // setError(null);

      try {
        const data = await dispatch(usersAPI.endpoints.getUserByUsername.initiate(user.username)).unwrap();

        if (!data) {
          const createdUser = await addUser({username: user.username, body: {...user, scores: 0}}).unwrap();
          // setUser(createdUser);
          console.log('User created:', createdUser);
        } else {
          // setUser(existingUser);
          // console.log('User already exists:', existingUser);
        }
      } catch (err) {
        setError(err);
        console.error('Error fetching or creating user:', err);
      } finally {
        // setLoading(false);
      }
    };

    fetchUser();
  }, [dispatch, user, addUser]);

  return (
    <>
      {/* <Navbar/>*/}
      <Header/>

      <main className={'container d-flex flex-grow-1'}>
        <Outlet/>
      </main>

      <Footer/>

      {/* <Toast/>*/}
    </>
  );
};
