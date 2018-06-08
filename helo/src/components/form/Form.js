import React, { Component } from 'react';
import './../flexbox-grid.css'
import './form.css'


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div>
                    Form
                    <input />
                    <button>ONE</button>
                    <button>TWO</button>
                </div>
                <div>

                </div>


            </div>
        );
    }
}

export default Form;