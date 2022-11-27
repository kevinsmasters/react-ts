import { Name } from './Person.types'
type PersonListProps ={
    names: Name[]
}

type ThingListProps = string[]

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
        <ul>
            {props.names.map(
                (n, i) => (
                    <li key={i}>{n.first} {n.last}</li>
                )
            )}
        </ul>
    </div>
  )
}
