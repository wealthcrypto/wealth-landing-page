import React from 'react'
import Image from 'next/image'
import CirclePinkSVG from '@/public/assets/CicleGreen.svg';

const CircleGreen = ({ className }: { className?: string }) => {
    return (
        <Image src={CirclePinkSVG} alt="Circle Green" className={className} />
    )
}

export default CircleGreen