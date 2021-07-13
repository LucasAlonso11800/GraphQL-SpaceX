import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }   
    }
`;

function Launches() {
    return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
            <Query query={LAUNCHES_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) return console.log(error)
                        return data.launches.map(launch => {
                            return <LaunchItem
                                key={launch.flight_number}
                                launch={launch}
                            />
                        })
                    }
                }
            </Query>
        </div>
    )
}

export default Launches