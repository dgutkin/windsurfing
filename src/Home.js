
function Home() {

    return (

        <div id="home-container">
            <img className="splash" src="./beach.jpg"/>
            <img className="logo" src="./logo.png"/>
            <p className="logo-text">Windsurfing Co.</p>
            <h1 className="header-text">Find your next adventure!</h1>
            <a href="https://tidesandcurrents.noaa.gov/map/index.html">
                <button className="btn btn-primary" id="wind-conditions-button">
                    Wind Conditions
                </button>
            </a>

        </div>

    );

}

export default Home;
