import { fractionActions } from "@entities/fraction"
import type { SelectionData } from "@entities/selection"
import type { DBType } from "@shared/config/dbConfig"


type Options = {
  db: DBType
  dispatch: DispatchType
  data: {
    fractionId: number,
    selection: SelectionData
  }
  onSuccess?: DefFunc
  onError?: DefFunc
  onFinally?: DefFunc
}

export const addSelection = async ({
  db,
  dispatch,
  data,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  try {
    const { fractionId, selection } = data
    let id = await db.fractions.update(fractionId, { selection })
    if (id) {
      dispatch(fractionActions.updateFractionSelection({ fractionId, selection }))
      onSuccess?.()
    }
  } catch {
    onError?.()
  }
  onFinally?.()
}
