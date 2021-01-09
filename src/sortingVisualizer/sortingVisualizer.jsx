import React from 'react';
import "./sortingVisualizer.css";
import {bubbleSort} from "./bubbleSort.js"
import {selectionSort} from "./selectionSort.js"
import {insertionSort} from "./insertionSort.js"
import {quickSort} from "./quickSort.js"

// This is the main colour of the bars.
const mainColour = 'green';
// This is the colour to indicate which bars are being compared. 
const sideColour = 'red';

export default class SortingVisualizer extends React.Component {
  // initializes the react component SortingVisualizer.  
  constructor(props){
        super(props)
        
        // initializes the object to be an empty array. 
        this.state = {
            array: [],
        };
    }
  // This is called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount() {
      this.resetArray();
    }

  // This function creates a new array that consists of 100 randomly generated integers.
  resetArray(){
      let array = [];
      for(let i = 0; i < 100; i++){
          let randomNum = this.randomIntFromInterval(100, 300);
          array.push(randomNum);
        
      }
      
      this.setState({array});
  }

  // This function randomely generates an integer within a given interval. 
  randomIntFromInterval(min, max) { 
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  animateBubbleSort(){
    const allBars = document.getElementsByClassName("bar")
    let Array = this.state.array.slice();
    let animations = bubbleSort(Array);
    // Iterate through the bars and reset their heights to ensure that the heights of bars is accurate.
    for(let i = 0; i < allBars.length; i++){
      allBars[i].style.height = `${this.state.array[i]}px`
    } 
    // iterate through the list of animations 
    for (let i = 0; i < animations.length; i++){
      // isColorChange indicates whether a colour change is occuring or a swap.
      const isColorChange = i % 3 !== 2;
      if (isColorChange){
        const [barOneIdx, barTwoIdx] = animations[i];
        // Get the style information for each of the bars that you are going to change colours/swap.
        const barOneStyle = allBars[barOneIdx].style;
        const barTwoStyle = allBars[barTwoIdx].style;
        // color represents the color that the bars will be. 
        const color = i % 3 === 0 ? sideColour : mainColour;
        setTimeout( () => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
        // if it is not a color change, it means you are swapping bars. 
      } else {
        setTimeout ( () => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = allBars[barOneIdx].style;
          const barTwoStyle = allBars[barTwoIdx].style;
          // swap the heights of the bars. 
          let temp = barOneStyle.height
          barOneStyle.height =  `${barTwoStyle.height}`
          barTwoStyle.height =  `${temp}`
        }, i * 1);
      }
    }
  }

  animateSelectionSort(){
    const allBars = document.getElementsByClassName("bar")
    let Array = this.state.array.slice();
    let animations = selectionSort(Array);
     // Iterate through the bars and reset their heights to ensure that the heights of bars is accurate.
    for(let i = 0; i < allBars.length; i++){
      allBars[i].style.height = `${this.state.array[i]}px`
    } 
    // iterate through the list of animations 
    for (let i = 0; i < animations.length; i++){
      const arrayBars = document.getElementsByClassName("bar");
      // isColorChange indicates whether a colour change is occuring or a swap.
      const isColorChange = i % 3 !== 2;
      if (isColorChange){
        const [barOneIdx, barTwoIdx] = animations[i];
        // Get the style information for each of the bars that you are going to change colours/swap.
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        // color represents the color that the bars will be. 
        const color = i % 3 === 0 ? sideColour : mainColour;
        setTimeout( () => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 50);
        // if it is not a color change, it means you are swapping bars. 
      } else {
        setTimeout ( () => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          // swap the heights of the bars. 
          let temp = barOneStyle.height
          barOneStyle.height =  `${barTwoStyle.height}`
          barTwoStyle.height =  `${temp}`
        }, i * 50);
      }
    }
  }

  animateInsertionSort(){
    const allBars = document.getElementsByClassName("bar")
    let Array = this.state.array.slice();
    let animations = insertionSort(Array);
    // Iterate through the bars and reset their heights to ensure that the heights of bars is accurate.
    for(let i = 0; i < allBars.length; i++){
      allBars[i].style.height = `${this.state.array[i]}px`
    } 
    // iterate through the list of animations 
    for (let i = 0; i < animations.length; i++){
      const arrayBars = document.getElementsByClassName("bar");
      // isColorChange indicates whether a colour change is occuring or a swap.
      const isColorChange = i % 3 !== 2;
      if (isColorChange){
        const [barOneIdx, barTwoIdx] = animations[i];
        // Get the style information for each of the bars that you are going to change colours/swap.
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        // color represents the color that the bars will be. 
        const color = i % 3 === 0 ? sideColour : mainColour;
        setTimeout( () => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 5);
        // if it is not a color change, it means you are swapping bars. 
      } else {
        setTimeout ( () => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          // swap the heights of the bars. 
          let temp = barOneStyle.height
          barOneStyle.height =  `${barTwoStyle.height}`
          barTwoStyle.height =  `${temp}`
        }, i * 5);
      }
    }
  }

  animateQuickSort(){
    const allBars = document.getElementsByClassName("bar")
    let Array = this.state.array.slice();
    let animations = quickSort(Array,0,Array.length-1, [])
    // Iterate through the bars and reset their heights to ensure that the heights of bars is accurate.
    for(let i = 0; i < allBars.length; i++){
      allBars[i].style.height = `${this.state.array[i]}px`
    } 
    // iterate through the list of animations 
    for (let i = 0; i < animations.length; i++){
      const arrayBars = document.getElementsByClassName("bar");
      // isColorChange indicates whether a colour change is occuring or a swap.
      const isColorChange = i % 3 !== 2;
      if (isColorChange){
        const [barOneIdx, barTwoIdx] = animations[i];
        // Get the style information for each of the bars that you are going to change colours/swap.
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        // color represents the color that the bars will be. 
        const color = i % 3 === 0 ? sideColour : mainColour;
        setTimeout( () => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 5);
      // if it is not a color change, it means you are swapping bars. 
      } else {
        setTimeout ( () => {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          // swap the heights of the bars. 
          let temp = barOneStyle.height
          barOneStyle.height =  `${barTwoStyle.height}`
          barTwoStyle.height =  `${temp}`
        }, i * 5);
      }
    }
  }

  render(){
      const {array} = this.state;
      return (
          <div className="container">
            {array.map((value, idx) => (
              <div
                className="bar"
                key={idx}
                style={{
                  height: `${value}px`,
                  backgroundColor: mainColour
              }}></div>
            ))}
              <button className = "button" onClick = {() => this.resetArray()}>Reset Array</button>
              <button className = "button" onClick = {() => this.animateBubbleSort()}>Bubble Sort</button>
              <button className = "button" onClick = {() => this.animateSelectionSort()}>Selection Sort</button>
              <button className = "button" onClick = {() => this.animateInsertionSort()}>Insertion Sort</button>
              <button className = "button" onClick = {() => this.animateQuickSort()}>Quick Sort</button>
            </div>
          );
        }
}
