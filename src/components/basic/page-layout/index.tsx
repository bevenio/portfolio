/* Styles */
import './page-layout.scss'

interface Props {
  children: React.ReactNode
  className?: string
  id?: string
}

const PageLayout: React.FC<Props> = function (props) {
  const { children, className = '', id = '' } = props
  return (
    <div id={id} className={`app-page-layout ${className}`}>
      {children}
    </div>
  )
}

export { PageLayout }
