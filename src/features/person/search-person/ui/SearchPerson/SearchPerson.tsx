import { Input, Dropdown } from 'antd'
const { Search } = Input
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import type { ItemType } from 'antd/es/menu/interface'
import { usePersonSearch } from '../../hooks/usePersonSearch'
import { type PersonSearchResulType } from '../../model/types'

export const SearchPerson = () => {
  const [result, setResult] = useState<Array<PersonSearchResulType>>([])

  const {
    onChangeSearchValue,
    isLoading
  } = usePersonSearch()

  return (
    <Dropdown menu={{items: result}}>
      <Search
        placeholder='Harby gullukçyny gözle'
        size={'large'}
        allowClear
        loading={isLoading}
        onChange={e => onChangeSearchValue(e.target.value)}
      />
    </Dropdown>
  )
}