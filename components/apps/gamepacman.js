import React from 'react'

export default function GamePacman() {
    return (
        <iframe src="https://pacman-pwa.web.app/" frameBorder="0" title="GamePacman" className="h-full w-full bg-white"></iframe>
    )
}

export const displayGamePacman = () => {
    <GamePacman> </GamePacman>
}