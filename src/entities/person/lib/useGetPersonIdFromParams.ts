import { useParams } from "react-router"

type T = {
  id: string
}

export const useGetPersonIdFromParams = () => {
  const {id} = useParams<T>()
  return id
}