import { Input } from 'antd'
import { type FC } from 'react'
import { usePersonSearch } from '../../lib/usePersonSearch'
import type { Person } from '@entities/person'

type Props = {
  onChange: (result: Array<Person>) => void
}

export const SearchPerson: FC<Props> = ({
  onChange
}) => {
  const {
    onChangeSearchValue,
    reset,
    isLoading,
    setIsLoading
  } = usePersonSearch(onChange)

  return (
    <Input.Search
      placeholder='Harby gullukçyny gözle'
      size={'large'}
      loading={isLoading}
      allowClear
      onChange={e => {
        setIsLoading(true)
        onChangeSearchValue(e.target.value)
        if (!e.target.value) { reset() }
      }}
    />
  )
}