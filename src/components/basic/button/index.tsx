import './button.scss'

interface Props {
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick ? onClick : () => {}} className="app-button" type="button">
      {children}
    </button>
  )
}
