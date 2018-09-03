
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.css'

class App extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="app-component">
                <p>App Component</p>
                <ParentComponent />
            </div>
        );
    }
}


class ParentComponent extends Component {
    constructor(props) {
        super();
    }
    render() {
        const hobbies = ["Driving", "Music"];

        const sex = {
            male: 'Male',
            female: 'Female',
        }
        return (
            <div className="parent-component">
            <p>Parent Component</p>
                <ChildComponent name={"Sujith"} age={"31"} sex={sex} hobbies={hobbies}>
                <p>Text inside Child Component</p>
                </ChildComponent>
            </div>
        );
    }
}


class ChildComponent extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="child-component">
                <p>Child Component</p>
                <div>
                    <p>Name is {this.props.name}</p>
                    <p>Age is {this.props.age}</p>
                    <p>Sex is {this.props.sex.male}</p>
                    <p>Hobbies are: {this.props.hobbies.join(', ')}</p>
                    <p>Hobbies are: (in list using maps)</p>
                    <ul>
                        {this.props.hobbies.map(
                            (hobby,k) => <li key={k}>{hobby}</li>
                        )}
                    </ul>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ParentComponent.propTypes  = {
  name: PropTypes.string,
  age: PropTypes.number,
  sex: PropTypes.object,
  hobbies: PropTypes.array,
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'))