import {CSSProperties} from "react";
import {useLottie} from "lottie-react";
import comingSoonAnimation from "./coming_soon.json";


const style: CSSProperties = {
    width: '100%',
    height: '100%'
};

const options = {
    animationData: comingSoonAnimation,
    loop: true,
    autoplay: true,
};

export default function ComingSoon() {
    const {View} = useLottie(options, style);
    return (
        <div className="flex flex-col items-center justify-center h-[75vh] w-[100%] bg-[#FEFEFE]">
            {View}

        </div>
    )
}