import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Row } from 'reactstrap';
import { connect } from '../../actions/atorch';
import * as locals from './index.scss';
import { PrintReport } from './PrintReport';
import { RootState } from '../../reducers';
import { AppDispatch } from '../../configureStore';

export const AtorchConsole: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const connected = useSelector((state: RootState) => state.report.connected);
  const latest = useSelector((state: RootState) => state.report.latest);
  const onConnect = () => dispatch(connect());
  return (
    <Container className={locals.container}>
      <Row className='ml-2 justify-content-center'>
        <Button outline onClick={onConnect}>
          {connected ? 'Disconnect' : 'Connect'}
        </Button>
      </Row>
      <PrintReport packet={latest} />
    </Container>
  );
};
