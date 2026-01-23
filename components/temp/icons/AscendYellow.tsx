import React from 'react'
import Image from 'next/image'
import AscendYellowSVG from '@/public/AscendYellow.svg';

const AscendYellow = ({ className }: { className?: string }) => {
    return (
        <Image src={AscendYellowSVG} alt="Ascend Yellow" className={className} />
    )
}

export default AscendYellow