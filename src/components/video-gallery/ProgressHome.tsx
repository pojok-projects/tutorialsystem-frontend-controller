import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton';

function ProgressHome() {
  return (
    <Container>
      <Row className='pt-4'>
        <Col sm={8} xs={12}>
          <Row>
            <Col xs={12}>
              <p><Skeleton height={200} duration={4} /></p>
            </Col>
            {[0,1,2,3,4,5,6,7,8,9,10,11].map(val => 
              <Col key={val} sm={4} xs={12} className='mb-3'>
                <Skeleton circle={true} height={120} duration={4} />
                {[0,1].map(child =>
                  <Skeleton key={child} duration={4} />
                )}
              </Col>
            )}
          </Row>
        </Col>
        <Col sm={4} xs={12}>
          <Row>
            <Col xs={12}>
            <Skeleton duration={4} height={20}/>
            </Col>
            {[0,1,2].map(val => {
              return (
                <React.Fragment key={val}>
                  <Col xs={5} className='mb-3'>
                    <Skeleton circle={true} height={100} duration={4} />
                  </Col>
                  <Col xs={7} className='pl-0 mb-3'>
                    {[0,1,2].map(childSmall =>
                      <Skeleton key={childSmall} duration={4} />
                    )}
                  </Col>
                </React.Fragment>
               )
             }
            )}
          </Row>
        </Col>
      </Row>
    </Container>

  )
}

export default ProgressHome;
