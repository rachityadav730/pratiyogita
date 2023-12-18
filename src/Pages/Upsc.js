import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import GeneralComponent from '../Component/GeneralComponent'
const Upsc = () => {
  return (
    <div>
    <Navbar/>
    <GeneralComponent 
        heading_req = {true}
        heading = {'Why Choose Us?'}
        heading3 = {'Experienced Faculty:'}
        paragraph= {"Our faculty comprises seasoned educators, former civil servants, and subject matter experts who bring years of experience and insights to the classroom."}
        />
         <GeneralComponent 
        heading = {'Why Choose Us?'}
        heading3 = {'Comprehensive Curriculum:'}
        paragraph= {"We offer a well-structured and comprehensive curriculum that covers every aspect of the UPSC exam syllabus. Our study materials are regularly updated to align with the latest exam patterns."}
        />
         <GeneralComponent 
        heading = {'Why Choose Us?'}
        heading3 = {'Personalized Guidance:'}
        paragraph= {"We understand that each aspirant is unique. Our coaching approach includes personalized guidance, doubt-clearing sessions, and one-on-one interactions to address individual learning needs."}
        />
         <GeneralComponent 
        heading = {'Why Choose Us?'}
        heading3 = {'Effective Study Material:'}
        paragraph= {"Our meticulously designed study material is focused on clarity and relevance. It not only covers the basics but also provides in-depth insights to help you master each subject."}
        />
         <GeneralComponent 
        heading = {'Why Choose Us?'}
        heading3 = {'Regular Mock Tests:'}
        paragraph= {"To ensure you are exam-ready, we conduct regular mock tests that simulate the actual exam environment. These tests help you assess your progress and identify areas that need improvement."}
        />
          <GeneralComponent 
        heading = {'Why Choose Us?'}
        heading3 = {'Current Affairs Updates:'}
        paragraph= {"Stay abreast of current affairs with our daily updates. We integrate real-world events into our teaching to help you connect theoretical knowledge with practical insights."}
        />


<hr/>



 <GeneralComponent 
        heading_req = {true}
        heading = {'Our Courses'}
        heading3 = {'UPSC Prelims:'}
        paragraph= {"Lay a strong foundation with our comprehensive Prelims program that covers all subjects and ensures you are well-prepared for the first stage of the UPSC exam."}
        />
         <GeneralComponent 
        heading = {'Why Choose Us?'}
        heading3 = {'UPSC Mains:'}
        paragraph= {"Dive deeper into the subjects with our Mains program, where we focus on the analytical and application aspects of the syllabus to help you crack the Mains examination."}
        />
         <GeneralComponent 
        heading = {'Why Choose Us?'}
        heading3 = {'Interview Preparation:'}
        paragraph= {"Our interview preparation sessions are designed to instill confidence and polish your communication skills. Mock interviews and personalized feedback help you excel in the personality test."}
        />
    <Footer/>
    </div>
  )
}

export default Upsc