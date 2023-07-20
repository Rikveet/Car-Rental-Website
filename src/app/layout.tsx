import '@styles/globals.scss'
import type {Metadata} from 'next'
import React from "react";
import ThemeWrapper from "@/app/ThemeWrapper";

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Axle Car Rental',
    description: 'Car rental service in Greater Toronto Area, Canada. We offer a wide range of vehicles for rent. Book online today!',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body suppressHydrationWarning={true} >
        <ThemeWrapper>
            {children}
        </ThemeWrapper>
        </body>
        </html>
    )
}
