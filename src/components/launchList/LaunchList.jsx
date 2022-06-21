import * as API from '../../services/launches';

import { useEffect, useState } from 'react';
import Logo from '../../assest/logo-spacex.png';
import { LaunchItem } from '../launchItem/LaunchItem';
import { Container, Grid, Img, Loading, SearchContainer } from './launchList.styled';

export function LaunchList() {

    const [launches, setLaunches] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        API.getAllLaunches()
            .then(setLaunches)
            .catch(console.log);
    }, []);

    const filter = (searchBy) => {
        setSearch(searchBy);
    }

    return (
        <>
            <Container>


                {launches.length === 0 ? (
                    <Loading>
                        <h2>Loading...</h2>
                    </Loading>
                ) :
                    <>
                        <Img>
                            <img src={Logo} alt="logo spacex" />
                        </Img>
                        <h1>Launches</h1>

                        <SearchContainer>
                            <input
                                type='text'
                                placeholder='Mission name...'
                                onChange={(e) => filter(e.target.value)}
                            />
                        </SearchContainer>

                        <Grid>
                            {
                                launches.map((launch, flight_number) => {
                                    if (launch.mission_name.toLowerCase().includes(search.toLowerCase())) {
                                        return (
                                            <div key={flight_number}>
                                                <LaunchItem launch={launch} />
                                            </div>
                                        )
                                    }
                                })
                            }
                        </Grid>
                    </>
                }

            </Container>
        </>
    )
}

