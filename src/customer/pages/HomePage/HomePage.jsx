import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import Footer from '../../components/Footer/Footer'
import HomeCollection from '../../components/HomeCollection/HomeCollection'
import Review from '../../components/Review/Review'
import Collaboration from '../../components/Collaboration/Collaboration'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <HomeSectionCard/>
        <HomeCollection/>
        <HomeSectionCarousel/>
        <Review/>
        <Collaboration/>
        <Footer/>
    </div>
  )
}

export default HomePage