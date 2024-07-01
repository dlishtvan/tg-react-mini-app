import React from 'react';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../router/routerConfig';
import {Button, ButtonGroup, Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className={'footer w-100 py-2 position-fixed bottom-0'}>
      <div className={'container'}>
        <Row className={'justify-content-center px-3'}>
          <Col xs={12} md={6}>
            <ButtonGroup aria-label="Basic example" className={'d-flex'}>
              <Button
                as={NavLink}
                to={ROUTES.Root}
                variant="primary"
              >
                <FontAwesomeIcon icon={'house-user'}/>
                <p className={'m-0'}>
                  <small>Home</small>
                </p>
              </Button>

              <Button
                as={NavLink}
                to={ROUTES.Mine}
                variant="primary"
              >
                <FontAwesomeIcon icon={'hand-holding-dollar'}/>
                <p className={'m-0'}>
                  <small>Mine</small>
                </p>
              </Button>

              <Button
                as={NavLink}
                to={ROUTES.Statistic}
                variant="primary"
              >
                <FontAwesomeIcon icon={'chart-simple'}/>
                <p className={'m-0'}>
                  <small>Statistic</small>
                </p>
              </Button>

              <Button
                as={NavLink}
                to={ROUTES.LeadersBoard}
                variant="primary"
              >
                <FontAwesomeIcon icon={'trophy'}/>

                <p className={'m-0'}>
                  <small>Leaders</small>
                </p>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
