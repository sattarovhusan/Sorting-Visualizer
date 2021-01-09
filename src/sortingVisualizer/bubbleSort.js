// the swap function takes the List and swaps elements 
// that are located at index a and index b. 
export function swap(List,a,b){
    let temp = List[a];
    List[a] = List[b];
    List[b] = temp;
    return List;
}

export function bubbleSort(List){
    let Length = List.length;
    let animations = [];
    // iterating through all the elements in the List.
    for(let i = 0; i < Length; i++){
        let swapped = false;
        // iterate through the list from 0 to Length-1-i since
        // all i elements after are already sorted.
        for (let j= 0; j < Length-1-i; j++){
            // If the value at List[j] greater or equal to List[j+1], you swap them. 
            if (List[j] >= List[j+1]){
                //The first time, we push the indices to change their colours.
                animations.push([j,j+1]);
                //The second time, we push the indices to revert the colour change.
                animations.push([j,j+1]);
                // The last time, we push the indices to swap them. 
                animations.push([j,j+1]);
                List = swap(List,j,j+1);
                swapped = true;
            }
        }
        // is swapped remains false after the inner for loop, it means
        // that the List is already sorted and therefore we should end this procedure. 
        if (swapped === false){
            break;
        }
    }
    return animations
}