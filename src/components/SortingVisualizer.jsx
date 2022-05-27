import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
import QuickSort from "./QuickSort";
import styles from "../sass/abstract/_variables.scss";

const ANIMATION_SPEED_MS = 10;

function SortingVisualizer(){
    const sort = useSelector(state=>state.sort);
    const theme = useSelector(state=>state.theme);
    const arraySize = 20;
    const themes ={
      "LIGHT" : {
        color: "black"
      },
      "DARK" : {
        color: "white"
      },
      "CYBERPUNK" : {
        color: "white"
      }
    }
    const themesCells ={
      "LIGHT" : [styles.themeLightCell1,styles.themeLightCell2,styles.themeLightCell3,styles.themeLightCell4],
      "DARK" : [styles.themeDarkCell1,styles.themeDarkCell2,styles.themeDarkCell3,styles.themeDarkCell4],
      "CYBERPUNK" : [styles.themeCPCell1,styles.themeCPCell2,styles.themeCPCell3,styles.themeCPCell4]
    }
    const [PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, SORTED] = themesCells[theme];

    
    
    const [array, setArray] = useState([...Array(arraySize)].map((x) => Math.floor(Math.random()*arraySize+1)));
    
    function resetArray(){
        const arrayBars = document.getElementsByClassName('cell');
        for(let i = 0;i<arrayBars.length;i++){
            arrayBars[i].style.backgroundColor=PRIMARY_COLOR;
        }
        setArray([...Array(arraySize)].map((x) => Math.floor(Math.random()*arraySize+1)));
    }

    function getSort(sort){
        if(sort=="BUBBLE"){
            return BubbleSort(array);
        }else if(sort=="INSERTION"){
            return InsertionSort(array);
        }else if(sort=="SELECTION"){
            return SelectionSort(array);
        }else if(sort=="QUICK"){
            return QuickSort(array);
        }
    }

    function sortArray(){
        const animations = getSort(sort);
        const arrayBars = document.getElementsByClassName('cell');
        console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            let method = animations[i][0];
            if (method=="S") {
            const [method, barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              setTimeout(() => {
                barOneStyle.backgroundColor = SECONDARY_COLOR;
                barTwoStyle.backgroundColor = SECONDARY_COLOR;
              }, i * ANIMATION_SPEED_MS);
            }else if (method=="I") {
                const [method, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                  barOneStyle.backgroundColor = TERTIARY_COLOR;
                  barTwoStyle.backgroundColor = TERTIARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
              }else if (method=="N") {
                const [method, barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                  barOneStyle.backgroundColor = PRIMARY_COLOR;
                  barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
              } else if (method=="F") {
                const [method, barOneIdx, barTwoIdx] = animations[i];
              setTimeout(() => {
                let newHeight = barTwoIdx;
                arrayBars[barOneIdx].innerHTML = newHeight;
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${setHeight(newHeight)}`;
                barOneStyle.backgroundColor = SORTED;
              }, i * ANIMATION_SPEED_MS);
            }else if (method=="SN") {{
                const [method, barOneIdx, barTwoIdx] = animations[i];
              setTimeout(() => {
                let newHeight = barTwoIdx;
                arrayBars[barOneIdx].innerHTML = newHeight;
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${setHeight(newHeight)}`;
              }, i * ANIMATION_SPEED_MS);
            }

          }
        }
    }

    function setHeight(x){
        return `calc(${x}*100% / ${arraySize})`;
        // x         =   y
        // arraySize     100%
    }
    function setWidth(){
        return `calc(100% / ${arraySize})`;
    }
    function setMargin(){
        return `calc( (100% / ${arraySize} / 10)`;
    }


    useEffect(()=>{
        console.log(array);
    },[array])

    return(
        <div>
            <h1 className="u-center-text">{sort + ' SORT'}</h1>
            <div className="btn-containers">
              <button className="btn-containers-btns" onClick={resetArray} style={themes[theme]}>reset</button>
              <button className="btn-containers-btns"  onClick={sortArray} style={themes[theme]}>sort</button>
            </div>
            <div className="visualizer-container">
                {array.map( (x,i) => (
                    <div className="cell" key={i}
                    style={
                        {
                            height: `${setHeight(x)}`,
                            width: `${setWidth()}`,
                            backgroundColor: `${PRIMARY_COLOR}`,
                            margin: `0 ${setMargin()}`
                        }
                    }
                    >
                        {x}
                    </div>
                ))}
            </div>
        </div>

    );
}

export default SortingVisualizer;