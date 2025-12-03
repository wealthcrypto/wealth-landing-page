import React from 'react'
import Image from 'next/image'
import CircleRedSVG from '@/public/assets/CicleRed.svg';

const CircleRed = ({ className }: { className?: string }) => {
    return (
        <Image src={CircleRedSVG} alt="Circle Red" className={className} />
    )
}

export default CircleRed