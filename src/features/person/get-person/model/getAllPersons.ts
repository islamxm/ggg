import type { DBType } from "@shared/config/dbConfig";
import { type Person } from "@entities/person"

type Options = {
  db: DBType
  onSuccess?: (person: Array<Person>) => any
  onError?: DefFunc
  onFinally?: DefFunc
}

export const getAllPersons = async ({
  db,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  try {
    let persons = await db.persons.toArray()
    onSuccess?.(persons)
  } catch {
    onError?.()
  }
  onFinally?.()
}
