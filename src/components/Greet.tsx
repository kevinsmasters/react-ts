type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        <h2>Greet {props.name} You have 10 unread pieces of toast</h2>
    </div>
  )
}
