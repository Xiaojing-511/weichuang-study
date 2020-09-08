import React, { Component } from 'react'

import { Table, Space } from 'antd';

import { Get } from "react-axios";

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
      text ? <span>已上线</span> : <span>已下线</span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>编辑</a>
        <a>上线</a>
        <a>下线</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


export default class Banner extends Component {
  render() {

    return (
      <div>
        <Get url="https:www.qmtech.com/getBannerList" >
          {(error, response, isLoading, onReload) => {
            if (error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
            }
            else if (isLoading) {
              return (<div>Loading...</div>)
            }
            else if (response !== null) {
              // console.log(response);
              return (<Table rowKey={(record) => (record.id)} columns={columns} dataSource={response.data.list} />)
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )
  }
}
