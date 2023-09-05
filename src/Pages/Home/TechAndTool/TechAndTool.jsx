import React from 'react';
import SectionHead from '../../../components/SectionHead';
import program from "../../../assets/icons/program.png"
import js from "../../../assets/icons/JS.png";
import react from "../../../assets/icons/React.png";
import next from "../../../assets/icons/next.png";
import redux from "../../../assets/icons/redux.png";
import node from "../../../assets/icons/node.png";
import express from "../../../assets/icons/express.png";
import mongoDB from "../../../assets/icons/mongoDB.png";
import firebase from "../../../assets/icons/firebase.png";
import tailwind from "../../../assets/icons/tailwind.png";
import bootstrap from "../../../assets/icons/bootstrap.png";
import figma from "../../../assets/icons/figma.png";
import photoShop from "../../../assets/icons/photoshop.png";
import illustrator from "../../../assets/icons/illustrator.png";
import lightRoom from "../../../assets/icons/photoshop-lightroom.png";

const TechAndTool = () => {
    return (
        <section className='my-28 text-center'>
            <SectionHead title="Technology Ans Tools We Used" description="It has become a prerequisite for companies to develop custom software products to stay competitive. Ena Ema Technologies's technical expertise use the most popular technology for development outsourcing software."/>


<div className='my-14 bg-primary bg-opacity-10 rounded-2xl px-7 py-5 lg:w-1/2 mx-auto flex items-center gap-5'>

<div>
    <img src={program} alt="program" className='w-28'/>
</div>

<div className='text-left'>
    <h1 className='text-lg font-semibold text-primary my-1'>Harnessing Cutting-Edge Technology for Excellence</h1>
    <p className='text-sm font-medium'>Empower Your Systems with Advanced Programmers and Emerging Technology for Peak Performance.</p>
</div>

</div>


<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>

<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={js} alt="JS" className='w-14 h-14rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>JavaScript</p>
</div>

<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={react} alt="react" className='w-14 h-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>React.JS</p>
</div>

<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-l-full rounded-r-md border border-primary'>
    <div>
    <img src={next} alt="next" className='w-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>Next.JS</p>
</div>

<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={redux} alt="redux" className='w-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>Redux</p>
</div>


<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={node} alt="Node" className='w-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>Node.JS</p>
</div>


<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-l-full rounded-r-lg border border-primary'>
    <div>
    <img src={express} alt="express" className='w-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>Express.JS</p>
</div>


<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={mongoDB} alt="mongoDB" className='w-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>MongoDB</p>
</div>


<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={firebase} alt="firebase" className='w-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>Firebase</p>
</div>


<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={tailwind} alt="tailwind" className='w-14 h-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>Tailwind</p>
</div>

<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={bootstrap} alt="bootstrap" className='w-14 h-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>Bootstrap</p>
</div>

<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={figma} alt="figma" className='w-14 h-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>figma</p>
</div>

<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={photoShop} alt="photoShop" className='w-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>PhotoShop</p>
</div>

<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={illustrator} alt="illustrator" className='w-14 h-14 rounded-l-md'/>
    </div>
    <p className='font-bold brandFont text-lg'>Illustrator</p>
</div>

<div className='inline-flex items-center gap-2 bg-primary bg-opacity-10 h-fit rounded-md border border-primary'>
    <div>
    <img src={lightRoom} alt="lightRoom" className='w-14 h-14'/>
    </div>
    <p className='font-bold brandFont text-lg'>Light room</p>
</div>



</div>

        </section>
    );
};

export default TechAndTool;