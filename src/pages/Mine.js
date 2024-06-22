import React from 'react';
import {Button, Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';

const cards = [
  {
    id: 1,
    icon: 'linkedin',
    title: 'LinkedIn',
    lvl: 0,
    perTap: 1,
    price: 100,
  },
  {
    id: 2,
    icon: 'youtube',
    title: 'Youtube',
    perTap: 2,
    lvl: 0,
    price: 200,
  },
  {
    id: 3,
    icon: 'apple',
    title: 'Apple',
    perTap: 3,
    lvl: 0,
    price: 300,
  },
  {
    id: 4,
    icon: 'fa-square-x-twitter',
    title: 'X',
    perTap: 4,
    lvl: 0,
    price: 400,
  },
];

export const Mine = () => {
  const {data} = useSelector((state) => state.user);

  const handleClick = (card) => {
    debugger;
  };

  return (
    <div className={'align-self-start flex-fill'}>
      <Row className={'my-3'}>
        <Col>
          <h1 className={'text-center m-0'}>
            <FontAwesomeIcon
              icon={'coins'}
              className={'me-1'}
            />
            {data.totalScores}
          </h1>
        </Col>
      </Row>
      <Row
        className="g-2 flex-fill"
        xs={2}
      >
        {cards.map((card) => (
          <Col key={card.id}>
            <Card className="h-100">
              <Row className="g-0">
                <Col xs={4}>
                  <div className="d-flex h-100 justify-content-center align-items-center">
                    <FontAwesomeIcon
                      icon={['fab', card.icon]}
                      size="2x"
                    />
                  </div>
                </Col>

                <Col>
                  <Card.Body className="d-flex flex-column h-100">
                    <Card.Title>{card.title}</Card.Title>

                    <Card.Text>
                      <p>
                        <FontAwesomeIcon
                          icon={'bolt'}
                          className={'me-1 text-warning'}
                        />
                        +{card.perTap} per tap
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>

              <Row className={'mt-auto'}>
                <Col xs={12}>
                  <Card.Footer className={'text-center'}>
                    <Button
                      variant={'success'}
                      disabled={card.price > data.totalScores}
                      onClick={() => handleClick(card)}
                    >
                      <FontAwesomeIcon
                        icon={'coins'}
                        className={'me-1'}
                      />
                      {card.price}
                    </Button>
                  </Card.Footer>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
