import { db } from "@shared/config/dbConfig"
import { useDispatch } from "@shared/hooks/useReduxStore"
import { personsActions } from "@entities/person"
import { getAllPersons } from '@features/person/get-person'
import { useEffect } from "react"
import { toast } from 'sonner'
import { fractionActions } from "@entities/fraction"
import { getAllFractions } from "@features/fraction/get-fraction"

export const useInitData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllPersons({
      db,
      onSuccess(persons) {
        toast.success('Harby gullukçylaryň bazasy ýüklendi')
        dispatch(personsActions.initPersons(persons))
      },
      onError() {
        toast.error('Harby gullukçylaryň bazasyny ýüklemekde näsazlyklar ýüze çykdy')
      },
    })
    getAllFractions({
      db,
      onSuccess(fractions) {
        toast.success('Bölümçeleriň bazasy ýüklendi')
        dispatch(fractionActions.initFractions(fractions))
      },
      onError() {
        toast.error('Harby gullukçylaryň bazasyny ýüklemekde näsazlyklar ýüze çykdy')
      }
    })

  }, [])
}