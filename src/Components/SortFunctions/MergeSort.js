var timeout;
var temp = [];
var array;
function tmeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function merge(low, mid, high,setArray, speed){
    setTimeout(() => {
        temp = [];
        let l = low;
        let m = mid+1;
        while(l<=mid && m<=high){
            if(array[l] && array[m] && array[l].value < array[m].value){
                temp.push(array[l].value);
                l+=1;
            }
            else{
                temp.push(array[m].value);
                m +=1;
            }
        }
        while(l<=mid){
            temp.push(array[l].value);
            l+=1;
        }
        while(m <= high){
            temp.push(array[m].value);
            m += 1;
        }
    }, timeout);
    timeout += speed;
    setTimeout(() => {
        let l = low;
        for(let i=0;i<temp.length; i++){
            array[l].value = temp[i];
            array[l].color = 'yellow';
            l+=1;
        }
        setArray(array);
    }, timeout);
    timeout += (2*speed);
}

async function mergesort(low, high, setArray, speed){
        if(low < high){
            let mid = Math.floor((low+high)/2);
            await mergesort(low,mid,setArray,speed);
            await mergesort(mid+1,high,setArray, speed);
            await merge(low, mid, high, setArray, speed);
            await setArray(array);
        }
}

async function Sort(size, setArray, speed, _callback){
    setTimeout(() => {
        mergesort(0, array.length-1, setArray, speed);
        _callback();
    }, timeout);
}

async function MergeSort({size, setArray, arr1, setLoading, speed}){
    setLoading(true);
    array = arr1;
    timeout = speed;
    Sort(size, setArray, speed, ()=>{
        setLoading(false);
    });
}

export default MergeSort;