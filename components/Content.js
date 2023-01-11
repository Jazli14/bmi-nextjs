import styles from "../styles/Content.module.css";

import { useEffect, useRef, useState } from "react";
import { update } from "lodash";

export default function Content(props) {
  const [bmi, setBmi] = useState(null);
  const [metric, setMetric] = useState(true);
  
  let viewReport = false;
  let weightRef = useRef();
  let footRef = useRef();
  let inchRef = useRef();
  let cmRef = useRef();

  function resetMetrics() {
    if (metric) {
      cmRef.current.value = "";
      weightRef.current.value = "";
    } else {
      footRef.current.value = "";
      inchRef.current.value = "";
      weightRef.current.value = "";
    }
    setBmi(null);
  }
  
  
  function updateStates(bmi) {
    props.onBMIChange(bmi);

  }

  function submitAction(e) {
    e.preventDefault();
    if (weightRef.current.value !== "") {
      if (metric) {
        const metricBMI =
          Math.round(
            (weightRef.current.value / (Math.pow(cmRef.current.value/100, 2))) * 10
          ) / 10;
          setBmi(metricBMI)
          updateStates(metricBMI)
      } else if (metric === false) {
        const height =
          Number(footRef.current.value) * 12 + Number(inchRef.current.value);
        const imperialBMI =
          Math.round(
            ((703 * Number(weightRef.current.value)) / Math.pow(height, 2)) * 10
          ) / 10;
          setBmi(imperialBMI)
          updateStates(imperialBMI)
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Calculator</div>
      <form onSubmit={submitAction}>
        <div className={styles.measurement}>
          <div className={styles.measurementHeader}>Select Measurement</div>
          <div className={styles.measurementSelection}>
            <label htmlFor="metric">
              <span>cm/kg </span>
            </label>

            <input
              type="radio"
              name="measurement"
              id="metric"
              value="Metric"
              defaultChecked
              onClick={() => {
                resetMetrics();
                if (!metric) {
                  setMetric(true);
                }
              }}
              className={styles.measurementSelectionButton}
            />

            <label htmlFor="imperial">
              <span>in/lbs </span>
            </label>
            <input
              type="radio"
              name="measurement"
              id="imperial"
              value="Imperial"
              onClick={() => {
                resetMetrics();
                if (metric) {
                  setMetric(false);
                }
              }}
              className={styles.measurementSelectionButton}
            />
            <label htmlFor="imperial"></label>
          </div>
        </div>

        <div className={styles.inputContainer}>
          {metric ? (
            <>
              <input
                ref={cmRef}
                type="number"
                min={0}
                placeholder="Enter height (cm)"
                className={styles.input}
              />
              <input
                ref={weightRef}
                type="number"
                min={0}
                placeholder="Enter weight (kg)"
                className={styles.input}
              />
            </>
          ) : (
            <>
              <input
                ref={footRef}
                type="number"
                min={0}
                placeholder="Enter height (feet)"
                className={styles.feet}
              />
              <input
                ref={inchRef}
                type="number"
                min={0}
                max={11}
                placeholder="(in)"
                className={styles.inch}
              />
              <input
                ref={weightRef}
                type="number"
                min={0}
                placeholder="Enter weight (lbs)"
                className={styles.input}
              />
            </>
          )}
        </div>
        <button type="submit" className={styles.button}>
          SUBMIT
        </button>
      </form>
      <div className={styles.result}>
        {bmi != null ? <>BMI: {bmi}</> : <></>}
        <br />
        {weightRef.current !== undefined ? (
          <>
            {metric ? (
              <>
                {weightRef.current.value !== "" ? (
                  <>
                    Height: {cmRef.current.value} cm (
                    {(cmRef.current.value / 100).toFixed(2)} m)
                    <br />
                    Weight: {weightRef.current.value} kg
                  </>
                ) : undefined}
              </>
            ) : (
              <>
                {weightRef.current.value !== "" ? (
                  <>
                    Height: {footRef.current.value}&#39; {inchRef.current.value}
                    &#34; <br />
                    Weight: {weightRef.current.value} lbs
                  </>
                ) : undefined}
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
