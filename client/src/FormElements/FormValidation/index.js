import React from 'react';
import { Row, Col, Card, div, CardTitle, CardBody, CardText, Form, UncontrolledCollapse, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import { index } from "../../../config/pluginsInit";
/*import {IntegratedPaging} from "@devexpress/dx-react-grid";*/

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        }, 800);
    }


    render() {
        return (
            <>
                <Row>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Default Validation</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                data-toggle="tooltip" className="text-white float-right"
                                                data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form>
<Row form>
<Col md={6} className="mb-3">
<Label for="validationDefault01">First name</Label>
<Input type="text" className="form-control" id="validationDefault01"
required />
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault02">Last name</Label>
<Input type="text" className="form-control" id="validationDefault02"
required />
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefaultUsername">Username</Label>
<div className="input-group">
<div className="input-group-prepend">
<span className="input-group-text" id="inputGroupPrepend2">@</span>
</div>
<Input type="text" className="form-control"
id="validationDefaultUsername"
aria-describedby="inputGroupPrepend2" required />
</div>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault03">City</Label>
<Input type="text" className="form-control" id="validationDefault03"
required />
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault04">State</Label>
<Input type={"select"} className="form-control" id="validationDefault04" required>
<option  disabled value="">Choose...</option>
<option>...</option>
</Input>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault05">Zip</Label>
<Input type="text" className="form-control" id="validationDefault05"
required />
</Col>
</Row>
<FormGroup className="form-group">
<div className="form-check">
<Input className="form-check-input" type="checkbox" value=""
id="invalidCheckNew" required />
<Label className="form-check-label" for="invalidCheckNew">
Agree to terms and conditions
</Label>
</div>
</FormGroup>
<FormGroup className="form-group">
<Button color={"primary"} type="submit">Submit form</Button>
</FormGroup>
</Form>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form>
                                    <Row form>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault01">First name</Label>
                                            <Input type="text" className="form-control" id="validationDefault01"
                                                required />
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault02">Last name</Label>
                                            <Input type="text" className="form-control" id="validationDefault02"
                                                required />
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefaultUsername">Username</Label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                </div>
                                                <Input type="text" className="form-control"
                                                    id="validationDefaultUsername"
                                                    aria-describedby="inputGroupPrepend2" required />
                                            </div>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault03">City</Label>
                                            <Input type="text" className="form-control" id="validationDefault03"
                                                required />
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault04">State</Label>
                                            <Input type={"select"} className="form-control" id="validationDefault04" required>
                                                <option disabled value="">Choose...</option>
                                                <option>...</option>
                                            </Input>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault05">Zip</Label>
                                            <Input type="text" className="form-control" id="validationDefault05"
                                                required />
                                        </Col>
                                    </Row>
                                    <FormGroup className="form-group">
                                        <div className="form-check">
                                            <Input className="form-check-input" type="checkbox" value=""
                                                id="invalidCheck2" required />
                                            <Label className="form-check-label" for="invalidCheck2">
                                                Agree to terms and conditions
                                                </Label>
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Button color={"primary"} type="submit">Submit form</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Supported elements</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                data-toggle="tooltip" className="text-white float-right"
                                                data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form className="was-validated">
<div className="mb-3">
<Label for="validationTextarea">Textarea</Label>
<Input type="textarea" className="form-control is-invalid" id="validationTextarea"
placeholder="Required example textarea" required />
<div className="invalid-feedback">
<FormFeedback> Please enter a message in the textarea.</FormFeedback>
</div>
</div>
<div className="custom-control custom-checkbox mb-3">
<Input type="checkbox" className="custom-control-input"
id="customControlValidation1" required />
<Label className="custom-control-label" for="customControlValidation1">Check
this custom checkbox</Label>
<div className="invalid-feedback">  <FormFeedback>Example invalid feedback text </FormFeedback></div>
</div>
<div className="custom-control custom-radio">
<Input type="radio" className="custom-control-input"
id="customControlValidation2" name="radio-stacked" required />
<Label className="custom-control-label" for="customControlValidation2">Toggle
this custom radio</Label>
</div>
<div className="custom-control custom-radio mb-3">
<Input type="radio" className="custom-control-input"
id="customControlValidation3" name="radio-stacked" required />
<Label className="custom-control-label" for="customControlValidation3">Or
toggle this other custom radio</Label>
<div className="invalid-feedback"><FormFeedback>More example invalid feedback text</FormFeedback></div>
</div>
<div className="form-group">
<Input type={"select"} className="custom-select" required>
<option value="">Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Input>
<div className="invalid-feedback"><FormFeedback>Example invalid custom select feedback</FormFeedback></div>
</div>
<div className="custom-file">
<Input type="file" className="custom-file-input" id="validatedCustomFile"
required />
<Label className="custom-file-label" for="validatedCustomFile">Choose
file...</Label>
<div className="invalid-feedback"><FormFeedback>Example invalid custom file feedback</FormFeedback></div>
</div>
</Form>
                                     `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form className="was-validated">
                                    <div className="mb-3">
                                        <Label for="validationTextarea">Textarea</Label>
                                        <Input type="textarea" className="form-control is-invalid" id="validationTextarea"
                                            placeholder="Required example textarea" required />
                                        <div className="invalid-feedback">
                                            <FormFeedback> Please enter a message in the textarea.</FormFeedback>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-checkbox mb-3">
                                        <Input type="checkbox" className="custom-control-input"
                                            id="customControlValidation1" required />
                                        <Label className="custom-control-label" for="customControlValidation1">Check
                                                this custom checkbox</Label>
                                        <div className="invalid-feedback">  <FormFeedback>Example invalid feedback text </FormFeedback></div>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <Input type="radio" className="custom-control-input"
                                            id="customControlValidation2" name="radio-stacked" required />
                                        <Label className="custom-control-label" for="customControlValidation2">Toggle
                                                this custom radio</Label>
                                    </div>
                                    <div className="custom-control custom-radio mb-3">
                                        <Input type="radio" className="custom-control-input"
                                            id="customControlValidation3" name="radio-stacked" required />
                                        <Label className="custom-control-label" for="customControlValidation3">Or
                                                toggle this other custom radio</Label>
                                        <div className="invalid-feedback"><FormFeedback>More example invalid feedback text</FormFeedback></div>
                                    </div>
                                    <div className="form-group">
                                        <Input type={"select"} className="custom-select" required>
                                            <option value="">Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Input>
                                        <div className="invalid-feedback"><FormFeedback>Example invalid custom select feedback</FormFeedback></div>
                                    </div>
                                    <div className="custom-file">
                                        <Input type="file" className="custom-file-input" id="validatedCustomFile"
                                            required />
                                        <Label className="custom-file-label" for="validatedCustomFile">Choose
                                                file...</Label>
                                        <div className="invalid-feedback"><FormFeedback>Example invalid custom file feedback</FormFeedback></div>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Custom Validation</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse3">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                data-toggle="tooltip" className="text-white float-right"
                                                data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form className="needs-validation">
<Row form>
<Col md={6} className="mb-3">
<Label for="validationDefault01">First name</Label>
<Input type="text" className="form-control" id="validationDefault01"
required />
<FormFeedback valid>Looks good!</FormFeedback>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault02">Last name</Label>
<Input type="text" className="form-control" id="validationDefault02"
required />
<FormFeedback valid>Looks good!</FormFeedback>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefaultUsername">Username</Label>
<div className="input-group">
<div className="input-group-prepend">
<span className="input-group-text" id="inputGroupPrepend2">@</span>
</div>
<Input type="text" className="form-control"
id="validationDefaultUsername"
aria-describedby="inputGroupPrepend2" required />
<FormFeedback invalid="true">Please choose a username.</FormFeedback>
</div>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault03">City</Label>
<Input type="text" className="form-control" id="validationDefault03"
required />
<FormFeedback invalid="true">Please provide a valid city.</FormFeedback>

</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault04">State</Label>
<Input type={"select"} className="form-control" id="validationDefault04" required>
<option  disabled value="">Choose...</option>
<option>...</option>
</Input>
<FormFeedback invalid="true">Please provide a valid state.</FormFeedback>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault05">Zip</Label>
<Input type="text" className="form-control" id="validationDefault05"
required />
<FormFeedback invalid>Please provide a valid zip.</FormFeedback>
</Col>
</Row>
<FormGroup className="form-group">
<div className="form-check">
<Input className="form-check-input" type="checkbox" value=""
id="invalidCheckNew1" required />
<Label className="form-check-label" for="invalidCheckNew1">
<FormFeedback invalid="true"> Agree to terms and conditions</FormFeedback>
</Label>
</div>
</FormGroup>
<FormGroup className="form-group">
<button className="btn btn-primary" type="submit">Submit form</button>
</FormGroup>
</Form>
                                     `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form className="needs-validation">
                                    <Row form>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault01">First name</Label>
                                            <Input type="text" className="form-control" id="validationDefault01"
                                                required />
                                            <FormFeedback valid>Looks good!</FormFeedback>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault02">Last name</Label>
                                            <Input type="text" className="form-control" id="validationDefault02"
                                                required />
                                            <FormFeedback valid>Looks good!</FormFeedback>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefaultUsername">Username</Label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                </div>
                                                <Input type="text" className="form-control"
                                                    id="validationDefaultUsername"
                                                    aria-describedby="inputGroupPrepend2" required />
                                                <FormFeedback invalid={"true"}>Please choose a username.</FormFeedback>
                                            </div>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault03">City</Label>
                                            <Input type="text" className="form-control" id="validationDefault03"
                                                required />
                                            <FormFeedback invalid={"true"}>Please provide a valid city.</FormFeedback>

                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault04">State</Label>
                                            <Input type={"select"} className="form-control" id="validationDefault04" required>
                                                <option disabled value="">Choose...</option>
                                                <option>...</option>
                                            </Input>
                                            <FormFeedback invalid={"true"}>Please provide a valid state.</FormFeedback>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault05">Zip</Label>
                                            <Input type="text" className="form-control" id="validationDefault05"
                                                required />
                                            <FormFeedback invalid={"true"}>Please provide a valid zip.</FormFeedback>
                                        </Col>
                                    </Row>
                                    <FormGroup className="form-group">
                                        <div className="form-check">
                                            <Input className="form-check-input" type="checkbox" value=""
                                                id="invalidCheckNew2" required />
                                            <Label className="form-check-label" for="invalidCheckNew2">
                                                <FormFeedback invalid={"true"}> Agree to terms and conditions</FormFeedback>
                                            </Label>
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Tooltips</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse4">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                data-toggle="tooltip" className="text-white float-right"
                                                data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Form className="needs-validation">
<Row form>
<Col md={6} className="mb-3">
<Label for="validationDefault01">First name</Label>
<Input type="text" className="form-control" id="validationDefault01"
required />
<FormFeedback valid tooltip>Looks good!</FormFeedback>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault02">Last name</Label>
<Input type="text" className="form-control" id="validationDefault02"
required />
<FormFeedback valid tooltip>Looks good!</FormFeedback>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefaultUsername">Username</Label>
<div className="input-group">
<div className="input-group-prepend">
<span className="input-group-text" id="inputGroupPrepend2">@</span>
</div>
<Input type="text" className="form-control"
id="validationDefaultUsername"
aria-describedby="inputGroupPrepend2" required />
<FormFeedback invalid="true" tooltip>Please choose a username.</FormFeedback>
</div>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault03">City</Label>
<Input type="text" className="form-control" id="validationDefault03"
required />
<FormFeedback invalid="true" tooltip>Please provide a valid city.</FormFeedback>

</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault04">State</Label>
<Input type={"select"} className="form-control" id="validationDefault04" required>
<option  disabled value="">Choose...</option>
<option>...</option>
</Input>
<FormFeedback invalid="true" tooltip>Please provide a valid state.</FormFeedback>
</Col>
<Col md={6} className="mb-3">
<Label for="validationDefault05">Zip</Label>
<Input type="text" className="form-control" id="validationDefault05"
required />
<FormFeedback invalid>Please provide a valid zip.</FormFeedback>
</Col>
</Row>
<FormGroup className="form-group">
<div className="form-check">
<Input className="form-check-input" type="checkbox" value=""
id="invalidCheckNew3" required />
<Label className="form-check-label" for="invalidCheckNew3">
<FormFeedback invalid="true" tooltip> Agree to terms and conditions</FormFeedback>
</Label>
</div>
</FormGroup>
<FormGroup className="form-group">
<button className="btn btn-primary" type="submit">Submit form</button>
</FormGroup>
</Form>
                                     `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Form className="needs-validation">
                                    <Row form>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault01">First name</Label>
                                            <Input type="text" className="form-control" id="validationDefault01"
                                                required />
                                            <FormFeedback valid tooltip>Looks good!</FormFeedback>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault02">Last name</Label>
                                            <Input type="text" className="form-control" id="validationDefault02"
                                                required />
                                            <FormFeedback valid tooltip>Looks good!</FormFeedback>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefaultUsername">Username</Label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                </div>
                                                <Input type="text" className="form-control"
                                                    id="validationDefaultUsername"
                                                    aria-describedby="inputGroupPrepend2" required />
                                                <FormFeedback invalid={"true"} tooltip>Please choose a username.</FormFeedback>
                                            </div>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault03">City</Label>
                                            <Input type="text" className="form-control" id="validationDefault03"
                                                required />
                                            <FormFeedback invalid={"true"} tooltip>Please provide a valid city.</FormFeedback>

                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault04">State</Label>
                                            <Input type={"select"} className="form-control" id="validationDefault04" required>
                                                <option disabled value="">Choose...</option>
                                                <option>...</option>
                                            </Input>
                                            <FormFeedback invalid={"true"} tooltip>Please provide a valid state.</FormFeedback>
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <Label for="validationDefault05">Zip</Label>
                                            <Input type="text" className="form-control" id="validationDefault05"
                                                required />
                                            <FormFeedback invalid={"true"}>Please provide a valid zip.</FormFeedback>
                                        </Col>
                                    </Row>
                                    <FormGroup className="form-group">
                                        <div className="form-check">
                                            <Input className="form-check-input" type="checkbox" value=""
                                                id="invalidCheckNew5" required />
                                            <Label className="form-check-label" for="invalidCheckNew5">
                                                <FormFeedback invalid={"true"} tooltip> Agree to terms and conditions</FormFeedback>
                                            </Label>
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
