
type PersonListProps ={
    names: {
        first: string 
        last: string
    }[]
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
