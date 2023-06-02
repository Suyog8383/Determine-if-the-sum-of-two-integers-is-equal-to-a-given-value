let arr=[5,7,1,2,8,4,3];
let target=8;
function sumPair(arr,target){
    let obj={};
    let result=[];
    for(let i=0;i<arr.length;i++){
        let val=target-arr[i];
        if(obj.hasOwnProperty(arr[i])){
            result.push([arr[i],val]);
        }else{
            obj[val]=true;
        }
    }
    return result;
}
console.log(sumPair(arr,target));
