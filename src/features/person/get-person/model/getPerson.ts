import { type Person } from "@entities/person"
import type { DBType } from "@shared/config/dbConfig"

type Options = {
  db: DBType
  personId: Person['id']
  onSuccess?: (person: Person) => any
  onError?: DefFunc
  onFinally?: DefFunc
}

export const getPerson = async ({
  db,
  personId,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  try {
    let person = await db.persons.get(personId)
    if(person) {
      onSuccess?.(person)
    }
  } catch {
    onError?.()
  }
  onFinally?.()
}
