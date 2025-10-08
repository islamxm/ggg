import { Menu, Flex, Layout, type SiderProps } from 'antd';
import { routes, routesMap } from '@shared/config/routeConfig'
import { useLocation, useNavigate } from 'react-router';
import { Logo } from '../Logo/Logo'
import { useEffect, useState, type FC } from 'react';


type Props = SiderProps

export const Navbar: FC<Props> = ({
  collapsed,
}) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  useEffect(() => setSelectedKeys([String(routesMap[pathname]?.id ?? routes.find(route => pathname.includes(route.path))?.id ?? '1')]), [pathname])

  return (
    <Layout.Sider
      collapsed={collapsed}
    >
      <Flex
        vertical
        gap={20}
        justify={'space-between'}
        style={{ height: '100%' }}
      >
        <Flex vertical gap={20}>
          <Logo minimize={collapsed} />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            items={
              routes.map(({ id, path, label, icon }) => ({
                onClick: () => navigate(path),
                key: id,
                icon,
                label,
              }))
            }
          />
        </Flex>
        {/* <Author /> */}
      </Flex>
    </Layout.Sider>
  )
}