import {useState} from 'react'

import Content from './Content'
import Report from './Report'
import styles from "../styles/Body.module.css";


export default function Body(props) {
    const [parentBMI, setParentBMI] = useState(props.bmi)

    function handleBMIChange(value) {
        setParentBMI(value)
      }

    return (
        <div className={styles.container}>
            <Content onBMIChange={handleBMIChange}/>
            <Report className={styles.report} bmi={parentBMI}/>
        </div>
    )
}