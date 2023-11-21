export const DateFormate = ({dateTime}) => {
    return (
        <span>{new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date(dateTime))}</span>
    )
}