export const DateFormate = ({ dateTime }) => {
    const date = new Date(dateTime);

    const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    const formattedDate = date.toLocaleString('en-GB', options);

    return (
        <span>{formattedDate}</span>
    )
}