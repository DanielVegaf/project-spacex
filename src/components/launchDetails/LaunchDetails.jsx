import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as API from "../../services/launches";

import { Container, ReturnHome, DetailsContainer } from "./launchDetails.styled";

export function LaunchDetails() {

    const [launch, setLaunch] = useState({});
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId)
            .then(setLaunch)
            .catch(console.log);
    }, [launch]);

    return (
        <>
            <Container>
                <ReturnHome to="/">
                    All Launches
                </ReturnHome>
                <div className="contentLoading">
                    {!launch ?
                        <div>
                            <h1>Loading...</h1>
                        </div> :
                        <DetailsContainer>
                            <h3>
                                Mission: <strong>{launch.mission_name}</strong>
                            </h3>
                            <p>
                                Flight Number: <strong>{launch.flight_number}</strong>
                            </p>
                            <p>
                                Year: {launch.launch_year}
                            </p>
                            <span>
                                {launch.launch_success ?
                                    <p style={{ color: 'green' }}>Success</p>
                                    : <p style={{ color: 'red' }}>Failure</p>}
                            </span>
                            <p>
                                Details:{launch.details}
                            </p>

                            <div>
                                <a href={launch.links?.article_link} target="_blank">
                                    Article <strong>{launch.mission_name}</strong>
                                </a>
                            </div>
                        </DetailsContainer>
                    }
                </div>
            </Container>
        </>
    )
}
