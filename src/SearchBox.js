import React from "react"

class SearchBox extends React.Component {

    handleSearch = evt => {
        this.props.changeSearchTerm(evt.target.value)
    }
    render(){
        return(
            <div>
            <input
            className="search" 
            type="text"
            placeholder="Search"
            value={this.props.searchTerm}
            onChange={this.handleSearch}
            
            />
            </div>
        )
    }
}



export default SearchBox