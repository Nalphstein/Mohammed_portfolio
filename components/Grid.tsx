import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bentogrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about" className="section-shell py-14">
        <div className="mb-12 text-center">
            <p className="eyebrow">About</p>
            <h1 className="heading mt-3">
                About <span className="text-purple">me</span>
            </h1>
            <p className="section-copy">
                I come from a support-heavy technical background, which means I value calm execution,
                clear communication, and systems that keep working when they matter most.
            </p>
        </div>
        <BentoGrid>
            {gridItems.map
            (({id,title,description,className,img, imgClassName, titleClassName, spareImg}) =>(
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}/>
            ))}

        </BentoGrid>

    </section>
  )
}

export default Grid
