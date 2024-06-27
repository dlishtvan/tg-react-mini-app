import React from 'react';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../router/routerConfig';
import {Button, ButtonGroup, Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className={'footer mt-auto py-2'}>
      <div className={'container'}>
        <Row className={'justify-content-center'}>
          <Col xs={10} md={6}>
            <ButtonGroup aria-label="Basic example" className={'w-100 d-flex'}>
              <Button
                as={NavLink}
                to={ROUTES.Root}
                variant="outline-primary"
                className={'flex-fill'}
              >
                <FontAwesomeIcon icon={'house-user'}/>
                <p className={'m-0'}>
                  <small>Home</small>
                </p>
              </Button>

              <Button
                as={NavLink}
                to={ROUTES.Mine}
                variant="outline-primary"
                className={'flex-fill'}
              >
                <FontAwesomeIcon icon={'hand-holding-dollar'}/>
                <p className={'m-0'}>
                  <small>Mine</small>
                </p>
              </Button>

              <Button
                as={NavLink}
                to={ROUTES.Statistic}
                variant="outline-primary"
                className={'flex-fill'}
              >
                <FontAwesomeIcon icon={'chart-simple'}/>
                <p className={'m-0'}>
                  <small>Statistic</small>
                </p>
              </Button>

              <Button
                as={NavLink}
                to={ROUTES.LeadersBoard}
                variant="outline-primary"
                className={'flex-fill'}
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
