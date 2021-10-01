import React from "react";
import Blocks from "./Blocks";
import generateRandom from "./Functions";
import NavBar from "./NavBar";
import Sort from "./Sort";

class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            size: 10,
            array: generateRandom(),
            sortType: 'bubblesort',
            loading: false,
            blockWidth: 110,
            speed: 20
        }
    }
    
    setSpeed = (value)=>{
        this.setState({
            speed: value
        });
    }
    
    setLoading = (value)=>{
        this.setState({
            loading: value
        });
    }
    
    setSortType = (s)=>{
        this.setState({
            sortType: s
        });
    }
    
    setSize = (n)=>{
        let blockwidth = parseInt(1100/n);
        this.setState({
            size: n,
            blockWidth: blockwidth
        })
        this.setRandomValues();
    }
    
    setArray = (arr)=>{
        this.setState({
            array: arr
        });
    }
    
    setRandomValues = ()=>{
        this.setArray(generateRandom(this.state.size));
    }
    
    render() { 
        return (  
            <>
                <NavBar size={this.state.size} setSize={this.setSize} setSort={this.setSortType} loading={this.state.loading} setRandomValues={this.setRandomValues} sortType={this.state.sortType} setLoading={this.setLoading} arr1={this.state.array} setArray={this.setArray} setSpeed={this.setSpeed} speed={this.state.speed}/>
                <Blocks array={this.state.array} size={this.state.size} blockWidth={this.state.blockWidth}/>
                <Sort sortType={this.state.sortType} array={this.state.array} size={this.state.size} setArray={this.setArray} setLoading={this.setLoading}/>
            </>
        );
    }
}
 
export default Information;