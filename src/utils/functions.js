export const returnType = (obj, type) =>
  obj.map(item => ({
    ...item,
    type
  }))

