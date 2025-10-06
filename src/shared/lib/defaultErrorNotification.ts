import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import { toast } from "sonner"

export const defaultErrorNotification = () => {
  toast.error(ERROR_DEFAULT)
}