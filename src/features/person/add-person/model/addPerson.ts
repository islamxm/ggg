export const addPerson = async (db:any, personData: any) => await db.persons.add(personData)
