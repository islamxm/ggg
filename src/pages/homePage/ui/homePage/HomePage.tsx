import { Typography, Flex } from 'antd'
import { SearchPerson } from '@features/person/search-person'
import { PersonsTable } from '@features/person/persons-table'
import { AddPerson } from '@features/person/add-person'
import { useState } from 'react'
import type { Person } from '@entities/person'

export const HomePage = () => {
  const [searchResult, setSearchResult] = useState<Array<Person>>([])

  return (
    <Flex vertical gap={15}>
      <Typography.Title level={1}>Esasy</Typography.Title>
      <Flex gap={10}>
        <SearchPerson onChange={setSearchResult}/>
        <AddPerson />
      </Flex>
      <PersonsTable data={searchResult}/>
    </Flex>
  )
}