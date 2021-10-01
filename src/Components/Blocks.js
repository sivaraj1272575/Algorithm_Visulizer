const Blocks = ({array, size, blockWidth}) => {
    return (  
        <>
            <div className="container" style={{backgroundColor:"black", height: "500px", width: "1200px", marginTop:"50px",borderRadius:"20px",padding:"30px"}}>
                <div className="blocks" style={{marginTop: "30px"}}>
                    {array && array.map(({value, color}, idx)=>(
                        <div className="block" style={{backgroundColor: color, height:value, border:"1px solid white", width: blockWidth, position: "relative"}} key={idx}>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
 
export default Blocks;