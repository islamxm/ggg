export const normalizeReduxStoreData = <EntityType extends {id: number, [key: string]: any}>(data: Array<EntityType>): [Array<EntityType['id']>, Record<EntityType['id'], EntityType>] => {

  const ids: Array<EntityType['id']> = []
  let entities = {} as Record<EntityType['id'], EntityType>

  data.forEach(d => {
    ids.push(d.id)
    entities[d.id] = d
  })

  return [ids, entities]
}