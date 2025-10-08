import type { Achieve } from "@entities/achieve/model/types"
import { Tooltip } from "antd"
import type { FC } from "react"
import { achieves } from "@entities/achieve/model/consts"
import {DeleteOutlined} from '@ant-design/icons'
import {Button} from "antd"
import classes from './classes.module.scss'
import { dangerBtnDefProps } from "@shared/config/dangerBtnDefProps"

type Props = Achieve & {
  onDelete?: DefFunc
}

export const AchieveIcon:FC<Props> = ({
  achieveType
}) => {

  return (
    <Tooltip title={achieves[achieveType].label}>
      <div className={classes.wrapper}>
        <Button
          {...dangerBtnDefProps}
          size={'small'}
          shape={'circle'}
          icon={<DeleteOutlined/>}
          className={classes.delete}
          />
          {achieveType === 'mb' && <></>}
          {achieveType === 'sb' && <></>}
          {achieveType === 'omh' && <></>}
          {achieveType === 'mh' && <></>}
          {achieveType === 'hh' && <></>}
          {achieveType === '50g' && <></>}
          {achieveType === '100g' && <></>}
          {achieveType === '150g' && <></>}
          {achieveType === 'ht1' && <></>}
          {achieveType === 'ht2' && <></>}
          {achieveType === 'ht3' && <></>}
          {achieveType === 'ge' && <></>}
          {achieveType === 'rg' && <></>}
      </div>
    </Tooltip>
  )

}