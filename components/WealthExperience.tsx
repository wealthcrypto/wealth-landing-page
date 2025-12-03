import React from 'react'

type Contents = {
    title: string;
    description: string;
}[]

const WealthExperience = () => {
    const contents: Contents = [
        {
            title: "10K+",
            description: "Community"
        }, 
        {
            title: "500+",
            description: "Experiences"
        },
        {
            title: "50+",
            description: "Partners"
        }
        ];

  return (
    <div className="flex justify-center items-center space-x-12 py-16 md:py-12 lg:py-16 flex-wrap">
        {contents.map((content, index) => (
            <div key={index} className="flex flex-col items-center mx-6">
                <h2 className="text-4xl font-accent font-bold text-wealth-navy mb-2">{content.title}</h2>
                <p className="text-center text-wealth-navy text-lg font-body">{content.description}</p>
            </div>
        ))}
    </div>
  )
}

export default WealthExperience