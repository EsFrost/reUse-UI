import React from 'react'
import Image, { StaticImageData } from 'next/image'



function ReUseCard({customImg}: {customImg: StaticImageData}) {
  return (
    <div>
        <Image src={customImg} alt="card image" width={300} height={300} />
    </div>
  )
}

export default ReUseCard