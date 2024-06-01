import Link from 'next/link';
import Image from 'next/image';


type CardProps = {
    title: string;
    image: string;
    alt: string;
    type: string;
    id: string;
}


const Card=({title,image,alt,type,id}:CardProps)=> {
    return (
        <Link href={`/project/${id}`} className=" group w-full h-[365px] md:h-[452px] max-w-[350px] bg-red-400 article-height mb-4 overflow-hidden rounded-lg cursor-pointer shadow-2xl">
            <article className=" flex flex-col items-center sm:justify-between h-full shadow-lg bg-primary">
                <div className="w-full h-[360px] overflow-hidden ">
                    <div className="w-full h-full relative scale-100 group-hover:scale-110 transition-all duration-500 ease-in-out">
                        <Image 
                            src={image} 
                            alt={alt} 
                            quality={65} 
                            fill
                            sizes='100vw'
                            className='size-full'
                            loading='lazy'
                            objectFit='cover'
                            />
                    </div>
                </div>
                <div className=" text-background p-4 w-full h-[20%]">
                    <h5 className=" text-lg font-semibold font-roboto">
                        {title}
                    </h5>
                    
                    <div className=" relative w-full h-full opacity-80">
                        <div className="opacity-0">i</div>
                        <p className=" absolute top-0 mb-[5px] transition-all duration-300 ease-in translate-y-0 group-hover:-translate-y-full group-hover:opacity-0">{type}</p>
                        <p className=" absolute top-0 transition-all duration-300 ease-in -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">{`// Afficher plus`}</p>
                    </div>
                </div>
            </article>
        </Link>

    )
}

export default Card;