import React from 'react';
import PlayerCardContainer from "./PlayerCardContainer"
import NavBar from './NavBar'
import NewFormPlayer from './NewFormPlayer';
import SearchBox from './SearchBox'
import RandomBtn from './RandomBtn'

import './App.css';

class App extends React.Component {

  state = {
    playerCards: [],
    formClick: false,
    searchTerm: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/player_cards")
      .then(res => res.json())
      .then((arrayOfData) => {

        this.setState({
          playerCards: arrayOfData
        })
      })
  }

  handleForm = () =>{
    this.setState({
      formClick: !this.state.formClick
    })
  }

  addOnePlayer = (newPlayer) => {
    fetch("http://localhost:3000/player_cards",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlayer)
    })
      .then(res => res.json())
      .then((newPlayerCreated) => {

        let copyOfPlayer = [...this.state.playerCards, newPlayerCreated]
          this.setState({
            playerCards: copyOfPlayer
          })
      })
  }

  deletePlayerCard = (deleteCard) => {
    let newList = this.state.playerCards.filter((playerCard)=> {
      return playerCard.id !== deleteCard.id
    })
    this.setState({
      playerCards: newList
    })
    
    fetch(`http://localhost:3000/player_cards${deleteCard.id}`, {
      method: 'DELETE'
    })
  }



  // newReviewForm = (newReview) => {
  //   let copyOfReview = [...this.state.playerCards, newReview]
  //   this.setState({
  //     playerCards: copyOfReview
  //   })
  // }



  changeSearchTerm = (newTerm) =>{
    this.setState({
      searchTerm: newTerm
    })
  }

  functionReturnsArray = () => {
    let filterArray = this.state.playerCards.filter((singleCard) => {
      return singleCard.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filterArray
  }



  render() {
    return (
      <div>
        <NavBar />
         <button className= "formBtn" onClick={this.handleForm}>Show me the form</button>
         {this.state.formClick && <NewFormPlayer
         addOnePlayer={this.addOnePlayer}
         />
         }
          OR
          <button className= "randomBtn"> Create Random Player</button>

        {/* <RandomBtn/> */}
         {/* <button className= "randomBtn">Random Players</button> */}
         {/* <hr/> */}
         <br/>
         <SearchBox
         searchTerm={this.state.searchTerm}
         changeSearchTerm={this.changeSearchTerm}
         />
        <PlayerCardContainer
        // playerCards={this.state.playerCards}
        playerCards={this.functionReturnsArray()}
        deletePlayerCard={this.deletePlayerCard}
        />
      </div>
    );
  }
}
  
export default App;
