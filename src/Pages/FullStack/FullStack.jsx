import React from 'react';
import development from "../../assets/banner/development-01.png"
import ServicesDetails from '../../components/ServicesDetails';

const FullStack = () => {
    return (
        <div>
            <ServicesDetails mainTitle="Full Stack Web Development: Navigating the Digital Landscape with Comprehensive Frontend and Backend Expertise" mainIntro="Welcome to the world of Full Stack Web Development, where digital innovation knows no bounds. In this section, we provide you with a glimpse into the dynamic and multifaceted realm of web development." heroImg={development} aboutTile="About Full Stack Web Development" aboutIntro="Full Stack Web Development is the art and science of creating dynamic and interactive websites and web applications from start to finish. It involves both frontend development, which focuses on what users see and interact with, and backend development, which manages the behind-the-scenes functionality." aboutListTitle="Full Stack Web Developers Excel In" aboutHead1="Frontend Development:" aboutDes1="Crafting user-friendly interfaces using HTML, CSS, and JavaScript to ensure a seamless user experience." aboutHead2="Backend Development:" aboutDes2="Building server-side logic, databases, and APIs to handle data and ensure the functionality of websites and applications." aboutHead3="Database Management:" aboutDes3="Storing and retrieving data efficiently, ensuring data security, and optimizing database performance." aboutHead4="Version Control:" aboutDes4="Tracking and managing changes to code using tools like Git, ensuring collaboration and code integrity." aboutHead5="Problem Solving:" aboutDes5="Analyzing complex problems and finding efficient and scalable solutions."  aboutHead6="Responsive Design:" aboutDes6="Ensuring that websites and applications work flawlessly on various devices and screen sizes." processTitle="The Comprehensive Development Process from Planning to Deployment" processDes="Successful Full Stack Web Development relies on a structured and iterative process. In this section, we provide an overview of the key phases involved in creating robust web solutions." process1="Planning and Requirements Gathering" process2="Design and Prototyping" process3="Frontend and Backend Implementation" process4="Testing and Quality Assurance"/>
        </div>
    );
};

export default FullStack;