import React from "react";
import { Button, Nav, Form, Navbar, Container } from "react-bootstrap";
import BubbleSort from "./SortFunctions/BubbleSort";
import MergeSort from "./SortFunctions/MergeSort";

const NavBar = ({size, setSize, setSort, loading, setRandomValues, sortType, setArray, arr1,setLoading, setSpeed, speed}) => {
    
    const changeSize = (e)=>{
        setSize(e.target.value);
    }
    
    const changeFunction = (e)=>{
        setSort(e.target.value);
    }
    
    const sortFunctions = {
        'bubblesort': BubbleSort,
        'mergesort': MergeSort,
    }
    
    const startSorting = (e)=>{
        sortFunctions[sortType]({size, setArray, arr1, setLoading, speed});
    }
    
    const changeSpeed = (e)=>{
        setSpeed(parseInt(e.target.value));
    }
    
    return ( 
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
            <Navbar.Brand href="#">AlgoVis</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                </Nav>
                <Nav>
                    <Form className="d-flex">
                        <Form.Range style={{marginRight: "20px", marginTop: "10px"}} min={10} max={100} value={size} onChange={changeSize} disabled={loading}/>
                        <Form.Control type="text" style={{marginRight:"20px", width:"100px"}} disabled={true} value={size}/>
                        
                        <Form.Select style={{marginRight: "20px", cursor:"pointer"}} onChange={changeFunction} disabled={loading}>
                            <option value="bubblesort">Bubble Sort</option>
                            <option value="mergesort">Merge Sort</option>
                            
                        </Form.Select>
                        
                        <Form.Select style={{marginRight:"20px", cursor:"pointer"}} disabled={loading} onChange={changeSpeed}>
                            <option value="17">Fast</option>
                            <option value="50">Medium</option>
                            <option value="100">Slow</option>
                            <option value="5">Super Fast</option>
                        </Form.Select>
                        
                        <Button variant="danger" style={{width: "100px", marginRight:"20px"}} disabled={loading} onClick={()=>setRandomValues()}>Reset</Button>
                        <Button variant="success" style={{width: "100px"}} disabled={loading} onClick={startSorting}>Start</Button>
                    </Form>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
}
 
export default NavBar;