import React from "react";

class NewFormPlayer extends React.Component {
    
    state = {
        name: "",
        image: "",
        country: "",
        club: "",
        review: ""
    }

    handleAllInputs = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addOnePlayer(this.state)
    }
    

    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                 className = "input"
                 type="text"
                 name= "name"
                 placeholder= "name"
                 value= {this.state.value}
                 onChange={this.handleAllInputs}
                 /> <br/>
                 <input
                 className = "input" 
                 type="text"
                 name= "image"
                 placeholder= "image"
                 value= {this.state.value}
                 onChange={this.handleAllInputs}
                 /> <br/>
                 <input  
                className = "input"               
                type="text" 
                name= "country"
                 placeholder= "country"
                 value= {this.state.value}
                 onChange={this.handleAllInputs}
                 /> <br/>
                 <input      
                 className = "input"           
                 type="text"
                 name= "club"
                 placeholder= "club"
                 value= {this.state.value}
                 onChange={this.handleAllInputs}
                 /><br/>
                <button 
                className="newBtn"
                onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default NewFormPlayer