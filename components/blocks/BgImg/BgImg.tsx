import Image from "next/image"
import Bg from '@/public/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg'
import Style from '@/styles/block/block.module.scss'

export const BgImg = () => {
    return(
        <>
            <div className={Style.bgImg}>
                <Image src={Bg} alt="background"/>
            </div>
        </>
    )
}