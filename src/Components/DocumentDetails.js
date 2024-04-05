import React from "react";
import "./DocumentDetails.css";
import { Card, CardHeader, CardBody } from "reactstrap";

function DocumentDetails() {
  return (
    <>
      <div className="header">
        <h3>Document Details</h3>
      </div>

      <Card className="card">
        <CardHeader className="card-inline">
          <h3 className="mb-0">Circular</h3>
        </CardHeader>
        <CardBody>
          <div class="container">
            <form>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">Exam Schedule</option>
                <option value="2">Holidays</option>
                <option value="3">Openday</option>
              </select>
            </form>
          </div>
        </CardBody>
      </Card>
      <Card className="card2">
        <CardHeader>
          <div className="Description">
            <h3>Description</h3>
          </div>
        </CardHeader>

        <CardBody>
          <div class="container">
            <textarea
              maxLength={10000}
              rows={5}
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            ></textarea>
          </div>
        </CardBody>
      </Card>
      
      <Card className="card3">
        <CardHeader>
        <h3 >Attachment</h3>
        </CardHeader>
        <CardBody>
          <div class="input-group mb-3">
            <input type="file" class="form-control" id="inputGroupFile02" />
            <label class="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>
        </CardBody>
      </Card>
      <button className="button">Submit</button>
    </>
  );
}

export default DocumentDetails;
