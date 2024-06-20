import React from 'react';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../router/routerConfig';
import {Button, ButtonGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className={'footer mt-auto py-2'}>
      <div className={'container d-flex justify-content-center'}>
        <ButtonGroup aria-label="Basic example">
          <Button
            as={NavLink}
            to={ROUTES.Root}
            variant="outline-primary"
          >
            <FontAwesomeIcon icon={'house-user'} className={'me-1'}/>
            Home
          </Button>
          <Button
            as={NavLink}
            to={ROUTES.Statistic}
            variant="outline-primary"
          >
            <FontAwesomeIcon icon={'chart-simple'} className={'me-1'}/>
            Statistic
          </Button>
          <Button
            as={NavLink}
            to={ROUTES.LeadersBoard}
            variant="outline-primary"
          >
            <FontAwesomeIcon icon={'trophy'} className={'me-1'}/>
            Leaders Board
          </Button>
        </ButtonGroup>
      </div>
    </footer>
  );
};

export default Footer;
