import Icon from '../assets/images/eye-icon.svg'

export const ViewIcon = ({ onClick }) => {
    return <img style={{ cursor: 'pointer' }} src={Icon} onClick={onClick} />
}