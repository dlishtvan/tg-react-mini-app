import React from 'react';
import IMAGES from '../../configs/base64Images';
import {useSelector} from 'react-redux';
import './UserBalance.scss';
import {Col, Row} from 'react-bootstrap';

const UserBalance = () => {
  const {data} = useSelector((state) => state.user);

  return (
    <Row className={'mb-3'}>
      <Col>
        <div className="user-balance d-flex align-items-center justify-content-center">
          <img
            className="coin img me-2"
            src={IMAGES.coin}
          />

          <h1 className={'mb-0'}>{data.totalScores}</h1>
        </div>
      </Col>
    </Row>
  );
};

export default UserBalance;
