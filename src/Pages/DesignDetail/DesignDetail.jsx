import React from 'react';
import designImg from "../../assets/banner/design-01.webp"
import ServicesDetails from '../../components/ServicesDetails';

const DesignDetail = () => {
    return (
        <div>
             <ServicesDetails helmetTitle="Web Design" mainTitle="Crafting Engaging Web Design for an Unforgettable User Experience: Where Aesthetics and Functionality Converge in the Digital Landscape" mainIntro="Welcome to the world of Web Design, where creativity converges with technology to shape captivating online experiences. In this section, we introduce you to the exciting and ever-evolving field of web design." heroImg={designImg} aboutTile="About Web Design" aboutIntro="Web Design is the art of conceptualizing, planning, and creating visually engaging and user-friendly websites. It's the fusion of aesthetics and functionality that defines the online presence of businesses and individuals." aboutListTitle="Web Designers are proficient in" aboutHead1="Visual Design:" aboutDes1="Creating stunning layouts, color schemes, and graphics that resonate with the brand's identity." aboutHead2="Responsive Design:" aboutDes2="Ensuring that websites adapt seamlessly to various devices and screen sizes." aboutHead3="User-Centered Design:" aboutDes3="Prioritizing user needs and preferences to create intuitive navigation and interactions." aboutHead4="Information Architecture:" aboutDes4="Organizing content and structure for easy navigation and content discovery." aboutHead5="Typography:" aboutDes5="Selecting fonts and typography styles that enhance readability and aesthetics."  aboutHead6="Wireframing and Prototyping:" aboutDes6="Creating visual blueprints and interactive prototypes to refine design concepts." processTitle="The Web Design Process Unveiled: Crafting Engaging Online Experiences with Creativity and Precision" processDes="Web Design is a meticulously structured journey that transforms ideas into interactive digital realities. In this section, we outline the key stages of the Web Design process." process1="Discovery and Research" process2="Planning and Strategy" process3="Wireframing and Prototyping" process4="Development and Coding" value="Web Design"/>
        </div>
    );
};

export default DesignDetail;