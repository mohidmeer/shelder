import { useRef } from 'react';
import Script from 'next/script';

export default function Map(){
    const mapRef = useRef();

    return ( 
        <>
            <div ref={mapRef} className='text-center text-2xl p-8'>Google Map API key Required</div>
            
        </>

    );
}