import Script from 'next/script'
import React from 'react'

const Analytics = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-C265KL3GEY" strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
   
             gtag('config', 'G-C265KL3GEY');
             `}
            </Script>
        </>
    )
}

export default Analytics