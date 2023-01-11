# BMI Calculator
This is a BMI calculator that is built on the React JavaScript library through the Next.js framework.

It will also return a report that the user can press to show and reset displaying their classified weight group and a visual gauge.

❤️‍🩹🩺🏥

## Calculation
The user can choose between the metric and imperial system to input their measurements, where metric is the default chosen metric.

## Metric
If the user chooses the metric system:

The height input field will be measured in cm.

The weight input field will be measured in kg.

This is the formula that is used to calculate the BMI with metric measurements:

![image](/resources/metric_bmi.png)

This divides the height by 100 to convert it to meters.

## Imperial
If the user decides to use the imperial system:

The height input field will split into two for feet and inches.
The weight input field will be measured in lbs.

This is the formula that is used to calculate the BMI with imperial measurements:

![image](/resources/imperial_bmi.png)

After the submit button is pressed, the BMI score will be displayed along with the height and weight inputted in their corresponding measurements.

![image](/resources/calculator.png)

## Report
The BMI data is passed through React DOM through the use of props and callbacks.

From the calacultion child component it will pass the data to the parent through a callback.

Using the data in the parent component, it will pass the bmi to a child using props.

Once the report receives this data, it can classify the BMI into weight groups: <br/>

Less than 18.6: Underweight

18.5 to 24.9: Normal Weight

25.0 to 29.9: Overweight

30.0 to 34.9: Obese

Greater than 34.9: Extremely Obese

### Gauge
Using an npm package named react-svg-gauge which uses D3.js to import a visual gauge that will show the user the score of the BMI. 

![image](/resources/report.png)
