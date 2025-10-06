import { db } from "@shared/config/dbConfig"
import { useDispatch } from "@shared/hooks/useReduxStore"
import { personsActions } from "@entities/person"
import { getAllPersons } from "@entities/person"
import { useEffect } from "react"
import { toast } from 'sonner'
import { fractionActions } from "@entities/fraction"
import { getAllFractions } from "@features/fraction/get-fraction"
import { defaultErrorNotification } from "@shared/lib/defaultErrorNotification"

export const useInitData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllPersons({ db })
      .then(res => {
        toast.success('Harby gullukçylaryň bazasy ýüklendi')
        dispatch(personsActions.init(res))
      })
      .catch(defaultErrorNotification)
    getAllFractions({ db })
      .then(res => {
        toast.success('Bölümçeleriň bazasy ýüklendi')
        dispatch(fractionActions.init(res))
      })
    // getAllFractions({ db })
    //   .then(res => {
    //     toast.success('Bölümçeleriň bazasy ýüklendi')
    //     dispatch(fractionActions.update(res))
    //   })
    //   .catch(defaultErrorNotification)


  }, [])
}