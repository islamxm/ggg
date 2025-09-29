import { personsActions, type Person } from "@entities/person"
import type { DBType } from "@shared/config/dbConfig"

type Options = {
  db: DBType
  dispatch: DispatchType
  person: {
    id: Person['id'],
    data: Omit<Person, 'id'>
  }
  onSuccess?: () => any
  onError?: DefFunc
  onFinally?: DefFunc
}

export const updatePerson = async ({
  db,
  dispatch,
  person,
  onSuccess,
  onError,
  onFinally
}: Options) => {
  const {data,id} = person

  try {
    let result = await db.persons.update(id, data)
    if(result) {
      const updatedPersonData = {id, ...data}
      dispatch(personsActions.updateCurrentPerson(updatedPersonData))
      dispatch(personsActions.updatePersons(updatedPersonData))
      onSuccess?.()
    }
  } catch {
    onError?.()
  }
  onFinally?.()
}
