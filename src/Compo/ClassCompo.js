import React, { Component } from 'react';

class ClassCompo extends Component {
    render() {
        return (
            <div className="classborder">
                <h1>This is created using Class Component</h1>
                <h3>This is done using External CSS</h3>

                <h3 style={{ color: "blue" }}>This is done using Inline CSS</h3>
            </div>
        )
    }
}
export default ClassCompo;