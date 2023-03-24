import './navigation-bar.scss'

import { Button } from '@/components/basic/button'

type ButtonData = {
  name: string
  link: string
}

export const NavigationBar: React.FC = () => {
  const buttonData: ButtonData[] = [
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' },
  ]

  const navigateToAnchor = (data: ButtonData) => {
    location.hash = data.link
  }

  return (
    <div className="app-navigation-bar">
      <div className="app-navigation-bar-inner">
        <div className="app-navigation-bar-title">Benjamin Brachmann - Software Engineer</div>
        <div className="app-navigation-bar-buttons">
          {buttonData.map((data) => (
            <Button
              key={data.name}
              onClick={() => {
                return navigateToAnchor(data)
              }}
            >
              {data.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
