import React from 'react';
import { index } from "../../../config/pluginsInit";
import {
    Card,
    CardBody,
    div,
    CardText,
    CardTitle, Col,
    Input,
    Label,
    Row,
    UncontrolledCollapse
} from "reactstrap";
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
                                <CardTitle className={"card-title"}><h4>Basic Checkbox</h4></CardTitle>
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
<div className="checkbox d-inline-block mr-2">
<Input type="checkbox" className="checkbox-input" id="checkbox1" /> {' '}
<Label htmlFor="checkbox1">Primary / Inactive</Label>{' '}
</div>
<div className="checkbox d-inline-block mr-2">
<Input type="checkbox" className="checkbox-input" id="checkbox2"defaultChecked />
<Label htmlFor="checkbox2">Primary / Active</Label>{' '}
</div>
<div className="checkbox d-inline-block mr-2">
<Input type="checkbox" className="checkbox-input" id="checkbox3" disabled="" />
<label htmlFor="checkbox3">Disable / Inactive</label>{' '}
</div>
<div className="checkbox d-inline-block mr-2">
<Input type="checkbox" className="checkbox-input" id="checkbox4"defaultChecked
disabled="" />
<Label htmlFor="checkbox4">Active / Disable</Label>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="checkbox d-inline-block mr-2">
                                    <Input type="checkbox" className="checkbox-input" id="checkbox1" /> {' '}
                                    <Label htmlFor="checkbox1">Primary / Inactive</Label>{' '}
                                </div>
                                <div className="checkbox d-inline-block mr-2">
                                    <Input type="checkbox" className="checkbox-input" id="checkbox2" defaultChecked />
                                    <Label htmlFor="checkbox2">Primary / Active</Label>{' '}
                                </div>
                                <div className="checkbox d-inline-block mr-2">
                                    <Input type="checkbox" className="checkbox-input" id="checkbox3" disabled="" />
                                    <label htmlFor="checkbox3">Disable / Inactive</label>{' '}
                                </div>
                                <div className="checkbox d-inline-block mr-2">
                                    <Input type="checkbox" className="checkbox-input" id="checkbox4" defaultChecked
                                        disabled="" />
                                    <Label htmlFor="checkbox4">Active / Disable</Label>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Custom Checkbox</h4></CardTitle>
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
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck5"/>
<Label className="custom-control-label" htmlFor="customCheck5">Primary /
Inactive</Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck6"
defaultChecked />
<Label className="custom-control-label" htmlFor="customCheck6">Primary -
active</Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck7"
disabled="" />
<Label className="custom-control-label" htmlFor="customCheck7">Primary -
inactive - disabled</Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck8" checked=""
disabled={true} />
<Label className="custom-control-label" htmlFor="customCheck8">Primary - active
- disabled</Label>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck5" />
                                    <Label className="custom-control-label" htmlFor="customCheck5">Primary /
                                            Inactive</Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck6"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck6">Primary -
                                            active</Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck7"
                                        disabled="" />
                                    <Label className="custom-control-label" htmlFor="customCheck7">Primary -
                                            inactive - disabled</Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck8" defaultChecked
                                        disabled={true} />
                                    <Label className="custom-control-label" htmlFor="customCheck8">Primary - active
                                            - disabled</Label>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Custom Color</h4></CardTitle>
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
<div
className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-primary"
id="customCheck-11" />
<Label className="custom-control-label"
htmlFor="customCheck-11">Primary </Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-success"
id="customCheck-22" />
<Label className="custom-control-label" htmlFor="customCheck-22">Success</Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-danger"
id="customCheck-33" />
<Label className="custom-control-label" htmlFor="customCheck-33">Danger</Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-warning"
id="customCheck-44" />
<Label className="custom-control-label" htmlFor="customCheck-44">Warning</Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-dark" id="customCheck-55" />
<Label className="custom-control-label" htmlFor="customCheck-55">Dark</Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-info" id="customCheck-66" />
<Label className="custom-control-label" htmlFor="customCheck-66"> Info</Label>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-primary"
                                        id="customCheck-11" />
                                    <Label className="custom-control-label"
                                        htmlFor="customCheck-11">Primary </Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-success"
                                        id="customCheck-22" />
                                    <Label className="custom-control-label" htmlFor="customCheck-22">Success</Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-danger"
                                        id="customCheck-33" />
                                    <Label className="custom-control-label" htmlFor="customCheck-33">Danger</Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-warning"
                                        id="customCheck-44" />
                                    <Label className="custom-control-label" htmlFor="customCheck-44">Warning</Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-dark" id="customCheck-55" />
                                    <Label className="custom-control-label" htmlFor="customCheck-55">Dark</Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-info" id="customCheck-66" />
                                    <Label className="custom-control-label" htmlFor="customCheck-66"> Info</Label>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Boolean Checkbox</h4></CardTitle>
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
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck-t"
defaultChecked />
<Label className="custom-control-label" htmlFor="customCheck-t">True</Label>
</div>
<div className="custom-control custom-checkbox custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck-f" />
<Label className="custom-control-label" htmlFor="customCheck-f">False</Label>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck-t"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-t">True</Label>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck-f" />
                                    <Label className="custom-control-label" htmlFor="customCheck-f">False</Label>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Color</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse5">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                data-toggle="tooltip" className="text-white float-right"
                                                data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
 <div
className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-primary"
id="customCheck-1" defaultChecked />
<Label className="custom-control-label" htmlFor="customCheck-1"> Primary</Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-success"
id="customCheck-2" defaultChecked />
<Label className="custom-control-label" htmlFor="customCheck-2">Success</Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-danger" id="customCheck-3"
defaultChecked />
<Label className="custom-control-label" htmlFor="customCheck-3">Danger</Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-warning"
id="customCheck-4" defaultChecked />
<Label className="custom-control-label" htmlFor="customCheck-4">Warning</Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-dark" id="customCheck-5"
defaultChecked />
<Label className="custom-control-label" htmlFor="customCheck-5">Dark</Label>
</div>
<div
className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
<Input type="checkbox" className="custom-control-input bg-info" id="customCheck-6"
defaultChecked/>
<Label className="custom-control-label" htmlFor="customCheck-6">Info</Label>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-primary"
                                        id="customCheck-1" defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-1"> Primary</Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-success"
                                        id="customCheck-2" defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-2">Success</Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-danger" id="customCheck-3"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-3">Danger</Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-warning"
                                        id="customCheck-4" defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-4">Warning</Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-dark" id="customCheck-5"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-5">Dark</Label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-info" id="customCheck-6"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-6">Info</Label>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Change Icon</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</CardText>
                                <UncontrolledCollapse toggler="#collapse6">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                data-toggle="tooltip" className="text-white float-right"
                                                data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck-10"
defaultChecked />
<label className="custom-control-label" htmlhtmlFor="customCheck-10"><i
className="fa fa-music"></i>Music</label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck-20"
defaultChecked />
<Label className="custom-control-label" htmlhtmlFor="customCheck-20"><i
className="fa fa-commenting-o"></i>SMS</Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck-30"
defaultChecked />
<Label className="custom-control-label" htmlhtmlFor="customCheck-30"><i
className="fa fa-times"></i>Cancle</Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck-40"
defaultChecked />
<Label className="custom-control-label" htmlhtmlFor="customCheck-40"><i
className="fa fa-file"></i>File</Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck-50"
defaultChecked />
<Label className="custom-control-label" htmlhtmlFor="customCheck-50"><i
className="fa fa-bold"></i>Bold</Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck-60"
defaultChecked />
<Label className="custom-control-label" htmlhtmlFor="customCheck-60"><i
className="fa fa-map-marker"></i>Location</Label>
</div>
<div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customCheck-70"
defaultChecked />
<Label className="custom-control-label" htmlhtmlFor="customCheck-70" ><i
className="fa fa-camera"></i>Camera</Label>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck-10"
                                        defaultChecked />
                                    <label className="custom-control-label" htmlFor="customCheck-10"><i
                                        className="fa fa-music"></i>Music</label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck-20"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-20"><i
                                        className="fa fa-commenting-o"></i>SMS</Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck-30"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-30"><i
                                        className="fa fa-times"></i>Cancle</Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck-40"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-40"><i
                                        className="fa fa-file"></i>File</Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck-50"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-50"><i
                                        className="fa fa-bold"></i>Bold</Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck-60"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-60"><i
                                        className="fa fa-map-marker"></i>Location</Label>
                                </div>
                                <div className="custom-control custom-checkbox checkbox-icon custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customCheck-70"
                                        defaultChecked />
                                    <Label className="custom-control-label" htmlFor="customCheck-70" ><i
                                        className="fa fa-camera"></i>Camera</Label>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
