import { db } from "@shared/config/dbConfig"
import { useDispatch } from "@shared/hooks/useReduxStore"
import { personsActions } from "@entities/person"
import {getAllPersons} from '@features/person/get-person'
import { useEffect } from "react"

export const useInitData = () => {
  const dispatch = useDispatch()

  useEffect(() => { 
    getAllPersons(db).then(persons => {
      dispatch(personsActions.initPersons(persons))
    })
  }, [])
}