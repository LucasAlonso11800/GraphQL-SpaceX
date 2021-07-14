import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!){
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

function Launch(props) {
    const flight_number = parseInt(props.match.params.flight_number)

    return (
        <div>
            <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) console.log(error)

                        const {
                            mission_name,
                            flight_number,
                            launch_year,
                            launch_success,
                            rocket: { rocket_id, rocket_name, rocket_type, }
                        } = data.launch

                        return <div>
                            <h2 className="display-4 my-3"><span className="text-dark">Mission:</span> {mission_name}</h2>
                            <h4 className="mb-3">Launch details</h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">Flight Number: {flight_number}</li>
                                <li className="list-group-item">Launch Year: {launch_year}</li>
                                <li className="list-group-item">Launch successful:
                                    {
                                        launch_success ? <span className="text-success">Yes</span> :
                                            <span className="text-danger">No</span>
                                    }</li>
                            </ul>
                            <h4 className="mb-3">Rocket Details</h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item">Rocket ID: {rocket_id}</li>
                                <li className="list-group-item">Rocket Name: {rocket_name}</li>
                                <li className="list-group-item">Rocket Type: {rocket_type}</li>
                            </ul>
                            <Link to="/" className="btn btn-secondary">Back </Link>
                        </div>
                    }
                }
            </Query>
        </div>
    )
}

export default Launch
