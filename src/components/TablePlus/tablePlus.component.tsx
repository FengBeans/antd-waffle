import React, { useContext, ReactNode } from 'react';
import { Table, TableProps } from 'antd';
import TablePlusTitle from './tablePlusTitle.component';
import TablePlueOperating from './tablePlusOperating/tablePlusOperating.component'
import classnames from 'classnames';
import './tablePlus.component.less';
import { ConfigContext } from '@constants/config-provide';

export interface TablePlueProps<RecordType>
  extends Omit<TableProps<RecordType>, 'title'> {
  title?: ReactNode | string;
  className?: string;
}

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const col = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function TablePlus<RecordType extends object = any>(
  props: TablePlueProps<RecordType>
) {
  const { title, className } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('tablePlue-container-root');


  return (
    <div className={classnames(prefixCls, className)}>
      <TablePlusTitle
        title={title}
      />
      <TablePlueOperating

      />
      <Table columns={col} dataSource={dataSource} />
    </div>
  );
}

export default TablePlus;