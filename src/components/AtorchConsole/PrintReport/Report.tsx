import classNames from 'classnames';
import { map } from 'lodash-es';
import React from 'react';
import { Table } from 'reactstrap';
import * as locals from './index.scss';

interface Props {
  record: React.ReactNode[][];
}

export const Report: React.FC<Props> = ({ record }) => (
  <Table hover borderless size='sm'>
    <thead>
      <tr>
        <th className={classNames('text-right', locals.name)}>#</th>
        <th>Value</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {map(record, ([name, value, button], index: number) => (
        <tr key={index}>
          <td className={classNames('text-monospace', 'text-right')}>{name}</td>
          <td>{value}</td>
          <td>{button}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
