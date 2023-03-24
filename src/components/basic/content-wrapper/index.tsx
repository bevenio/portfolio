/* Styles */
import './content-wrapper.scss'

interface Props {
  navbar?: boolean
  center?: boolean
  children: React.ReactNode
}

const ContentWrapper: React.FC<Props> = function (props) {
  const { children, navbar = false, center = false } = props

  return (
    <span className={`app-content-wrapper ${navbar ? 'app-content-wrapper-with-navbar' : ''}`}>
      <div className={`app-content-wrapper-inner ${center ? 'app-content-wrapper-inner-centered' : ''}`}>{children}</div>
    </span>
  )
}

export { ContentWrapper }
