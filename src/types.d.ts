export {};

declare global{

    type Vehicle = {
        images?: string[],
        vehicle_id: number,
        description?: string,
        make: string,
        model: string,
        capacity: number,
        doors: number,
        fuel: string,
        type: string,
        stock: number,
        price_per_hour: number,
    }

}