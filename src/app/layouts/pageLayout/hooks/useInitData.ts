import { db } from "@shared/config/dbConfig"
import { useDispatch } from "@shared/hooks/useReduxStore"
import { personsActions } from "@entities/person"
import { getAllPersons } from '@features/person/get-person'
import { useEffect } from "react"
import { toast } from 'sonner'

export const useInitData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllPersons({
      db,
      onSuccess(persons) {
        toast.success('Maglumatlar bazasy ýüklendi')
        dispatch(personsActions.initPersons(persons))
      },
      onError() {
        toast.error('Maglumatlar bazasyny ýüklemekde näsazlyklar ýüze çykdy')
      },
    })
  }, [])
}