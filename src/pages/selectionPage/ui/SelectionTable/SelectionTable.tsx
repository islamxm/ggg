import { Table } from "antd"
import { type FC } from "react"
import type { DateType, SelectionTableDataType } from "@pages/selectionPage/model/types"
import { SelectionDayIndicator } from "@entities/selection"
import { AddSelectionButton } from "@features/selection"
const { Column } = Table


type Props = {
  data: SelectionTableDataType,
  date: DateType
}

export const SelectionTable: FC<Props> = ({
  data,
  date
}) => {
  const daysInMonth = new Array(date.date.daysInMonth()).fill(() => 1).map((_, index) => index + 1)

  return (
    <Table<SelectionTableDataType[0]>
      dataSource={data}
      pagination={false}
      style={{ width: '100%' }}
      scroll={{ x: true }}
    >
      <Column
        title="Bölümçeler"
        dataIndex={'shortLabel'}
        fixed
        render={(v, d) => (
          <AddSelectionButton initDate={date.date} fractionId={d.id}>{v}</AddSelectionButton>
        )}
      />
      {
        date.mode === 'month' && (
          <>
            {daysInMonth.map(day => (
              <Column
                title={day}
                dataIndex={day}
                render={(_, data: SelectionTableDataType[0]) => {
                  const currentData = data.selection.find((s: any) => s.day === day)
                  return <SelectionDayIndicator selection={currentData?.selection} />
                }}
              />
            ))}
            <Column
              title={<b>Jemi</b>}
              fixed={'right'}
              render={(_, data: SelectionTableDataType[0]) => {
                const selection = data.selection.map(s => s.selection).flat()                
                return <SelectionDayIndicator selection={selection}/>
              }}
              />
          </>

        )
      }
    </Table>
  )
}