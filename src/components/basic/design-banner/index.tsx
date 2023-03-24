import './design-banner.scss'

import { ColorBackground } from '../color-background'

const SwissStones: React.FC = () => {
  return (
    <ColorBackground>
      <div className="app-swiss-stones">
        <div className="app-design-banner-text app-swiss-stones-text">Software</div>
        <img src="/static/images/photos/swiss_stones.jpg"></img>
      </div>
    </ColorBackground>
  )
}

const UnderlinedText: React.FC = () => {
  return (
    <div className="app-swiss-underlined-text">
      <img src="/static/images/graphs/underscore.svg"></img>
      <div className="app-design-banner-text app-swiss-underlined-text-text">made for you</div>
    </div>
  )
}

export const DesignBanner: React.FC = () => {
  return (
    <div className="app-design-banner">
      <SwissStones />
      <UnderlinedText />
    </div>
  )
}
