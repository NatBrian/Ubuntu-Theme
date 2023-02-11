import React from 'react'

export default function DrawBoard() {
    return (
        <iframe src="https://witeboard.com/" frameBorder="0" title="WhiteBoard" className="h-full w-full bg-white"></iframe>
    )
}

export const displayDrawBoard = () => {
    <DrawBoard> </DrawBoard>
}
