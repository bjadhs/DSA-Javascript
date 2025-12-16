function three_sum(nums){
    let sortNums = nums.sort((a,b)=>a-b);
    let n = sortNums.length
    let ans = []

    for(let i =0; i< n; i++){
        if(sortNums[i]>0) break;
        if(i>0 && sortNums[i]===sortNums[i-1]) continue;

        let j = i+1
        let k = n-1

        while(j<k){
            let sum = sortNums[i] + sortNums[j] + sortNums[k];
            if(sum<0){
                j++
            }else if(sum>0){
                k--
            }else{
                ans.push([sortNums[i], sortNums[j], sortNums[k]])
                j++;
                k--;
                while(j<k && sortNums[j]===sortNums[j-1]) j++;
                while(j<k && sortNums[k]===sortNums[k+1]) k++;

            }       
        }
    }
    return ans;
}

console.log(three_sum([-1,0,1,2,-1,-4]));