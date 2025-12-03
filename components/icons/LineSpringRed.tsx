import React from 'react'
import Image from 'next/image'
import LinsSpringRedSVG from '@/public/assets/LineString.svg'

const LineSpringRed = ({ className }: { className?: string }) => {
    return (
        <Image src={LinsSpringRedSVG} alt="Line Spring Red" className={className} />
    )
}

export default LineSpringRed