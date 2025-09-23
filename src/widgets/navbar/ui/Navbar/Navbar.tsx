import { Menu, Flex } from 'antd';
import { routes, routesMap } from '@shared/config/routeConfig'
import { useLocation, useNavigate } from 'react-router';
import { Logo } from '../Logo/Logo'


export const Navbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <Flex
      vertical
      >
      <Logo/>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[String(routesMap[pathname]?.id ?? routes.find(route => pathname.includes(route.path))?.id ?? '1')]}
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