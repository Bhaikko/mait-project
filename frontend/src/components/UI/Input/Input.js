import React, { Fragment } from 'react';

import classes from './Input.css';
import Button from './../Button/Button';

import InfoIcon from './../../../assets/icons/Info.png';

const input = (props) => {
    
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    const fileHandler = event => {
        event.preventDefault();
        event.target.parentNode.previousSibling.children[0].click();
    }

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case "input":
            inputElement = <input
                    className={inputClasses.join(" ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} 
                />;
            break;
            
        case "textarea":
            inputElement = <textarea
                    className={inputClasses.join(" ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    style={{height: "200px"}} 
                />;
            break;

        case "date":
            inputElement = <input 
                    className={inputClasses.join(" ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} 
                />;

            break;
        
        case "file":
            inputElement = (
                <div>
                    <div style={{height:"0px", overflow:"hidden"}}>
                        <input 
                            hidden
                            className={inputClasses.join(" ")}
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.changed}
                        />
                    </div>
                    <Button 
                        inline="true" 
                        style={{
                            fontSize: "10px"
                        }} 
                        onClick={fileHandler}
                    >
                        {props.elementConfig.uploadinfo}
                    </Button>
                </div>
            );
            break;

        case "select":
            inputElement = (
                <select 
                    className={inputClasses.join(" ")}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map((option, index) => (
                        <option 
                            key={index}
                            value={option}
                        >
                            {option}
                        </option>
                    ))}
                </select>
            
            );

            break;

        default: 
            inputElement = <input
                className={inputClasses.join(" ")}
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed} 
            />

    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label} >{props.label}</label>
            {inputElement}

            {props.tooltip ? (
                <Fragment>
                    <img src={InfoIcon} alt="..." className={classes.TooltipButton} style={{
                        top: props.label ? 47 : 25
                    }}/>
                    
                    <div className={classes.TooltipContent} >
                        {props.tooltip}
                    </div>
                </Fragment>
            ) : null}
        </div>
    );
}

export default input;