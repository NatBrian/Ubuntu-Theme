import React from 'react'

export default function OnlineGallery() {
    return (
        <iframe src="https://scrollscape.netlify.app/" frameBorder="0" title="OnlineGallery" className="h-full w-full bg-white"></iframe>
    )
}

export const displayOnlineGallery = () => {
    <OnlineGallery> </OnlineGallery>
}