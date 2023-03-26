/* Styles */
import './main.scss'

import { Button } from '@/components/basic/button'
import { DesignBanner } from '@/components/basic/design-banner'
import { NavigationBar } from '@/components/basic/navigation-bar'
import { PageLayout } from '@/components/basic/page-layout'
import { Paragraph } from '@/components/basic/paragraph'
import { ProfilePicture } from '@/components/basic/profile-picture'

const MainPage = function () {
  return (
    <span className="app-main">
      <NavigationBar />
      <PageLayout>
        <DesignBanner />
      </PageLayout>
      <PageLayout id="about">
        <div className="app-main-about app-main-subpage">
          <div className="app-main-about-picture">
            <ProfilePicture imageUrl="/static/images/photos/benjamin.jpg" />
          </div>
          <div className="app-main-about-text">
            <h2>Hi there,</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </PageLayout>
      <PageLayout id="services">
        <div className="app-main-services app-main-subpage">
          <h2>What i can offer you</h2>
          <Paragraph title="Software development">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </Paragraph>
          <Paragraph title="Software maintenance">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </Paragraph>
        </div>
      </PageLayout>
      <PageLayout id="contact">
        <div className="app-main-contact app-main-subpage">
          <h2>Contact me</h2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </Paragraph>
          <Button
            onClick={() => {
              const emailTo = 'benjamin.brachmann@icloud.com'
              const emailSub = 'Contact request - software development service'
              window.open('mailto:' + emailTo + '?subject=' + emailSub)
            }}
          >
            Contact
          </Button>
        </div>
      </PageLayout>
    </span>
  )
}

export { MainPage }
