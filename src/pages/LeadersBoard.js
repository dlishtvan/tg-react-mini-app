import React from 'react';
import {Badge, ListGroup} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const LeadersBoard = () => {
  const {list, data} = useSelector((state) => state.user);

  const leaders = (idx) => {
    switch (idx) {
      case 1:
        return 'warning';

      case 2:
        return 'success';


      case 3:
        return 'primary';

      default:
        return null;
    }
  };

  return (
    <>
      <ListGroup as="ol" numbered className={'w-100'}>
        {
          list.map((item, idx) => {
            return (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
                key={item.id}
                variant={leaders(idx + 1)}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {
                      item.id === data.id ? <FontAwesomeIcon icon='star' className={'me-1'}/> : null
                    }
                    {item.username}</div>
                </div>
                <Badge bg="primary" pill>
                  {item.scores.total}
                </Badge>
              </ListGroup.Item>
            );
          })
        }
      </ListGroup>
    </>
  );
};
