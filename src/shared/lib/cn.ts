export const cn = (classes: Array<any>) => {
  return classes.filter(cl => typeof cl === 'string').join(' ')
}