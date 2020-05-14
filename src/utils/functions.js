export const returnType = (obj, type) => {
  return obj.map(item => ({
    ...item,
    type
  }))
}