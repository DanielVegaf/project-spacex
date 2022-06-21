import { Link } from 'react-router-dom';

import { BsFillCalendarEventFill } from 'react-icons/bs';
import { Item, ItemHeader,ContainerLink, MoreDetails } from './launchItem.styled';

export function LaunchItem({ launch }) {
    return (
        <>

            <Item>
                <ItemHeader>
                    <div>
                        <p>Mission: <strong>{launch.mission_name}</strong> ({launch.launch_year})</p>
                        <p>
                            Flight Number: <strong>{launch.flight_number}</strong>
                        </p>
                        <p>
                            <BsFillCalendarEventFill style={{ color: 'gray' }} />
                            <span style={{ color: 'gray' }}>{launch.launch_date_local.split("T")[0]}</span>
                        </p>
                    </div>
                    <span>
                        {launch.launch_success ?
                            <p style={{ color: 'green' }}> <strong>Success</strong></p>
                            : <p style={{ color: 'red' }}><strong>Failure</strong></p>}
                    </span>
                </ItemHeader>

                <ContainerLink>
                <MoreDetails to={`/launch/${launch.flight_number}`}>
                    <button>More Details</button>
                </MoreDetails>
                </ContainerLink>
            </Item>
        </>
    );
}

