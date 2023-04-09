import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <meta name="robots" content="noindex, nofollow" />
            {/* <title>Nathanael Brian</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Nathanael Brian Portfolio" />
            <meta name="description"
                content="Nathanael Brian personal portfolio - Ubuntu Theme" />
            <meta name="author" content="Nathanael Brian" />
            <meta name="keywords"
                content="nathanael brian, nathanael, brian, nathanael brian project, nathanael brian portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" /> */}

            /* Search Engine */
            <meta name="image" content="images/logos/fevicon.png" />
            /* Schema.org for Google */
            {/* <meta itemProp="name" content="Nathanael Brian Portfolio" />
            <meta itemProp="description"
                content="Nathanael Brian personal portfolio - Ubuntu Theme" />
            <meta itemProp="image" content="images/logos/fevicon.png" />           */}
            /* Twitter */
            {/* <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Nathanael Brian Portfolio" />
            <meta name="twitter:description"
                content="Nathanael Brian personal portfolio - Ubuntu Theme" /> */}
            /* Open Graph general (Facebook, Pinterest & Google+) */
            {/* <meta name="og:title" content="Nathanael Brian Portfolio" />
            <meta name="og:description"
                content="Nathanael Brian personal portfolio - Ubuntu Theme" />
            <meta name="og:site_name" content="Nathanael Brian Portfolio" />
            <meta name="og:type" content="website" /> */}

            <link rel="icon" href="images/logos/fevicon.svg" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
