export const tdd = (n:number) => {
  if(n.toString().length === 2) {
    return n.toString()
  } 
  if(n.toString().length === 1) {
    return `0${n}`
  }
}