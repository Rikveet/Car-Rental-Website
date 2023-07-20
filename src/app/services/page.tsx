import styles from "@styles/temp.module.scss";
import {Abril_Fatface} from "@next/font/google";


const abrilFatface = Abril_Fatface({weight: '400', subsets: ['latin']});

export default function Services() {
    return (
        <div className={`${abrilFatface.className} w-[100%] h-[100vh] flex flex-row align-middle justify-center`}>
            <div className={styles.message}>
                <p>Coming soon...</p>
            </div>
        </div>
    )
}
