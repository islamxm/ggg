import type { DBType } from "@shared/config/dbConfig";
import type { Fraction } from "@entities/fraction";

type Options = {
  db: DBType
  fractionId: Fraction['id']
  onSuccess?: (fraction: Fraction) => any
  onError?: DefFunc
  onFinally?: DefFunc
}

export const getFraction = async ({
  db,
  fractionId,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  try {
    let fraction = await db.fractions.get(fractionId)
    if(fraction) {
      onSuccess?.(fraction)
    }
  } catch {
    onError?.()
  }
  onFinally?.()
}
