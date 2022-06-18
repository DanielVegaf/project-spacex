import {BsFillCalendarEventFill} from 'react-icons/bs';

const LaunchItem = (props) => {
    return (
        <li>
            <p>Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})</p>
            <span>
                {launch.launch_success ?
                    <p style={{ color: 'green' }}>Success</p>
                    : <p style={{ color: 'red' }}>Failure</p>}
            </span>
            <p>
                <BsFillCalendarEventFill style={{ color: 'gray' }} />
                <span style={{ color: 'gray' }}>{launch.launch_date_local.split("T")[0]}</span>
            </p>
        </li>
    )
};

export default LaunchItem;
