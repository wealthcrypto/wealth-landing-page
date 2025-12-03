import React from 'react'
import Image from 'next/image'
import StarsGreenSVG from '@/public/Stars.svg';

const StarsGreen = ({ className }: { className?: string }) => {
    return (
        <Image src={StarsGreenSVG} alt="Green Stars" className={className} />
    )
}

export default StarsGreen