import React from 'react'
import Navbar from '../Component/Navbar'
import MainComponent  from '../Component/MainContent'
import GeneralComponent from '../Component/GeneralComponent'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <MainComponent/>
        <GeneralComponent 
        heading = {'Online Institute For UPPSC Aspirants!'}
        paragraph= {'Shikshakul offers a comprehensive program tailored specifically for UPPSC exams. Our team of experienced educators, renowned subject experts, and dedicated mentors ensure that you receive top-notch guidance and support throughout your UPPSC preparation journey. Gain access to meticulously curated study materials, interactive live classes, extensive practice tests, and personalized doubt-solving sessions, all from the comfort of your home. Stay motivated, stay focused, and achieve excellence with the best online institute for UPPSC preparation. Enroll today and embark on your path to success!'}
        />
        <Footer/>
        {/* <div>
            Hello moto
        </div> */}
    </div>
  )
}

export default Home