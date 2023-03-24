import './profile-picture.scss'

interface Props {
  imageUrl: string
}

export const ProfilePicture: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className="app-profile-picture">
      <img src={imageUrl}></img>
    </div>
  )
}
