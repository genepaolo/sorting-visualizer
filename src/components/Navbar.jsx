import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import themeAction from '../actions/themeAction';
import sortAction from '../actions/sortAction';
function Navbar(){
    const theme = useSelector(state=>state.theme);
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
    const dispatch = useDispatch();

    function updateTheme(theme){
        dispatch(themeAction(theme));
    }

    function updateSort(sort){
        dispatch(sortAction(sort));
    }

    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-container">
                    <h1>SV</h1>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button className="nav-item-btn" onClick={ () => updateSort('BUBBLE')} style={themes[theme]}>Bubble</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-item-btn" onClick={ () => updateSort('INSERTION')} style={themes[theme]}>Insertion</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-item-btn" onClick={ () => updateSort('SELECTION')} style={themes[theme]}>Selection</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-item-btn" onClick={ () => updateSort('QUICK')} style={themes[theme]}>Quick</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-item-btn" onClick={ () => updateSort('MERGE')} style={themes[theme]}>Merge</button>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown" style={themes[theme]} >
                            <button style={themes[theme]} className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {theme}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button className="menu-item-btn" onClick={ () => updateTheme('LIGHT')}>Light</button></li>
                                <li><button className="menu-item-btn" onClick={ () => updateTheme('DARK')}>Dark</button></li>
                                <li><button className="menu-item-btn" onClick={ () => updateTheme('CYBERPUNK')}>Cyberpunk</button></li>
                            </ul>
                        </div>
                        </li>
                    </ul>

                    
                </div>
            </div>
        </nav>
    )
}
export default Navbar;