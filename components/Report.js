import styles from "../styles/Report.module.css";
import { useState } from "react";
import Gauge from 'react-svg-gauge';

export default function Report(props) {
  const [showReport, setShowReport] = useState(false);
  const [classification, setClassification] = useState(null);
  const [color, setColor] = useState(null);

  function handleReport() {
    if (typeof props.bmi !== "undefined") {
      setShowReport(!showReport);
      if (props.bmi < 18.5) {
        setClassification("Underweight");
        setColor("#2BDBDE")
      } else if (18.5 <= props.bmi && props.bmi <= 24.9) {
        setClassification("Normal Weight");
        setColor("#2CD16A")
      } else if (25.0 <= props.bmi && props.bmi <= 29.9) {
        setClassification("Overweight");
        setColor("#FFE50C")
      } else if (30.0 <= props.bmi && props.bmi <= 34.9) {
        setClassification("Obese");
        setColor("#EE4C00")
      } else {
        setClassification("Extremely Obese");
        setColor("#E53725")
      }
    }

  }

  return (
    <div className={styles.container}>
      
      <div className={styles.header}>Report</div>
      <div className={styles.report}>
        
        <button className={styles.button} input="submit" onClick={handleReport}>
          SHOW/RESET CLASSIFICATION
        </button>
        <br/>
        {(showReport != false) ? (
          <div>
          <div className={styles.result}>{classification}</div>

            <Gauge value={props.bmi} max={40} width={500} height={320} label="BMI Gauge" color ={color}
            topLabelStyle={{color: 'white'}}/>
          

          </div>
        ) : null}
      </div>
    </div>
  );
}
