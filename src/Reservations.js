
import React, {useState} from 'react';

function Reservations() {

    const [reservation, setReservation] = useState({name: "", email: "", lessonGear: ""});

    const handleSubmit = (e) => {
        alert(JSON.stringify(reservation));
        e.preventDefault();
    }

    const handleNameChange = (e) => {
        setReservation({...reservation, name: e.target.value});
        e.preventDefault();
    }

    const handleEmailChange = (e) => {
        setReservation({...reservation, email: e.target.value});
        e.preventDefault();
    }

    const handleLessonGearChange = (e) => {
        setReservation({...reservation, lessonGear: e.target.value});
    }

    return (

        <div className="reservations-container">

            <h2>Reservations</h2>
            <p>Fill out the form below to book a lesson or gear.</p>
            <form onSubmit={handleSubmit}>

                <label>Name:<br/>
                    <input type="text" value={reservation.name} onChange={handleNameChange}/>
                </label>
                
                
                <label>Email:<br/>
                    <input type="email" value={reservation.email} onChange={handleEmailChange}/>
                </label>
                
                <label>
                    <input type="radio" name="lesson-gear" value="lesson" onChange={handleLessonGearChange}/>
                    Lesson <br/>
                    <input type="radio" name="lesson-gear" value="gear" onChange={handleLessonGearChange}/>
                    Gear
                </label>
                
                <input type="submit" value="Submit"/>

            </form>

        </div>

    );

}

export default Reservations;
