import { type Person } from "@entities/person"
import type { DBType } from "@shared/config/dbConfig"

type Options = {
  db: DBType
  person: {
    id: Person['id'],
    data: Partial<Omit<Person, 'id'>>
  }
}

export const updatePerson = async ({
  db,
  person,
}: Options) => {
  const { data, id } = person
  return await db.persons.update(id, data)
}
