import React from 'react'

export default function NewsFront() {
    return (
        <iframe src="https://newsfront.netlify.app/" frameBorder="0" title="NewsFront" className="h-full w-full bg-white"></iframe>
    )
}

export const displayNewsFront = () => {
    <NewsFront> </NewsFront>
}