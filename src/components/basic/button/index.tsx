import './button.scss'

interface Props {
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ children }: Props) => {
  return (
    <button className="app-button" type="button">
      {children}
    </button>
  )
}
