import { personsActions, useGetPersonIdFromParams } from "@entities/person"
import { useEffect } from "react"
import { Flex } from "antd"
import { PersonTop } from "../PersonTop/PersonTop"
import { useDispatch, useSelector } from "@shared/hooks/useReduxStore"
import { getPerson } from "@features/person/get-person"
import { db } from "@shared/config/dbConfig"
import { toast } from "sonner"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import { PersonInfo } from "../PersonInfo/PersonInfo"

export const PersonDetailsPage = () => {
  const id = useGetPersonIdFromParams()
  const dispatch = useDispatch()
  const { currentPerson } = useSelector(s => s.personsReducer)

  useEffect(() => {
    if (id) {
      getPerson({
        db,
        personId: Number(id),
        onSuccess(person) {
          dispatch(personsActions.updateCurrentPerson(person))
        },
        onError() {
          toast.error(ERROR_DEFAULT)
        },
      })
    }
    return () => {
      dispatch(personsActions.updateCurrentPerson(undefined))
    }
  }, [id])

  if (!currentPerson) {
    return null
  }

  return (
    <Flex vertical gap={20}>
      <PersonTop id={Number(id)} name={currentPerson.name} />
      <PersonInfo/>
    </Flex>
  )
}