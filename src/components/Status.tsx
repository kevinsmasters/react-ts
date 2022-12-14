type StatusProps = {
    status: 'loading' | 'success' | 'error' // union of string literals
}
export const Status = (props: StatusProps) => {
    let message 
    if(props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched good'
    } else if (props.status === 'error') {
        message = 'Bad fetched bad'
    }

  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}
