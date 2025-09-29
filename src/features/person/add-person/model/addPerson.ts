import { personsActions, type Person } from "@entities/person"
import type { DBType } from "@shared/config/dbConfig"

type Options = {
  db: DBType
  dispatch: DispatchType
  personData: Omit<Person, 'id'>
  onSuccess?: (id: number) => any
  onError?: DefFunc
  onFinally?: DefFunc
}

export const addPerson = async ({
  db,
  dispatch,
  personData,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  try {
    let id = await db.persons.add(personData)
    if(id) {
      dispatch(personsActions.addPerson({...personData, id}))
      onSuccess?.(id)
    }
  } catch {
    onError?.()
  }
  onFinally?.()
}
