type GreetProps = {
    name: string
    messageCount?: number // optional props
    isLoggedIn: boolean
}

export const Greet = ({name, messageCount = 0, isLoggedIn}: GreetProps) => {
  // assign a default value
  ///const { messageCount = 0 } = props
  return (
    <div>
        <h2>
            {
                isLoggedIn ? `Greet ${name} You have ${messageCount} unread pieces of toast`
                : 'Welcome Stranger'
            }
        </h2>
    </div>
  )
}
