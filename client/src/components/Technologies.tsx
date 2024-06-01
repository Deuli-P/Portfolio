import React from 'react'

type TechnologieProps = {
    item: string
}

const Technologies = ({item}: TechnologieProps) => {
  return (
        <div 
            className="bg-[#a5abf3] py-1 px-4 m-1 text-[#141e26] rounded-full w-auto"
        >
            {item}
        </div>
    )
}

export default Technologies