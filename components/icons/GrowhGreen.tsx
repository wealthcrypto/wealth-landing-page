import React from 'react'
import Image from 'next/image'
import GrowthGreenSVG from '@/public/Growth.svg'

const GrowthGreen = ({ className }: { className?: string }) => {
    return (
        <Image src={GrowthGreenSVG} alt="Growth Green" className={className} />
    )
}

export default GrowthGreen