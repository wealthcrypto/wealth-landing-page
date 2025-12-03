import React from 'react'
import Image from 'next/image'
import LinsSpringGreen from '@/public/LinsSpringGreen.svg'

const LineSpringGreen = ({ className }: { className?: string }) => {
    return (
        <Image src={LinsSpringGreen} alt="Line Spring Green" className={className} />
    )
}

export default LineSpringGreen