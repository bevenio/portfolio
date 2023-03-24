/* Styles */
import './main.scss'

import { DesignBanner } from '@/components/basic/design-banner'
import { NavigationBar } from '@/components/basic/navigation-bar'
import { PageLayout } from '@/components/basic/page-layout'

const MainPage = function () {
  return (
    <>
      <NavigationBar />
      <PageLayout>
        <DesignBanner></DesignBanner>
      </PageLayout>
      <PageLayout>
        <DesignBanner></DesignBanner>
      </PageLayout>
    </>
  )
}

export { MainPage }
