import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';

import { withRouterSider as Sider } from '../components/Sider';
import { Home } from './Home';
import { Pdfjs } from './Pdfjs';
import { PdfViewer } from './PdfViewer';
import { PdfViewerHTML } from './PdfViewerHTML';
import './style.less';

export const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Router>
        <Sider />
        <Layout.Content className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/pdfjs" component={Pdfjs} />
            <Route path="/pdfviewer" component={PdfViewer} />
            <Route path="/pdfviewerhtml" component={PdfViewerHTML} />
          </Switch>
        </Layout.Content>
      </Router>
    </Layout>
  );
};
