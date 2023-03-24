import './navigation-bar.scss'

import { Button } from '@/components/basic/button'

export const NavigationBar: React.FC = () => {
  const buttonData = [
    { name: 'About', link: '/#about' },
    { name: 'Services', link: '/#services' },
    { name: 'Contact', link: '/#contact' },
  ]

  return (
    <div className="app-navigation-bar">
      <div className="app-navigation-bar-inner">
        <div className="app-navigation-bar-title">Benjamin Brachmann - Software Engineer</div>
        <div className="app-navigation-bar-buttons">
          {buttonData.map((data) => (
            <Button key={data.name}>{data.name}</Button>
          ))}
        </div>
      </div>
    </div>
  )
}
