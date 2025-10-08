import { useParams } from "react-router"

type T = {
  fractionId: string
}

export const useGetFractionIdFromParams = () => {
  const {fractionId} = useParams<T>()
  return fractionId
}