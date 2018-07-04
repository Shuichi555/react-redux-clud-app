// reducerでも同じ値を使うため、変数定義
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

/* original before refactoring?
export const increment = () => {
  return {
  type: "INCRIMENT"
  }
}
*/
