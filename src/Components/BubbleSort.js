import React, { useState } from "react";

const BubbleSort = ({size, setArray, arr1}) => {
    const[loading, setLoading] = useState(false);
    var timeout = 500;
    
    async function bubbleSort(_callback){
        let array = arr1;
        size = array.length;
        for(let i=1; i<size; i++){
            for(let j=0; j<size-i; j++){
                setTimeout(() => {
                    array[j].color = 'green';
                    array[j+1].color = 'green';
                    setArray(array);
                }, timeout);
                timeout += 100;
                setTimeout(() => {
                    if(array[j].value < array[j+1].value){
                        let temp = array[j].value;
                        array[j].value = array[j+1].value;
                        array[j+1].value = temp;
                    } 
                }, timeout);
                timeout += 100;
                setTimeout(() => {
                    array[j].color = 'blue';
                    array[j+1].color = 'blue';
                    setArray(array);
                }, timeout);
            }
            setTimeout(() => {
               array[size-i].color = 'yellow'; 
            }, timeout);
        }
        setTimeout(() => {
            array[0].color = 'yellow';
            console.log(array);
            setArray(array);
            _callback();
        }, timeout);
    }
    
    async function handleClick(e){
        setLoading(true);
        bubbleSort(()=>{
            console.log('completed');
            setLoading(false);
        })
    }
    return ( 
        <>
            <button disabled={loading} onClick={handleClick} >Click</button>
        </>
    );
}

 
export default BubbleSort;