import styles from "@styles/temp.module.scss";
import {Gloock} from "@next/font/google";


const gloock = Gloock({weight: '400', style: 'normal', preload: false});

export default function Services() {
    return (
        <div className={`${gloock.className} w-[100%] h-[100vh] flex flex-row align-middle justify-center`}>
            <div className={styles.message}>
                <p>Coming soon...</p>
            </div>
        </div>
    )
}
