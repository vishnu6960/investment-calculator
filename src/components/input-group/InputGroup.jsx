import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InputGroup.css";

const InputGroup = ( {inputData, onChange} ) => {
  
  return (
    <div id="inputDiv" className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
      <div className="input-group">
        <p>
          <label>Initial Investment: </label>
          <input
            type="number"
            required
            value={inputData.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment: </label>
          <input
            type="number"
            required
            value={inputData.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Interest(%): </label>
          <input
            type="number"
            required
            value={inputData.interest}
            onChange={(event) =>
              onChange("interest", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration(in years): </label>
          <input
            type="number"
            required
            value={inputData.duration}
            onChange={(event) =>
              onChange("duration", event.target.value)
            }
          />
        </p>
      </div>
      <button className="btn btn-primary">Calculate</button>
    </div>
  );
};

export default InputGroup;
