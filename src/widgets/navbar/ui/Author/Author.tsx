import { Typography } from "antd"
import classes from './classes.module.scss'

export const Author = () => {
  return (
    <div style={{padding: 10, textAlign: 'center'}}>
      <Typography.Text style={{color: '#69c0ff', fontWeight: 200, fontSize: 12}}>
        <span style={{opacity: .3}}>Madaminow Islam Adylbekowiç</span>
        <br/>
        <a href="https://github.com/islamxm" className={classes.link} style={{opacity: .3, color: '#69c0ff'}}>
          https://github.com/islamxm
        </a>
      </Typography.Text>
    </div>

  )
}