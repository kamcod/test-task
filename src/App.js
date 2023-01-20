import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import './App.css';
import {useState} from "react";

function App() {
    const [switchChecked, setSwitchChecked] = useState(false);
    const [afgChecked, setAfgChecked] = useState(false);
    const [algChecked, setAlgChecked] = useState(false);
    const [angChecked, setAngChecked] = useState(true);
    const [andChecked, setAndChecked] = useState(false);
    const [albChecked, setAlbChecked] = useState(true);
    const [argChecked, setArgChecked] = useState(false);


    const changeSwitch = (event) => {
        setSwitchChecked(event.target.checked);
    };
    const changeAfg = (event) => {
        setAfgChecked(event.target.checked);
    };
    const changeAlg = (event) => {
        setAlgChecked(event.target.checked);
    };
    const changeAng = (event) => {
        setAngChecked(event.target.checked);
    };
    const changeAlb = (event) => {
        setAlbChecked(event.target.checked);
    };
    const changeArg = (event) => {
        setArgChecked(event.target.checked);
    };
    const changeAnd = (event) => {
        setAndChecked(event.target.checked);
    };
    const clearAll = () => {
        setSwitchChecked(false);
        setAndChecked(false);
        setAfgChecked(false);
        setAlgChecked(false);
        setAngChecked(false);
        setAlbChecked(false);
        setArgChecked(false);
    }
  return (
    <div className="app">
        <div className="div-wrapper">
            <TextField fullWidth id="standard-basic" label="Search" variant="standard" />
            <br />
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <Switch
                    checked={switchChecked}
                    onChange={changeSwitch}
                    inputProps={{ 'aria-label': 'controlled' }} /> <span style={{ flexGrow: '1'}}>Show selected only </span> <span style={{cursor: "pointer"}} onClick={clearAll}>clear all</span>
            </div>
            <br />
            <div className="country-list">
                {switchChecked && <ul>
                    {afgChecked && <li> <Checkbox
                        checked={afgChecked}
                        onChange={changeAfg}
                        inputProps={{ 'aria-label': 'controlled' }} /> Afghanistan </li>}
                    {algChecked && <li> <Checkbox
                        checked={algChecked}
                        onChange={changeAlg}
                        inputProps={{ 'aria-label': 'controlled' }} /> Algeria </li>}
                    {angChecked &&  <li> <Checkbox
                        checked={angChecked}
                        onChange={changeAng}
                        inputProps={{ 'aria-label': 'controlled' }} /> Angola </li>}
                    {andChecked && <li> <Checkbox
                        checked={andChecked}
                        onChange={changeAnd}
                        inputProps={{ 'aria-label': 'controlled' }} /> Andorra </li>}
                    {albChecked && <li> <Checkbox disabled
                                                  checked={albChecked}
                                                  onChange={changeAlb}
                                                  inputProps={{ 'aria-label': 'controlled' }} /> Albania </li>}
                    {argChecked && <li> <Checkbox
                        checked={argChecked}
                        onChange={changeArg}
                        inputProps={{ 'aria-label': 'controlled' }} /> Argentina </li>}
                </ul>}
                {!switchChecked && <ul>
                    <li> <Checkbox
                        checked={afgChecked}
                        onChange={changeAfg}
                        inputProps={{ 'aria-label': 'controlled' }} /> Afghanistan </li>
                    <li> <Checkbox
                        checked={algChecked}
                        onChange={changeAlg}
                        inputProps={{ 'aria-label': 'controlled' }} /> Algeria </li>
                    <li> <Checkbox
                        checked={angChecked}
                        onChange={changeAng}
                        inputProps={{ 'aria-label': 'controlled' }} /> Angola </li>
                    <li> <Checkbox
                        checked={andChecked}
                        onChange={changeAnd}
                        inputProps={{ 'aria-label': 'controlled' }} /> Andorra </li>
                    <li> <Checkbox disabled
                                   checked={albChecked}
                                   onChange={changeAlb}
                                   inputProps={{ 'aria-label': 'controlled' }} /> Albania </li>
                    <li> <Checkbox
                        checked={argChecked}
                        onChange={changeArg}
                        inputProps={{ 'aria-label': 'controlled' }} /> Argentina </li>
                </ul>}
            </div>
            <hr color="#ECECEC"/>
            <div className="save-btn">
                <button>Save</button>
            </div>


        </div>
    </div>
  );
}

export default App;
