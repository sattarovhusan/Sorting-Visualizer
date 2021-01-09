import {swap} from "./bubbleSort.js"


//https://en.wikipedia.org/wiki/Quicksort#Algorithm
//Lomuto Parition scheme

export function quickSort(List,start,end,animations){
    let prevAnimations = [];
    if (start < end){
        //The pivot point is a point in the array that is selected by the algorithm.
        let pivotPoint = partition(List,start,end,animations);
        prevAnimations = pivotPoint[1];
        // call quicksort on everything before the pivot point.
        quickSort(List,start,pivotPoint[0]-1,prevAnimations);
        // call quicksort on everything after the pivot point.
        quickSort(List,pivotPoint[0]+1,end,prevAnimations);
    }
    return prevAnimations;
}

function partition(List,start,end,animations){
    // pivot is the element that is going to be placed in the right position.
    let pivot = List[end];
    // index is the index of the smaller element. 
    let index = start;

    // iterating through elements beginning at start and ending at end. 
    for(let i = start; i < end; i++){
        // if the current element is less than the pivot, swap the elements located at index and i
        // and increment the index of smaller element.
        if (List[i] < pivot){
            swap(List,index,i)
            //The first time, we push the indices to change their colours.
            animations.push([index,i])
            //The second time, we push the indices to revert the colour change.
            animations.push([index,i])
            // The last time, we push the indices to swap them. 
            animations.push([index,i])
            index++
        }

    }
    // the three pushes to animations below have the same purpose as the ones above. 
    animations.push([index,end])
    animations.push([index,end])
    animations.push([index,end])
    // we do one last swap between elements in index and end to place pivot in the right place. 
    swap(List,index,end)
    return [index,animations];

}