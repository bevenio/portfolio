import './button.scss'

interface Props {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Button: React.FC<Props> = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick ? onClick : () => {}} className="app-button" type="button">
      {children}
    </button>
  )
}
