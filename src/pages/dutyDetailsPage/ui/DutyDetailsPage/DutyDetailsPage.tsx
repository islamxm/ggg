import { PersonTitle, useGetPersonIdFromParams } from "@entities/person"
import { Col, Flex, Row } from "antd"
import { useEffect } from "react"
import { personsActions } from "@entities/person"
import { getPerson } from "@features/person/get-person"
import { db } from "@shared/config/dbConfig"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import { toast } from "sonner"
import { useDispatch, useSelector } from "@shared/hooks/useReduxStore"
import { DutiesSelect } from "../DutiesSelect/DutiesSelect"

export const DutyDetailsPage = () => {
  const id = useGetPersonIdFromParams()
  const dispatch = useDispatch()
  const {currentPerson} = useSelector(s => s.personsReducer)

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
      <PersonTitle rank={currentPerson.rank} name={currentPerson.name} />
      <DutiesSelect/>
    </Flex>
  )
}