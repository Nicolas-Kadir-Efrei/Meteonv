"use client";
import ColorSchemesExample from "../components/Navbar";

const pfp ='/assets/img/pfp.jpg';

export default function Contact() {
    return (
<div>      
    <div>
        <ColorSchemesExample/>
    </div>
    <div className="TitreContact">
    <img src={pfp} className="pfpbg"  />

</div>

</div>    
    );
}
