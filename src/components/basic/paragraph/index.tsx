import './paragraph.scss'

interface Props {
  title?: string
  children: React.ReactNode
}

export const Paragraph: React.FC<Props> = ({ children, title }) => {
  return (
    <span className="app-paragraph">
      {title ? <span className="app-paragraph-title">{title}</span> : ''}
      <p className="app-paragraph-body">{children}</p>
    </span>
  )
}
