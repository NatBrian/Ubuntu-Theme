import React from 'react'

export default function Windy() {
    return (
        <iframe src="https://embed.windy.com/embed2.html?lat=-5.744&lon=106.885&detailLat=-6.719&detailLon=107.029&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameBorder="0" title="Windy" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayWindy = () => {
    <Windy> </Windy>
}