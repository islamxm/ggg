import { PageTitle } from "@shared/ui/PageTitle"
import { Flex } from "antd"
import { FractionItem } from "../FractionItem/FractionItem"
import { AddFraction } from "@features/fraction/add-fraction"
import { useSelector } from "@shared/hooks/useReduxStore"
import { selectAllFractions } from "@entities/fraction"

export const FractionPage = () => {
  const fractions = useSelector(selectAllFractions)

  return (
    <Flex vertical gap={20}>
      <Flex align="center" justify={'space-between'}>
        <PageTitle hintContent="Bölümçeler sahypasy">Bölümçeler</PageTitle>
        <AddFraction />
      </Flex>
      <Flex vertical gap={10}>
        {
          fractions.map(fraction => (
            <FractionItem
              key={fraction.id}
              id={fraction.id}
              label={fraction.label}
            />
          ))
        }
      </Flex>
    </Flex>
  )
}