import React from 'react';

class Box extends React.Component {
    render() {
        return(
            <div className='box col-sm-3 col-6'>
                <span className="material-icons" style={{fontSize: 100, color: this.props.color}}>
                    {this.props.icon}
                    <p>{this.props.value}{this.props.unit}</p>
                </span>
            </div>
        )
    }
}

export default Box