import { useState, type FC, type PropsWithChildren } from 'react';
import { Button, Layout, theme, Flex } from 'antd';
import { Navbar } from '@widgets/navbar';
import { PageNavigation } from '@features/page-navigation';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import classes from './classes.module.scss'
import { useInitData } from '../../hooks/useInitData';
import { ToastContainer } from '@shared/ui/ToastContainer';
import { DbImportExport } from '@features/db-import-export';

const { Header, Content } = Layout;

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
      <ToastContainer />
      <Navbar collapsed={collapsed} trigger={null} className={classes.sider} />
      <Layout>
        <Header className={classes.header} style={{ padding: '0 15px', background: colorBgContainer }}>
          <Flex gap={5} align={'center'} justify={'space-between'}>
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
            <Flex align={'center'} gap={10}>
              <PageNavigation />
              <DbImportExport />
            </Flex>
          </Flex>

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