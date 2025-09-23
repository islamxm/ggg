import { useDebounceCallback } from "usehooks-ts"
import { useState, useEffect } from 'react'

export const usePersonSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  const [result, setResult] = useState<Array<any>>([])
  const [isLoading, setIsLoading] = useState(false)
  const onChangeSearchValue = useDebounceCallback(setSearchValue, 3000)

  useEffect(() => {
    //поиск в бд
    console.log(searchValue)
  }, [searchValue])

  return {
    onChangeSearchValue,
    isLoading
  }
}