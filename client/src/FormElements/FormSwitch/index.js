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
                    <Col sm={12} lg={12}>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>State</h4></CardTitle>
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
<div className="custom-control custom-switch custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customSwitch1" />
<Label className="custom-control-label" for="customSwitch1">false /
Inactive</Label>
</div>
<div className="custom-control custom-switch custom-control-inline">
<Input type="checkbox" className="custom-control-input" id="customSwitch2"
checked/>
<Label className="custom-control-label" for="customSwitch2">true /
active</Label>
</div>
<div className="custom-control custom-switch custom-control-inline">
<Input type="checkbox" className="custom-control-input" disabled
id="customSwitch3" defaultChecked />
<Label className="custom-control-label" for="customSwitch3">disable /
active</Label>
</div>
<div className="custom-control custom-switch custom-control-inline">
<Input type="checkbox" className="custom-control-input" disabled
id="customSwitch4" />
<Label className="custom-control-label" for="customSwitch4">disable /
Inactive</Label>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="custom-control custom-switch custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                    <Label className="custom-control-label" for="customSwitch1">false /
                                            Inactive</Label>
                                </div>
                                <div className="custom-control custom-switch custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" id="customSwitch2"
                                        defaultChecked />
                                    <Label className="custom-control-label" for="customSwitch2">true /
                                            active</Label>
                                </div>
                                <div className="custom-control custom-switch custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" disabled
                                        id="customSwitch3" defaultChecked />
                                    <Label className="custom-control-label" for="customSwitch3">disable /
                                            active</Label>
                                </div>
                                <div className="custom-control custom-switch custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input" disabled
                                        id="customSwitch4" />
                                    <Label className="custom-control-label" for="customSwitch4">disable /
                                            Inactive</Label>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Text</h4></CardTitle>
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
<div className="custom-control custom-switch custom-switch-text custom-control-inline">
<div className="custom-switch-inner">
<p className="mb-0"> Primary </p>
<Input type="checkbox" className="custom-control-input" id="customSwitch-11"
checked={"true"} />
<Label className="custom-control-label" for="customSwitch-11"
data-on-label="On" data-off-label="Off">
</Label>
</div>
</div>
<div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
<p className="mb-0"> Success </p>
<Input type="checkbox" className="custom-control-input bg-success"
id="customSwitch-22"defaultChecked />
<Label className="custom-control-label" for="customSwitch-22"
data-on-label="Tr" data-off-label="Fal">
</Label>
</div>
</div>
<div  className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
<p className="mb-0"> Danger </p>
<Input type="checkbox" className="custom-control-input bg-danger"
id="customSwitch-33"defaultChecked />
<Label className="custom-control-label" for="customSwitch-33"
data-on-label="Yes" data-off-label="No">
</Label>
</div>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="custom-control custom-switch custom-switch-text custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> Primary </p>
                                        <Input type="checkbox" className="custom-control-input" id="customSwitch-11"
                                            defaultChecked />
                                        <Label className="custom-control-label" for="customSwitch-11"
                                            data-on-label="On" data-off-label="Off">
                                        </Label>
                                    </div>
                                </div>
                                <div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> Success </p>
                                        <Input type="checkbox" className="custom-control-input bg-success"
                                            id="customSwitch-22" defaultChecked />
                                        <Label className="custom-control-label" for="customSwitch-22"
                                            data-on-label="Tr" data-off-label="Fal">
                                        </Label>
                                    </div>
                                </div>
                                <div className="custom-control custom-switch custom-switch-text custom-switch-color custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> Danger </p>
                                        <Input type="checkbox" className="custom-control-input bg-danger"
                                            id="customSwitch-33" defaultChecked />
                                        <Label className="custom-control-label" for="customSwitch-33"
                                            data-on-label="Yes" data-off-label="No">
                                        </Label>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={12}>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Color</h4></CardTitle>
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
                                        `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="custom-control custom-switch custom-switch-color custom-control-inline" >
                                    <Input type="checkbox" className="custom-control-input bg-primary"
                                        id="customSwitch01" defaultChecked />
                                    <Label className="custom-control-label" for="customSwitch01">Primary</Label>
                                </div>
                                <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-success"
                                        id="customSwitch02" defaultChecked />
                                    <Label className="custom-control-label" for="customSwitch02">Success</Label>
                                </div>
                                <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-danger"
                                        id="customSwitch03" defaultChecked />
                                    <Label className="custom-control-label" for="customSwitch03">Danger</Label>
                                </div>
                                <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-waring"
                                        id="customSwitch04" defaultChecked />
                                    <Label className="custom-control-label" for="customSwitch04">Waring</Label>
                                </div>
                                <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-dark" id="customSwitch05"
                                        defaultChecked />
                                    <Label className="custom-control-label" for="customSwitch05">Dark</Label>
                                </div>
                                <div className="custom-control custom-switch custom-switch-color custom-control-inline">
                                    <Input type="checkbox" className="custom-control-input bg-info" id="customSwitch06"
                                        defaultChecked />
                                    <Label className="custom-control-label" for="customSwitch06">Info</Label>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Icon</h4></CardTitle>
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
<div className="custom-control custom-switch custom-switch-icon custom-control-inline">
<div className="custom-switch-inner">
<p className="mb-0"> Primary </p>
<Input type="checkbox" className="custom-control-input" id="customSwitch-1" />
<Label className="custom-control-label" for="customSwitch-1">
<span className="switch-icon-left"><i
className="fa fa-check"></i></span>
<span className="switch-icon-right"><i
className="fa fa-check"></i></span>
</Label>
</div>
</div>
<div
className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
<p className="mb-0"> Success </p>
<Input type="checkbox" className="custom-control-input bg-success"
id="customSwitch-2" />
<Label className="custom-control-label" for="customSwitch-2">
<span className="switch-icon-left"><i
className="fa fa-check"></i></span>
<span className="switch-icon-right"><i
className="fa fa-check"></i></span>
</Label>
</div>
</div>
<div
className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
<p className="mb-0"> Danger </p>
<Input type="checkbox" className="custom-control-input bg-danger"
id="customSwitch-3" />
<Label className="custom-control-label" for="customSwitch-3">
<span className="switch-icon-left"><i
className="fa fa-times"></i></span>
<span className="switch-icon-right"><i
className="fa fa-times"></i></span>
</Label>
</div>
</div>
<div
className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
<p className="mb-0"> Warning </p>
<Input type="checkbox" className="custom-control-input bg-warning"
id="customSwitch-4" />
<Label className="custom-control-label" for="customSwitch-4">
<span className="switch-icon-left"><i
className="fa fa-exclamation-triangle"></i></span>
<span className="switch-icon-right"><i
className="fa fa-exclamation-triangle"></i></span>
</Label>
</div>
</div>
<div
className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
<p className="mb-0"> Dark </p>
<Input type="checkbox" className="custom-control-input bg-dark"
id="customSwitch-5" />
<Label className="custom-control-label" htmlFor="customSwitch-5">
<span className="switch-icon-left"><i className="fa fa-thumb-tack"></i></span>
<span className="switch-icon-right"><i className="fa fa-thumb-tack"></i></span>
</Label>
</div>
</div>
<div
className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
<div className="custom-switch-inner">
<p className="mb-0"> Info </p>
<Input type="checkbox" className="custom-control-input bg-info"
id="customSwitch-6" />
<Label className="custom-control-label" htmlFor="customSwitch-6">
<span className="switch-icon-left"><i className="fa fa-info"></i></span>
<span className="switch-icon-right"><i
className="fa fa-info"></i></span>
</Label>
</div>
</div>
                                        `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> Primary </p>
                                        <Input type="checkbox" className="custom-control-input" id="customSwitch-1" />
                                        <Label className="custom-control-label" for="customSwitch-1">
                                            <span className="switch-icon-left"><i
                                                className="fa fa-check"></i></span>
                                            <span className="switch-icon-right"><i
                                                className="fa fa-check"></i></span>
                                        </Label>
                                    </div>
                                </div>
                                <div
                                    className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> Success </p>
                                        <Input type="checkbox" className="custom-control-input bg-success"
                                            id="customSwitch-2" />
                                        <Label className="custom-control-label" for="customSwitch-2">
                                            <span className="switch-icon-left"><i
                                                className="fa fa-check"></i></span>
                                            <span className="switch-icon-right"><i
                                                className="fa fa-check"></i></span>
                                        </Label>
                                    </div>
                                </div>
                                <div
                                    className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> Danger </p>
                                        <Input type="checkbox" className="custom-control-input bg-danger"
                                            id="customSwitch-3" />
                                        <Label className="custom-control-label" for="customSwitch-3">
                                            <span className="switch-icon-left"><i
                                                className="fa fa-times"></i></span>
                                            <span className="switch-icon-right"><i
                                                className="fa fa-times"></i></span>
                                        </Label>
                                    </div>
                                </div>
                                <div
                                    className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> Warning </p>
                                        <Input type="checkbox" className="custom-control-input bg-warning"
                                            id="customSwitch-4" />
                                        <Label className="custom-control-label" for="customSwitch-4">
                                            <span className="switch-icon-left"><i
                                                className="fa fa-exclamation-triangle"></i></span>
                                            <span className="switch-icon-right"><i
                                                className="fa fa-exclamation-triangle"></i></span>
                                        </Label>
                                    </div>
                                </div>
                                <div
                                    className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> Dark </p>
                                        <Input type="checkbox" className="custom-control-input bg-dark"
                                            id="customSwitch-5" />
                                        <Label className="custom-control-label" htmlFor="customSwitch-5">
                                            <span className="switch-icon-left"><i className="fa fa-thumb-tack"></i></span>
                                            <span className="switch-icon-right"><i className="fa fa-thumb-tack"></i></span>
                                        </Label>
                                    </div>
                                </div>
                                <div
                                    className="custom-control custom-switch custom-switch-icon custom-switch-color custom-control-inline">
                                    <div className="custom-switch-inner">
                                        <p className="mb-0"> Info </p>
                                        <Input type="checkbox" className="custom-control-input bg-info"
                                            id="customSwitch-6" />
                                        <Label className="custom-control-label" htmlFor="customSwitch-6">
                                            <span className="switch-icon-left"><i className="fa fa-info"></i></span>
                                            <span className="switch-icon-right"><i
                                                className="fa fa-info"></i></span>
                                        </Label>
                                    </div>
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
