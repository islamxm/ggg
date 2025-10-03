import type { DBType } from "@shared/config/dbConfig";
import { fractionActions, type Fraction } from "@entities/fraction";

type Options = {
  db: DBType
  dispatch: DispatchType
  fractionId: Fraction['id']
  onSuccess?: () => any
  onError?: DefFunc
  onFinally?: DefFunc
}

export const deleteFraction = async ({
  db,
  dispatch,
  fractionId,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  try {
    await db.fractions.delete(fractionId)
    dispatch(fractionActions.deleteFraction(fractionId))
    onSuccess?.()
  } catch {
    onError?.()
  }
  onFinally?.()
}