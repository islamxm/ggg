import type { FC, ReactNode } from "react"
import type { Deviation, Selection } from '../../model/types'
import classes from './classes.module.scss'
import { cn } from "@shared/lib"
import { selectionTypes } from "@entities/selection/model/consts"

const deviationToClassname = (deviation: Deviation) => {
  switch (deviation) {
    case '+':
      return classes.plus
    case '-':
      return classes.minus
    case '--':
      return classes.hardMinus
    default:
      return ''
  }
}

type Props = Selection & {
  actionSlot?: ReactNode
}

export const SelectionItem: FC<Props> = ({
  description,
  deviation,
  actionSlot
}) => {


  return (
    <div
      style={{
        backgroundColor: selectionTypes[deviation].color,
        borderColor: selectionTypes[deviation].borderColor
      }}
      className={cn([classes.wrapper, deviationToClassname(deviation)])}>
      {actionSlot && <div className={classes.action}>{actionSlot}</div>}
      <div className={classes.content}>
        <p className={cn([classes.description, deviation === '--' && classes.light])}>
          {description}
        </p>
      </div>
    </div>
  )
}