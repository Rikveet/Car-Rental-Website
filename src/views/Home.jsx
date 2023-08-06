import {Google, Instagram, Twitter} from "@mui/icons-material";
import {Subscribe} from "@components/forms/Subscribe";
import styles from "@styles/home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.companyName}>AXLE RENTAL</div>
                <div className={styles.menu}>
                    <a className={styles.link} href={'/fleet'}>Fleet</a>
                    <a className={styles.link} href={'/booking'}>Booking</a>
                    <a className={styles.link} href={'#faq'}>FAQ</a>
                </div>
                <div className={styles.round}>
                    <div className={`${styles.r} ${styles.r1}`}/>
                    <div className={`${styles.r} ${styles.r2}`}/>
                    <div className={`${styles.r} ${styles.r3}`}/>
                    <div className={`${styles.r} ${styles.r4}`}/>
                    <div className={`${styles.r} ${styles.r5}`}/>
                </div>
            </div>
            <div className={styles.message}>
                <div className={styles.wrapper}>
                    <div className={styles.row}>
                        <div className={styles.title}>
                            Rev Up Your Life
                        </div>
                        <div className={styles.experienceMessage}>
                            Experience the freedom and joy of hitting the open road with our stunning and diverse
                            collection of high-quality vehicles.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.gallery}>
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={'/assets/images/suv.jpg'} alt={'suv image'}/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>
                                Family SUV
                            </div>
                            <div className={styles.description}>
                                Drive in comfort and style with our spacious family SUVs, perfect for exploring with
                                loved ones.
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={'/assets/images/sedan.jpg'} alt={'sedan image'}/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>
                                Elegant Sedan
                            </div>
                            <div className={styles.description}>
                                Arrive in sophistication and luxury with our top-of-the-line sedans, designed for
                                ultimate comfort.
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <img className={styles.image} src={'/assets/images/sporty.jpg'} alt={'sports car image'}/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.heading}>
                                Sporty
                            </div>
                            <div className={styles.description}>
                                Feel the wind in your hair as you zoom around in our breathtaking convertibles, perfect
                                for thrill-seekers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.callToAction}>
                <div className={styles.wrapper}>
                    <div className={`text-left ${styles.title}`}>
                        Find Your Dream Ride Today!
                    </div>
                    <div className={styles.searchButtonsWrapper}>
                        <a href={'/fleet'} className={`${styles.button}`}>Search Cars</a>
                        <a href={'tel:+19059170818'} className={`${styles.button}`}
                           style={{background: '#d6d5c9', color: '#000000'}}>Contact Us</a>
                    </div>
                </div>
            </div>
            <div id={'faq'} className={styles.faq}>
                <div className={styles.title}>
                    Booking Questions?
                </div>
                <div className={styles.questionsRow}>
                    <div className={styles.questionGroup}>
                        <div className={styles.question}>
                            How do I reserve a car?
                        </div>
                        <div className={styles.answer}>
                            Simply use our search bar to select your desired vehicle and booking dates, then follow the
                            on-screen instructions.
                        </div>
                    </div>
                    <div className={styles.questionGroup}>
                        <div className={styles.question}>
                            What if I need to cancel?
                        </div>
                        <div className={styles.answer}>
                            We understand that plans change. Check our cancellation policy for details on how to cancel
                            your booking.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.callToAction} style={{background: 'white !important'}}>
                <div className={styles.wrapper}>
                    <div className={`text-left ${styles.title}`} style={{color: '#902923 !important'}}>
                        Get Exclusive Offers
                    </div>
                    <div className={styles.subscriberInput}>
                        <Subscribe/>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.icons}>
                    <Twitter/>
                    <Instagram/>
                    <Google/>
                </div>
                <div className={styles.info}>
                    Axle Car Rental
                </div>
            </div>
        </div>
    )
}
