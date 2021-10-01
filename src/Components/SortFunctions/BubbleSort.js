
async function Sort(arr1, setArray, size, speed,_callback){
    var array = arr1;
    var timeout = speed;
    size = array.length;
    for(let i=1; i<size; i++){
        for(let j=0; j<size-i; j++){
            setTimeout(() => {
                array[j].color = 'green';
                array[j+1].color = 'green';
                setArray(array);
            }, timeout);
            timeout += speed;
            setTimeout(() => {
                if(array[j].value > array[j+1].value){
                    let temp = array[j].value;
                    array[j].value = array[j+1].value;
                    array[j+1].value = temp;
                } 
            }, timeout);
            timeout += speed;
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
        setArray(array);
        _callback();
    }, timeout);
}

async function BubbleSort({arr1, setArray, setLoading, size, speed}){
    setLoading(true);
    Sort(arr1, setArray, size, speed,()=>{
        setLoading(false);
    })
}
 
export default BubbleSort;