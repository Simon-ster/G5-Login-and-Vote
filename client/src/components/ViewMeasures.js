import './ViewMeasures.css';
import React,
{
  useEffect,
  useState
} from 'react';
import Measure from './Measure';
import axios from 'axios';

// 5b)
// When this component is rendered, an api call
// is made the populates the DOM with the existing
// measures that have yet to expire (their end of life).
// For now, the users can vote only once per measure.
// The relevant data from /server/models/Measure.js 
// should be displayed in each of the rendered measures.
//
// Go to step 6, found in client/../../Measure.js

const ViewMeasures = (props) => {

  const [measures, setMeasures] = useState([]);
   /*Create controller function and pass into measure.js
   Would allow splitting measures into groups. Votes cast/not cast
   Could then render the two groups*/
  useEffect(() => {
    axios.get('/api/vote/view-measures')
      .then((response) => {
        console.log(response.data[0].name);
        let currentMeasures = [];
        for (let i = 0; i < response.data.length; ++i) {
          currentMeasures.push(response.data);
        }
        setMeasures(currentMeasures);
        //might create function to pass into each measure,
        // to get choice on any votes that have yet to be voted on
      });
  }, []);

  return (
    <div className="measures">
      {measures.map((measure, i) => {
        return <Measure
          {...props}
          key={i}
          userId={props.userId}
          data={measure[i]}
          title={measure[i].name}
          desc={measure[i].description} 
          yeses={measure[i].votes.yes}
          nos={measure[i].votes.no}
          />
      }
      )}
    </div>
  )
}

export default ViewMeasures;