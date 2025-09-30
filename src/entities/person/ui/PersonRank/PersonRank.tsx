import type { FC } from 'react';
import { StarFilled } from '@ant-design/icons'
import type { Ranks } from '@shared/types/common';
import { cn } from '@shared/lib'
import classes from './classes.module.scss'

type T = {
  rank?: Ranks,
}

export const PersonRank: FC<T> = ({
  rank = 'hcy',
}) => {

  if (rank === 'k_snt') {
    return (
      <div className={cn([classes.wrapper, classes.cg, classes.ksnt])}>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
      </div>
    )
  }
  if (rank === 'snt') {
    return (
      <div className={cn([classes.wrapper, classes.cg, classes.snt])}>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
      </div>
    )
  }
  if (rank === 'u_snt') {
    return (
      <div className={cn([classes.wrapper, classes.cg, classes.usnt])}>
        <span className={classes.line}></span>
      </div>
    )
  }
  if (rank === 'bg_k_snt') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.ksnt])}>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
      </div>
    )
  }
  if (rank === 'bg_snt') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.snt])}>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
      </div>
    )
  }
  if (rank === 'bg_u_snt') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.usnt])}>
        <span className={classes.line}></span>
      </div>
    )
  }
  if (rank === 'bg_sna') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.starshina])}>
        <span className={classes.line}></span>
      </div>
    )
  }
  if (rank === 'mr') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.mayor])}>
        <span className={classes.star}>
          <StarFilled />
        </span>
      </div>
    )
  }
  if (rank === 'lnt') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.lnt])}>
        <span className={classes.star}>
          <StarFilled />
        </span>
        <span className={classes.star}>
          <StarFilled />
        </span>
      </div>
    )
  }
  if (rank === 'u_lnt') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.ulnt])}>
        <span className={classes.star}>
          <StarFilled />
        </span>
        <span className={classes.star}>
          <StarFilled />
        </span>
        <span className={classes.star}>
          <StarFilled />
        </span>
      </div>
    )
  }
  if (rank === 'kn') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.kapitan])}>
        <span className={classes.star}>
          <StarFilled />
        </span>
        <span className={classes.star}>
          <StarFilled />
        </span>
        <span className={classes.star}>
          <StarFilled />
        </span>
        <span className={classes.star}>
          <StarFilled />
        </span>
      </div>
    )
  }
  if (rank === 'ppk') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.ppk])}>
        <span className={classes.star}>
          <StarFilled />
        </span>
        <span className={classes.star}>
          <StarFilled />
        </span>
      </div>
    )
  }
  if (rank === 'pk') {
    return (
      <div className={cn([classes.wrapper, classes.bg, classes.pk])}>
        <span className={classes.star}>
          <StarFilled />
        </span>
        <span className={classes.star}>
          <StarFilled />
        </span>
        <span className={classes.star}>
          <StarFilled />
        </span>
      </div>
    )
  }
  return (
    <div className={cn([classes.wrapper, classes.cg])}></div>
  )
}
