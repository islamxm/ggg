import type { DBType } from "@shared/config/dbConfig";
import type { Person } from "@entities/person";
import { personsActions } from "@entities/person";

type Options = {
  db: DBType
  dispatch: DispatchType
  personId: Person['id']
  onSuccess?: () => any
  onError?: DefFunc
  onFinally?: DefFunc
}

export const deletePerson = async ({
  db,
  dispatch,
  personId,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  try {
    await db.persons.delete(personId)
    dispatch(personsActions.deletePerson(personId))
    onSuccess?.()
  } catch {
    onError?.()
  }
  onFinally?.()
}