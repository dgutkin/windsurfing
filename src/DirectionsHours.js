
function DirectionsHours() {

    return (
        
        <div className="directions-hours-container">

            <h2>Directions & Hours</h2>
            <div className="directions-hours-section">
                <div className="directions-hours-right">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Day</th>
                            <th scope="col">Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Monday</td>
                            <td>9-5</td>
                            </tr>
                            <tr>
                            <td>Tuesday</td>
                            <td>9-5</td>
                            </tr>
                            <tr>
                            <td>Wednesday</td>
                            <td>9-5</td>
                            </tr>
                            <tr>
                            <td>Thursday</td>
                            <td>9-5</td>
                            </tr>
                            <tr>
                            <td>Friday</td>
                            <td>9-5</td>
                            </tr>
                            <tr>
                            <td>Saturday</td>
                            <td>9-5</td>
                            </tr>
                            <tr>
                            <td>Sunday</td>
                            <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="directions-hours-left">
                    <p>You can find Windsurfing Co. at 1 Wind Dr., Surf City, USA</p>
                </div>
            </div>
        </div>

    );

}

export default DirectionsHours;
