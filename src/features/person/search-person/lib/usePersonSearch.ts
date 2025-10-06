import { useDebounceCallback } from "usehooks-ts"
import { useState, useEffect } from 'react'
import { useSelector } from "@shared/hooks/useReduxStore"
import { selectAllPersons } from "@entities/person"

export const usePersonSearch = (getResult: DefFunc, initialValue?: string) => {
  const persons = useSelector(selectAllPersons)
  const [searchValue, setSearchValue] = useState(initialValue ?? '')
  const [result, setResult] = useState<Array<any>>([])
  const [isLoading, setIsLoading] = useState(false)
  const onChangeSearchValue = useDebounceCallback(setSearchValue, 1500)

  useEffect(() => {
    if (searchValue) {
      const searchResult = persons.filter(person => `${person.name.firstName} ${person.name.lastName} ${person.name.patronymic}`.toLowerCase().includes(searchValue.toLowerCase()))
      setResult(searchResult)
    }
    setIsLoading(false)
  }, [searchValue, persons])

  useEffect(() => {
    getResult(result)
  }, [result])

  useEffect(() => {
    reset()
  }, [persons])

  const reset = () => {
    setResult(persons)
    setIsLoading(false)
  }

  return {
    onChangeSearchValue,
    reset,
    isLoading,
    setIsLoading
  }
}