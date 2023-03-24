import './color-background.scss'

interface Props {
  children: React.ReactNode
}

export const ColorBackground: React.FC<Props> = ({ children }) => {
  return (
    <span className="app-color-background-wrapper">
      <span className="app-color-background">{children}</span>
    </span>
  )
}
