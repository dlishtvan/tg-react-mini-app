import React from 'react';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../router/routerConfig';
import {Button, ButtonGroup} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={'footer mt-auto py-2'}>
      <div className={'container d-flex justify-content-center'}>
        <ButtonGroup aria-label="Basic example">
          <Button
            as={NavLink}
            to={ROUTES.Root}
            variant="outline-primary"
          >Home</Button>
          <Button
            as={NavLink}
            to={ROUTES.Statistic}
            variant="outline-primary"
          >
            Statistic
          </Button>
          <Button
            as={NavLink}
            to={ROUTES.LeadersBoard}
            variant="outline-primary"
          >
            Leaders Board
          </Button>
        </ButtonGroup>
      </div>
    </footer>
  );
};

export default Footer;
