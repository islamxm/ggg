import { Typography, Flex } from 'antd'
import { SearchPerson } from '@features/person/search-person'
import { PersonsTable } from '@features/person/persons-table'
import { AddPerson } from '@features/person/add-person'

export const HomePage = () => {
  return (
    <Flex vertical gap={15}>
      <Typography.Title level={1}>Esasy</Typography.Title>
      <Flex gap={10}>
        <SearchPerson />
        <AddPerson />
      </Flex>
      <PersonsTable />
    </Flex>
  )
}