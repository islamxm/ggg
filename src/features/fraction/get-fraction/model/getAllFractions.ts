import type { DBType } from "@shared/config/dbConfig";
import type { Fraction } from "@entities/fraction";

type Options = {
  db: DBType
  onSuccess?: (fraction: Array<Fraction>) => any
  onError?: DefFunc
  onFinally?: DefFunc
}

export const getAllFractions = async ({
  db,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  try {
    let fractions = await db.fractions.toArray()
    onSuccess?.(fractions)
  } catch {
    onError?.()
  }
  onFinally?.()
}
