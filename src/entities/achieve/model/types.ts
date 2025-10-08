import type { Person } from "@entities/person/@x/achieve"

export type Achieves = 
| 'mb' //minnetdarlyk bildirmek
| 'sb' //sagbolsun yglan etmek
| 'omh' //ene-atasyna minnetdarlyk hat
| 'mh' //minnetdarlyk haty
| 'hh' //hormat haty
| '50g' //garawul 50 gun
| '100g' //garawul 100 gun
| '150g' //garawul 150 gun
| 'ht1' //harby turgen 1
| 'ht2' //harby turgen 2
| 'ht3' //harby turgen 3
| 'ge' //goreldeli esger
| 'rg' //rugsat 

// | 'dy' //duydurysh
// | 'ky' //kayinch
// | 'bky' //berk kayinch
// | 'nt' //nobatdan dashary tabshyryk
// | 'ts' //tussag

export type Achieve = {
  id: number
  date: Date
  achieveType: Achieves
  personId: Person['id']
}

export type AchievesOfPerson = {
  personId: Person['id'],
  achieves: Array<Achieve>
} 