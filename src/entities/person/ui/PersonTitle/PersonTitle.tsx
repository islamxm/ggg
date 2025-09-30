import type { Person } from "@entities/person/model/types"
import { Space, Typography } from "antd"
import type { FC } from "react"
import { PersonRank } from "../PersonRank/PersonRank"

type Props = {
  name: Person['name'],
  rank: Person['rank']
}

export const PersonTitle: FC<Props> = ({
  name,
  rank
}) => {
  const fullName = `${name.lastName} ${name.firstName} ${name.patronymic}`

  return (
    <Space>
      <PersonRank rank={rank}/>
      <Typography.Title style={{marginBottom: 0}} level={2}>
        {fullName}
      </Typography.Title>
    </Space>

  )
}