import React , { useState } from 'react';
import classes from './UserInput.module.css';

const initialUserInput={
    'current-savings':10000,
    'yearly-contribution':1200,
    'expected-return': 7,
    'duration':10
   };

const UserInput=(props)=>{

   const[userInput, setUserInput]= useState(initialUserInput);

    const submitHandler=(e)=>{
        e.preventDefault();
        props.onCalculate(userInput);
    }

    const resetHandler=()=>{
        setUserInput(initialUserInput);
    }

    const inputChangeHandler=(input, value)=>{
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                [input] : +value,
            };
        });
    }

    return (
        <div>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input value={userInput['current-savings']} 
                    onChange={(event)=>{
                        inputChangeHandler('current-savings',event.target.value)
                    }} 
                    type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input value={userInput['yearly-contribution']} 
                     onChange={(event)=>{
                        inputChangeHandler('yearly-contribution',event.target.value)
                    }} 
                    type="number" id="yearly-contribution" />
                </p>
                </div>
                <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input value={userInput['expected-return']} 
                     onChange={(event)=>{
                        inputChangeHandler('expected-return',event.target.value)
                    }} 
                     type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input value={userInput.duration}
                     onChange={(event)=>{
                        inputChangeHandler('duration',event.target.value)
                    }} 
                     type="number" id="duration" />
                </p>
                </div>
                <p className={classes.actions}>
                <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
                </p>
            </form>
        </div>
    );
}

export default UserInput;