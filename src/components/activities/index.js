import React, { Component } from 'react'
import CanvasComponent from './canvas';

export class Activities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            velocityRange: 0,
            velocityInput: 0,
        }
    }

    onRangeChangeHandler = (value) => {
        const rangeValue = parseInt(value);
        if (rangeValue > 0) {
            this.setState({
                velocityRange: rangeValue,
                velocityInput: rangeValue
            });
        } else {
            this.setState({
                velocityRange: rangeValue,
                velocityInput: Math.round(rangeValue / 3)
            });
        }
    }

    onInputChangeHandler = (value) => {
        const velocity = parseInt(value);
        if (velocity <= 100 && velocity >= -300) {
            const velocityRange = velocity > 0 ? velocity : Math.round(velocity * 3);
            this.setState({
                velocityRange,
                velocityInput: velocity
            })
        } else {
            window.alert('Provided value is out of range, accepted range is between -100 to 100')
            this.setState({
                velocityRange: 0,
                velocityInput: 0,
            });

        }
    }

    render() {
        return (
            <div className="tabcontent activites">
                <h1>ACTIVITIES</h1>
                <div className="activites_content">
                    <CanvasComponent velocityRange={this.state.velocityRange} velocityInput={this.state.velocityInput} />
                    <div className="velocity-block">
                        <label>VELOCITY:</label>
                        <input type='text' size={4} className="velocity-input" min="-100" max="100" value={this.state.velocityInput} onChange={(e) => { this.onInputChangeHandler(e.target.value) }} />
                        <input type='range' step={1} min="-300" max="100" data-drag="true" onChange={(e) => { this.onRangeChangeHandler(e.target.value) }} value={this.state.velocityRange} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Activities
