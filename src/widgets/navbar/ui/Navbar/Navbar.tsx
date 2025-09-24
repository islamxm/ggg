import { Menu, Flex } from 'antd';
import { routes, routesMap } from '@shared/config/routeConfig'
import { useLocation, useNavigate } from 'react-router';
import { Logo } from '../Logo/Logo'
import { useEffect, useRef, useState } from 'react';


export const Navbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  useEffect(() => setSelectedKeys([String(routesMap[pathname]?.id ?? routes.find(route => pathname.includes(route.path))?.id ?? '1')]), [pathname])




  return (
    <Flex
      vertical
      >
      <Logo/>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        // defaultSelectedKeys={selectedKeys}
        items={
          routes.map(({id,path,label,icon}) => ({
            onClick: () => navigate(path),
            key: id,
            icon,
            label,
          }))
        }
      />
    </Flex>

  )
}