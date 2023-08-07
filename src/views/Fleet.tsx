import {useEffect, useState} from "react";
import {client} from "@util/supabaseClient";
import {data} from "autoprefixer";
import styles from "@styles/fleet.module.scss";
import Carousel from "react-material-ui-carousel";
import {Collapse, Paper} from "@mui/material";
import {AttachMoney, DirectionsCar, EvStation, LocalGasStation, Person} from "@mui/icons-material";

const VehicleImagesCarouselItem = ({image, onError}: { image: string, onError: Function }) => {
    return (
        <Paper className={styles.vehicleImageCarouselImageWrapper}>
            <img
                onError={(e) => {
                    onError();
                }}
                className={styles.vehicleImageCarouselImage} src={image} alt={'vehicle'}/>
        </Paper>
    )
}

const VehicleImagesCarousel = ({images, onError}: { images: string[], onError: Function }) => {

    return (
        <Carousel className={styles.vehicleImageCarousel}
                  autoPlay={false}
                  animation={'slide'}
                  height={'400px'}
                  stopAutoPlayOnHover={true}
                  duration={500}
                  swipe={true}
                  indicators={false}
        >
            {
                images.map((image, i) => <VehicleImagesCarouselItem onError={onError} key={i} image={image}/>)
            }
        </Carousel>
    )
}

const VehicleCard = ({vehicle}: { vehicle: Vehicle }) => {

    const [imageError, setImageError] = useState(false);

    return (
        <div className={styles.vehicleCard}>
            <div className={styles.vehicleCardImageWrapper}>
                {vehicle.images && vehicle.images.length > 0 && !imageError ?
                    <VehicleImagesCarousel images={vehicle.images} onError={() => {
                        setImageError(true)
                    }}/>
                    :
                    <DirectionsCar className={styles.vehicleCardPlaceholderIcon}/>
                }
            </div>
            <div className={styles.vehicleCardDetails}>
                <div className={styles.vehicleCardName}>{vehicle.make} {vehicle.model}</div>
                {/*<div className={styles.vehicleCardDescription}>{vehicle.description}</div>*/}
                <div className={styles.tags}>
                    <div className={styles.tag}>
                        {
                            vehicle.fuel === 'GAS' || vehicle.fuel === 'HYBRID' ?
                                <LocalGasStation/> : <EvStation/>
                        }
                        <div className={styles.tagText}>{vehicle.fuel}</div>
                    </div>
                    <div className={styles.tag}>
                        <Person/>
                        <div className={styles.tagText}>{vehicle.capacity}</div>
                    </div>
                    <div className={styles.tag}>
                        <AttachMoney/>
                        <div className={styles.tagText}>{vehicle.price_per_hour}/hr</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Section = ({title, vehicles}: { title: string, vehicles: Vehicle[] }) => {
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <div className={styles.section}>
            <div onClick={handleExpandClick} className={styles.sectionTitle}>
                {title}
                <div className={styles.sectionTitleBar}/>
            </div>

            <Collapse style={{width: '100%'}} in={expanded} timeout="auto" unmountOnExit>
                <div className={styles.sectionContent}>
                    {vehicles.map((vehicle) => (
                        <VehicleCard key={vehicle.vehicle_id} vehicle={vehicle}/>
                    ))}
                </div>
            </Collapse>
        </div>


    )
}

export default function Fleet() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<String | null>(null)

    useEffect(
        () => {
            async function fetchData() {
                const {data, error} = await client.from('vehicle').select('*');
                if (error)
                    setError(error.message)
                if (data) {
                    // type cast data to Vehicle[]
                    const vehicles: Vehicle[] = (data as Vehicle[])
                    const loadImages = async () => {
                        for (const vehicle of vehicles) {
                            try {
                                const interior_1 = client
                                    .storage
                                    .from('fleet')
                                    .getPublicUrl(`car_images/${vehicle.vehicle_id}/interior_1.jpg`);
                                const interior_2 = client
                                    .storage
                                    .from('fleet')
                                    .getPublicUrl(`car_images/${vehicle.vehicle_id}/interior_2.jpg`);
                                const exterior_1 = client
                                    .storage
                                    .from('fleet')
                                    .getPublicUrl(`car_images/${vehicle.vehicle_id}/exterior_1.jpg`);
                                const exterior_2 = client
                                    .storage
                                    .from('fleet')
                                    .getPublicUrl(`car_images/${vehicle.vehicle_id}/exterior_2.jpg`);
                                const exterior_3 = client
                                    .storage
                                    .from('fleet')
                                    .getPublicUrl(`car_images/${vehicle.vehicle_id}/exterior_3.jpg`);
                                vehicle.images = [
                                    exterior_1,
                                    exterior_2,
                                    exterior_3,
                                    interior_1,
                                    interior_2
                                ].filter(value => value.data?.publicUrl !== undefined)
                                    .map(value => value.data!.publicUrl)
                            } catch (_) {

                            }
                        }
                    }
                    // load vehicle images for each vehicle
                    await loadImages()
                    // set vehicles
                    setVehicles(vehicles)
                }

            }

            fetchData().then(
                () => {
                    setLoading(false)
                }
            ).catch(
                (error) => {
                    setError(error)
                }
            ).finally(
                () => {
                    setLoading(false)
                }
            )
        }, []
    )

    useEffect(() => {

    }, [error]);

    const render = () => {
        if (loading) {
           return;
        }
        if (data) {
            const midSizeSedans: Vehicle[] = []
            const standardSize: Vehicle[] = []
            const fullSize: Vehicle[] = []
            const suv: Vehicle[] = []
            const eightSeater: Vehicle[] = []
            vehicles.forEach(
                (vehicle) => {
                    if (vehicle.type === "MIDSIZE_SEDAN") {
                        midSizeSedans.push(vehicle)
                    } else if (vehicle.type === "STANDARD_SIZE") {
                        standardSize.push(vehicle)
                    } else if (vehicle.type === "FULL_SIZE") {
                        fullSize.push(vehicle)
                    } else if (vehicle.type === "SUV") {
                        suv.push(vehicle)
                    } else if (vehicle.type === "EIGHT_SEATER") {
                        eightSeater.push(vehicle)
                    }
                }
            )
            return (
                <div className={styles.container}>
                    <Section title={'Midsize Sedans'} vehicles={midSizeSedans}/>
                    <Section title={'Standard Size'} vehicles={standardSize}/>
                    <Section title={'Full Size'} vehicles={fullSize}/>
                    <Section title={'SUV'} vehicles={suv}/>
                    <Section title={'Eight Seater'} vehicles={eightSeater}/>
                </div>
            )
        }
    }

    return (
        <div>
            {render()}
            {error && <div>{error}</div>}
        </div>
    )
}