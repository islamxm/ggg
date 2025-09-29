import { useState, type FC, type PropsWithChildren } from 'react';
import { Button, Layout, theme } from 'antd';
import { Navbar } from '@widgets/navbar';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import classes from './classes.module.scss'
import { useInitData } from '../../hooks/useInitData';
import { ToastContainer } from '@shared/ui/ToastContainer';


const { Header, Sider, Content } = Layout;

export const PageLayout: FC<PropsWithChildren> = ({
  children
}) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  useInitData()

  return (
    <Layout style={{ height: '100%' }}>
      <ToastContainer/>
      <Sider className={classes.sider} trigger={null} collapsible collapsed={collapsed}>
        <Navbar />
      </Sider>
      <Layout>
        <Header className={classes.header} style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          overflow: 'auto'
        }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}