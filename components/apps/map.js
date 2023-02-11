import React from 'react'

export default function Map() {
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36432.76016994306!2d106.81166044042496!3d-6.184105805225986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1676035677368!5m2!1sen!2sid" frameBorder="0" title="Google Map" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayMap = () => {
    <Map> </Map>
}
