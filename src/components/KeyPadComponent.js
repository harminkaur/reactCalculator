import React, {Component} from 'react';


class KeyPadComponent extends Component {
    render() {
        return (
            <div className="button">
                <button name="(" onClick = {c => this.props.onClick(c.target.name)}> ( </button>
                <button name="CE" onClick = {c => this.props.onClick(c.target.name)}> CE </button>
                <button name=")" onClick = {c => this.props.onClick(c.target.name)}> ) </button>
                <button name="C" onClick = {c => this.props.onClick(c.target.name)}> C </button>

                <br/>

                <button name="1" onClick = {c => this.props.onClick(c.target.name)}> 1 </button>
                <button name="2" onClick = {c => this.props.onClick(c.target.name)}> 2 </button>  
                <button name="3" onClick = {c => this.props.onClick(c.target.name)}> 3 </button>
                <button name="+" onClick = {c => this.props.onClick(c.target.name)}> + </button>
                
                <br/>
        
                <button name="4" onClick = {c => this.props.onClick(c.target.name)}> 4 </button>
                <button name="5" onClick = {c => this.props.onClick(c.target.name)}> 5 </button>
                <button name="6" onClick = {c => this.props.onClick(c.target.name)}> 6 </button>                  
                <button name="-" onClick = {c => this.props.onClick(c.target.name)}> - </button>

                <br/>

                <button name="7" onClick = {c => this.props.onClick(c.target.name)}> 7 </button>
                <button name="8" onClick = {c => this.props.onClick(c.target.name)}> 8 </button>
                <button name="9" onClick = {c => this.props.onClick(c.target.name)}> 9 </button>
                <button name="*" onClick = {c => this.props.onClick(c.target.name)}> * </button>

                <br/>

                <button name="." onClick = {c => this.props.onClick(c.target.name)}> . </button>
                <button name="0" onClick = {c => this.props.onClick(c.target.name)}> 0 </button>
                <button name="=" onClick = {c => this.props.onClick(c.target.name)}> = </button>
                <button name="/" onClick = {c => this.props.onClick(c.target.name)}> / </button>

                <br/>

            </div>
        );

    }

}

export default KeyPadComponent;