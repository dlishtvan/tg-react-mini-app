import React, {useCallback, useMemo} from 'react';
import generateId from '../../utils/generateId';
import {Button, Card, Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch} from 'react-redux';
import {
  incrementScoresPerTap,
  decrementTotalScores,
  addMineByType,
  updateMine,
} from '../../features/user/userSlice';
import {find} from 'lodash';
import {updateUser} from '../../features/user/userAPI';
import IMAGES from '../../configs/base64Images';
import './Mine.scss';
import UserBalance from '../../components/userBalance/UserBalance';

export const Mine = () => {
  const {data} = useSelector((state) => state.user);
  const {types: brandTypes} = useSelector((state) => state.mine.brands);
  const dispatch = useDispatch();

  const handleClick = (brandType) => {
    const existingBrand = getUserBrandByTypeId(brandType.configId);

    if (!existingBrand) {
      dispatch(addMineByType({
        type: 'brands', data: {
          perTap: brandType.perTap,
          configId: brandType.id,
          lvl: 1,
          price: brandType.price,
          id: generateId(),
        },
      }));
    } else {
      const newLvl = existingBrand.lvl + 1;

      const updatedBrand = {
        ...existingBrand,
        lvl: newLvl,
        price: existingBrand.price * newLvl,
      };

      dispatch(updateMine({type: 'brands', data: updatedBrand}));
    }

    dispatch(incrementScoresPerTap(brandType.perTap));
    dispatch(decrementTotalScores(brandType.price));

    dispatch(updateUser());
  };

  const getUserBrandByTypeId = useCallback((id) => {
    return find(data?.mine?.brands, (brand) => brand.configId === id);
  }, [data]);

  const localBrands = useMemo(() => {
    return brandTypes.map((brandType) => {
      const brand = getUserBrandByTypeId(brandType.id) || {lvl: 0};
      return {
        ...brandType,
        ...brand,
      };
    });
  }, [brandTypes, getUserBrandByTypeId]);

  return (
    <div className={'mine align-self-start flex-fill'}>
      <UserBalance/>

      <Row
        className="g-2 flex-fill"
        xs={2}
      >
        {localBrands.map((brand) => (
          <Col key={brand.id}>
            <Card className="h-100">
              <Row className="g-0 flex-grow-1">
                <Col xs={4}>
                  <div className="d-flex h-100 justify-content-center align-items-center flex-column">
                    <FontAwesomeIcon
                      icon={['fab', brand.icon]}
                      size="2x"
                    />
                    <p className={'m-0'}>
                      <small>lvl {brand.lvl}</small>
                    </p>
                  </div>
                </Col>

                <Col>
                  <Card.Body className="d-flex flex-column h-100">
                    <Card.Title>{brand.title}</Card.Title>

                    <Card.Text>
                      <FontAwesomeIcon
                        icon={'bolt'}
                        className={'me-1 text-warning'}
                      />

                      +{brand.perTap} per tap
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>

              <Row className={'mt-auto'}>
                <Col xs={12}>
                  <Card.Footer>
                    <Button
                      className={'d-flex align-items-center m-auto'}
                      variant={'success'}
                      disabled={brand.price > data.totalScores}
                      onClick={() => handleClick(brand)}
                    >
                      <img
                        className="coin img me-2"
                        src={IMAGES.coin}
                      />

                      {brand.price}
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
