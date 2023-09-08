import React from 'react';
import editing from "../../assets/banner/editing-01.webp"
import ServicesDetails from '../../components/ServicesDetails';

const Editing = () => {
    return (
        <div>
             <ServicesDetails helmetTitle="Photo Editing" mainTitle="Elevating Your Visual Storytelling through Expert Photo Editing: Transforming Ordinary Images into Extraordinary Masterpieces" mainIntro="Welcome to the world of Photo Editing, where creativity meets precision to transform ordinary images into extraordinary visual masterpieces. In this section, we introduce you to the captivating realm of photo enhancement and manipulation." heroImg={editing} aboutTile="About Photo Editing" aboutIntro="Photo Editing is the art of enhancing, retouching, and manipulating images to achieve desired aesthetics or convey specific messages. It's a powerful tool that brings imagination to life through visual storytelling." aboutListTitle="Photo Editors are proficient in" aboutHead1="Image Enhancement" aboutDes1="Adjusting exposure, contrast, and color balance to create visually striking images." aboutHead2="Retouching:" aboutDes2="Removing imperfections, blemishes, and unwanted elements while maintaining a natural look." aboutHead3="Compositing:" aboutDes3="Combining multiple images or elements to create seamless and surreal compositions." aboutHead4="Creative Filters and Effects:" aboutDes4="Applying artistic effects to evoke emotions and enhance the visual impact." aboutHead5="Precision Cropping:" aboutDes5="Framing images to highlight focal points and improve composition."  aboutHead6="Image Restoration:" aboutDes6="Restoring old or damaged photos to their former glory." processTitle="The Photo Editing Process: Crafting Visual Masterpieces through Artistry and Precision" processDes="Photo Editing involves a meticulous and artistic process to transform raw images into captivating visuals. In this section, we walk you through the key stages of the Photo Editing journey." process1="Image Selection and Color Correction" process2="Retouching and Creative Enhancements" process3="Compositing" process4="Final Touches" value="Photo Editing"/>
        </div>
    );
};

export default Editing;