import React from 'react'
import Image from 'next/image'
import RedStarSVG from '@/public/assets/RedStar.svg';

const StarRed = ({ className }: { className?: string }) => {
    return (
        <Image src={RedStarSVG} alt="Red Star" className={className} />
    )
}

export default StarRed