type GreetProps = {
    name: string
    messageCount?: number // optional props
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  // assign a default value
  const { messageCount = 0 } = props
  return (
    <div>
        <h2>
            {
                props.isLoggedIn ? `Greet ${props.name} You have ${messageCount} unread pieces of toast`
                : 'Welcome Stranger'
            }
        </h2>
    </div>
  )
}
