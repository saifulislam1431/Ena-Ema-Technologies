import React from 'react';

const SectionHead = ({title,description}) => {
    return (
        <div>
<h1 className="mb-5 text-3xl font-bold brandFont">{title}</h1>
      <p className="mb-5 font-medium">{description}</p>
        </div>
    );
};

export default SectionHead;