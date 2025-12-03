import React from 'react'
import Image from 'next/image'
import CirclePinkSVG from '@/public/CirclePink.svg';

const CirclePink = ({ className }: { className?: string }) => {
    return (
        <Image src={CirclePinkSVG} alt="Circle Pink" className={className} />
    )
}

export default CirclePink