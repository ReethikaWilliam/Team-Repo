import React from "react";
import "./DocumentDetails.css";
import { Card, CardHeader, CardBody } from "reactstrap";

function DocumentDetails() {
  return (
    <>
      <div className="header">
        <h3>Document Details</h3>
      </div>
      <form>
        <Card className="card1">
          <CardHeader class="pp" >
            <div class="col-md-3">
              <label for="validationCustom04" class="form-label" >
                <h3 >Circular</h3>
              </label>
            </div>
          </CardHeader>
          <CardBody>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option value="1">Exam Schedule</option>
              <option value="2">Holidays</option>
              <option value="3">Openday</option>
            </select>
            
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
          <CardHeader className="headercolor-card3">
            <h3>Attachment</h3>
          </CardHeader >
          <CardBody>
            <div class="input-group mb-3">
              <input  type="file" class="form-control" id="inputGroupFile02" />
              <label class="input-group-text" for="inputGroupFile02">
                Upload
              </label>
            </div>
          </CardBody>
        </Card>
        <div class="col-11">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              Agree to continue
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" id="button-sumbit" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
}

export default DocumentDetails;
