import React from "react";
import NewReviewForm from "./NewReviewForm";



class PlayerCard extends React.Component{
    
    state= {
        showForm: false
    }

    toggleReviewForm = () => {
        this.setState(prevState => ({
          showForm: !prevState.showForm
        }))
      }

      handleDelete = () =>{
        this.props.deletePlayerCard(this.props.singleCard)
      }
    
    render(){
        let {id, name, image, country, club, reviews} = this.props.singleCard
        // console.log(reviews[0].user.username)
        let reviewList = reviews.map((review) => 
        <p key={review.id}>
           Fika: {review.description}
        </p>
            )
        return(
            <div className = "space">
                <button className="deteBtn" onClick ={this.handleDelete}>X</button>
                <img className = "imgWidth" src = {image} alt={name} />
                <h3>{name}</h3>
                <p><i class="home icon"></i>{country}</p>
                <p><i class="soccer icon"></i>{club}</p>
                {/* <p>Review: {reviews[0].description}</p> */}
                <div className="reviews">
                    <button className = "showFormBtn" onClick={this.toggleReviewForm}>{this.state.showForm ? "Hide" : "Show"} Review Form</button>
                    {this.state.showForm && <NewReviewForm
                    playerCardId={id}
                    reviewList={reviewList}
                    />}
                </div>
                </div>
        
        )
    }
}




        {/* <div class="ui card">
          <div class="image">
            <img src= {image} />
          </div>
            <div class="content">
                <a class="header">{name}</a>
                    <div class="meta">
                        <i class="home icon"></i>
                            {country}
            </div>
                <div class="description">
                Review: {reviews[0].description}   
                </div>
                </div>
          <div class="extra content">
              <i class="soccer icon"></i>
                {club}    
            </div>
        </div>
            )
        } */}
        

        
    
    
   

export default PlayerCard