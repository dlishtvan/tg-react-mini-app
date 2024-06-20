import React, {useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../features/user/userAPI';
import {incrementScores} from '../features/user/userSlice';
import {debounce} from 'lodash';

const Tapper = () => {
  const dispatch = useDispatch();
  const {id} = useSelector((state) => state.user.dataTG);
  const {data} = useSelector((state) => state.user);

  const updateHandles = useMemo(() => debounce((data) => {
    dispatch(updateUser({id, payload: data}));
  }, 1000),
  [id, dispatch]);

  const onClick = () => {
    dispatch(incrementScores(1));

    updateHandles({...data, scores: data.scores + 1});
  };

  return (
    <>
      <h1>Total Taps: {data.scores}</h1>

      <div
        className="img-wrapper"
        onClick={onClick}
      >
        <img
          src={'./pngtree-hamster-png-with-ai-generated-png-image_11563624.png'}
          alt="logo"
        />
      </div>
    </>
  );
};

export default Tapper;
