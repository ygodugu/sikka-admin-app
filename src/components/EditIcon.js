import Icon from '../assets/images/edit-icon.svg'

export const EditIcon = ({ onClick }) => {
    return <img style={{ cursor: 'pointer' }} src={Icon} onClick={onClick} />
}