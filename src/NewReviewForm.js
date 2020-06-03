import React from "react";

class NewReviewForm extends React.Component {
    
    state = {
        description: ""
    }
    
    handleAllReviewInputs = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    

    handleReviewSubmit = (evt) => {
        evt.preventDefault()
        let description = this.state.description
        let player_card_id = this.props.playerCardId
        let user_id = 2
        fetch(`http://localhost:3000/reviews`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description, player_card_id, user_id
            })
        })
            .then(res => res.json())
            .then()
    }
   render(){
       return(
           <div>
               {this.props.reviewList}
               <input
                 type="text"
                 name= "description"
                 placeholder= "review"
                 value= {this.state.value}
                 onChange={this.handleAllReviewInputs}
                 /> 
                <button onClick={this.handleReviewSubmit}>Submit</button>
           </div>
       )
   }
}

export default NewReviewForm