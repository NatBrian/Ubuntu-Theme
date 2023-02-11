import React from 'react'

export default function GamePacman() {
    return (
        <iframe src="https://bobrov.dev/pacman-pwa/index.html" frameBorder="0" title="GamePacman" className="h-full w-full bg-white"></iframe>
    )
}

export const displayGamePacman = () => {
    <GamePacman> </GamePacman>
}