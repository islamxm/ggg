import { Flex } from 'antd'
import classes from './classes.module.scss'
import logo from '../../../../assets/logo.png'
import type { FC } from 'react'
import { cn } from '@shared/lib'

type Props = { minimize?: boolean }

export const Logo: FC<Props> = ({ minimize }) => {
  return (
    <div className={cn([classes.wrapper, minimize && classes.min])}>
      <Flex justify='center' align={'center'}>
        <img src={logo} className={classes.img} />
        <Flex vertical className={classes.label}>
          <span>Goşun</span>
          <span>Gulluk</span>
        </Flex>
      </Flex>
    </div>
  )
}