import { PeopleWrapper } from "./StyledComponents/ScPeople";
import React from 'react';
import PeopleCard from "./PeopleCards";


class PeopleList extends React.Component {

    render() {
        return <PeopleWrapper>
            <div>
                <table className="table-wrap">
                    <thead>
                        <tr className="titles">
                            <th className="table-title">Name</th>
                            <th className="table-title">Height</th>
                            <th className="table-title">Gender</th>
                            <th className="table-title-films">Films</th>
                            <th className="table-title-act">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((item, index) => (
                            <PeopleCard item={item} deletePerson={this.props.deletePerson} key={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </PeopleWrapper>

    }
}

export default PeopleList;