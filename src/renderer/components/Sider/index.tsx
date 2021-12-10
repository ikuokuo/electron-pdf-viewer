import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { SelectInfo } from 'rc-menu/lib/interface';

export const Sider: React.FC<RouteComponentProps> = ({ location, history }) => {
  console.log(`location=${location.pathname}`);

  const menuSelect = (info: SelectInfo) => {
    history.push(`/${info.key}`);
  };

  return (
    <Layout.Sider width={200} theme="light">
      <Menu defaultSelectedKeys={['home']} mode="inline" onSelect={menuSelect}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="pdfjs">PDF.js API</Menu.Item>
        <Menu.Item key="pdfviewer">PDF.js Viewer API</Menu.Item>
        <Menu.Item key="pdfviewerhtml">PDF.js Viewer HTML</Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export const withRouterSider = withRouter(Sider);
