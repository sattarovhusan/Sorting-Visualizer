export function insertionSort(List){
    let Length = List.length;
    let animations = [];

    // Iterate through elements in the list from 0 to Length.
    for(let i = 0; i < Length; i++){
        let value = List[i];
        let startIndex = i;
        // While the condition holds true, we move all elements that are greater
        // than the key to a position that is one position after its current position.
        while(startIndex > 0 && List[startIndex -1] > value){
            //The first time, we push the indices to change their colours.
            animations.push([startIndex, startIndex-1]);
            //The second time, we push the indices to revert the colour change.
            animations.push([startIndex, startIndex-1]);
            // The last time, we push the indices to swap them. 
            animations.push([startIndex, startIndex-1]);
            List[startIndex] = List[startIndex -1];
            startIndex -= 1
        }
        // Place the value that is being looked at into startIndex which represents the
        // location of where value belongs. 
        List[startIndex] = value;
    }

    return animations;
}