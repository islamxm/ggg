import { fractionActions } from "@entities/fraction"
import type { DBType } from "@shared/config/dbConfig"
import type { NewFractionData } from "@entities/fraction/model/types"

type Options = {
  db: DBType
  dispatch: DispatchType
  fractionData: NewFractionData
  onSuccess?: (id: number) => any
  onError?: DefFunc
  onFinally?: DefFunc
}

export const addFraction = async ({
  db,
  dispatch,
  fractionData,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  console.log(fractionData)
  try {
    let id = await db.fractions.add({...fractionData, selection: {}})
    console.log(id)
    if(id) {
      dispatch(fractionActions.addFraction({
        ...fractionData, 
        id,
        selection: {}
      }))
      onSuccess?.(id)
    }
  } catch {
    onError?.()
  }
  onFinally?.()
}
