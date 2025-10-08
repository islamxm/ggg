import { Table } from "antd"
import { type FC } from "react"
import type { DateType } from "@pages/selectionPage/model/types"
import { selectionActions, SelectionDayIndicator } from "@entities/selection"
import type { SelectionsOfFraction } from "@entities/selection"
import { AddSelectionButton } from "@features/selection/add-selection"
import dayjs from 'dayjs'
import { useDispatch, useSelector } from "@shared/hooks/useReduxStore"
import { selectAllFractions } from "@entities/fraction"
import { useNavigate } from "react-router"
import { getSelectionOfFraction } from "@shared/config/routeConfig"
import { tdd } from "@shared/lib/tdd"
const { Column } = Table

type Props = {
  data: Array<SelectionsOfFraction>,
  date: DateType
}

export const SelectionTable: FC<Props> = ({
  data,
  date
}) => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const fractions = useSelector(selectAllFractions)
  const daysInMonth = new Array(date.date.daysInMonth()).fill(() => 1).map((_, index) => index + 1)

  return (
    <Table<SelectionsOfFraction>
      dataSource={data}
      pagination={false}
      style={{ width: '100%' }}
      scroll={{ x: true }}
    >
      <Column
        title="Bölümçeler"
        dataIndex={'fractionName'}
        fixed
        render={(_, d) => (
          <AddSelectionButton initDate={date.date} fractionId={d.fractionId}>{fractions.find(f => f.id === d.fractionId)?.shortLabel}</AddSelectionButton>
        )}
      />
      {
        date.mode === 'month' && (
          <>
            {daysInMonth.map(day => (
              <Column
                title={day}
                dataIndex={day}
                onCell={(data: SelectionsOfFraction) => ({
                  onClick: () => {
                    const d = dayjs(`${tdd(day)}.${dayjs(date.date).format('MM.YYYY')}`, 'DD.MM.YYYY').toDate()
                    dispatch(selectionActions.updateSelectionDetailsDate(d))
                    navigation(getSelectionOfFraction(data.fractionId.toString()))
                  }
                })}
                render={(_, data: SelectionsOfFraction) => {
                  const currentData = data.selections.filter((s: any) => dayjs(s.date).date() === day)
                  return <SelectionDayIndicator selection={currentData} />
                }}
              />
            ))}
            <Column
              title={<b>Jemi</b>}
              fixed={'right'}
              render={(_, data: SelectionsOfFraction) => <SelectionDayIndicator selection={data.selections} />}
            />
          </>
        )
      }
    </Table>
  )
}