import {swap} from "./bubbleSort.js"

export function selectionSort(List){
    let Length = List.length;
    let animations = [];

    // iterate through all the items in the List.
    for(let i = 0; i < Length; i++){
        // we have to find the element that has the smallest value in the array.
        // to do this, we keep track of the index of the smallest value in the array.
        let lowestIndex = i;
        
        // iterate through all the items after i. 
        for(let j = i+1; j < Length; j++){
            // If there is an element that has a value that is less than the element at lowestIndex,
            // we set that elements index as the new lowestIndex.
            if (List[lowestIndex] > List[j]){
                lowestIndex = j
            }
        }
        // Once we found the index of the smallest element in the array, we swap it with i. 
        swap(List,i,lowestIndex);
        //The first time, we push the indices to change their colours.
        animations.push([i,lowestIndex]);
        //The second time, we push the indices to revert the colour change.
        animations.push([i,lowestIndex]);
        // The last time, we push the indices to swap them. 
        animations.push([i,lowestIndex]);
    }


    return animations;
}