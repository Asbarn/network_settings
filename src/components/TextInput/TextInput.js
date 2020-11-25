import React, { useState, useEffect, useRef, useCallback } from 'react'
import styles from './styles.module.css'


export function TextInput({ labelText,  required }) {
    if (required)
        return (
            <div className={styles.textInputContainer}>
                <label value="test" required for="username">{labelText}: </label>
                <input className={styles.textInput} required type="text" id="username"></input>
            </div>
        )

    return (
        <div className={styles.textInputContainer}>
            <label for="username">{labelText}:</label>
            <input className={styles.textInput} type="text" id="username"></input>
        </div>
    )

}