import React from 'react'
import Image from 'next/image'
import GrowthPinkSVG from '@/public/GrowthPink.svg'

const GrowthPink = ({ className }: { className?: string }) => {
    return (
        <Image src={GrowthPinkSVG} alt="Growth Pink" className={className} />
    )
}

export default GrowthPink