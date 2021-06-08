import React from 'react';
import { index } from "../../../config/pluginsInit";
import {
    Card,
    CardBody,
    div,
    CardText,
    CardTitle, Col,
    Row,
    UncontrolledCollapse
} from "reactstrap";
class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            radioButton: false,
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
                                <CardTitle className={"card-title"}><h4>Default Radio Buttons</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div   >

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
<div className="radio d-inline-block mr-2">
    <input type="radio" name="bsradio" id="radio1" checked />{' '}
    <label htmlFor="radio1">Active</label>
</div>
<div className="radio d-inline-block mr-2">
    <input type="radio" name="bsradio" id="radio2" />{' '}
    <label htmlFor="radio2">Inactive</label>
</div>
<div className="radio d-inline-block mr-2">
    <input type="radio" name="bsradio1" id="radio3" disabled="" checked="" />{' '}
    <label htmlFor="radio3">Active - Disabled</label>
</div>
<div className="radio d-inline-block mr-2">
    <input type="radio" name="bsradio1" id="radio4" disabled="" />{' '}
    <label htmlFor="radio3">Inactive - Disabled</label>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="radio d-inline-block mr-2">
                                    <input type="radio" onChange={() => { }} name="bsradio" id="radio1" checked />{' '}
                                    <label htmlFor="radio1">Active</label>
                                </div>
                                <div className="radio d-inline-block mr-2">
                                    <input type="radio" onChange={() => { }} name="bsradio" id="radio2" />{' '}
                                    <label htmlFor="radio2">Inactive</label>
                                </div>
                                <div className="radio d-inline-block mr-2">
                                    <input type="radio" onChange={() => { }} name="bsradio1" id="radio3" disabled />{' '}
                                    <label htmlFor="radio3">Active - Disabled</label>
                                </div>
                                <div className="radio d-inline-block mr-2">
                                    <input type="radio" onChange={() => { }} name="bsradio1" id="radio4" disabled />{' '}
                                    <label htmlFor="radio3">Inactive - Disabled</label>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Custom Colored Radio Buttons</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div   >

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
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <input type="radio" id="customRadio01" name="customRadio-11" className="custom-control-input bg-primary" />
    <label className="custom-control-label" htmlFor="customRadio01"> Primary </label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <input type="radio" id="customRadio02" name="customRadio-11" className="custom-control-input bg-success" />
    <label className="custom-control-label" htmlFor="customRadio02"> Success </label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <input type="radio" id="customRadio03" name="customRadio-11" className="custom-control-input bg-danger" />
    <label className="custom-control-label" htmlFor="customRadio03"> Danger </label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <input type="radio" id="customRadio04" name="customRadio-11" className="custom-control-input bg-warning" />
    <label className="custom-control-label" htmlFor="customRadio04"> Warning </label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <input type="radio" id="customRadio05" name="customRadio-11" className="custom-control-input bg-dark" />
    <label className="custom-control-label" htmlFor="customRadio05"> Dark </label>
</div>
<div className="custom-control custom-radio custom-radio-color custom-control-inline">
    <input type="radio" id="customRadio06" name="customRadio-11" className="custom-control-input bg-info" />
    <label className="custom-control-label" htmlFor="customRadio06"> Info </label>
</div>

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio01" name="customRadio-11"
                                        className="custom-control-input bg-primary" />
                                    <label className="custom-control-label"
                                        htmlFor="customRadio01"> Primary </label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio02" name="customRadio-11"
                                        className="custom-control-input bg-success" />
                                    <label className="custom-control-label"
                                        htmlFor="customRadio02"> Success </label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio03" name="customRadio-11"
                                        className="custom-control-input bg-danger" />
                                    <label className="custom-control-label" htmlFor="customRadio03"> Danger </label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio04" name="customRadio-11"
                                        className="custom-control-input bg-warning" />
                                    <label className="custom-control-label"
                                        htmlFor="customRadio04"> Warning </label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio05" name="customRadio-11"
                                        className="custom-control-input bg-dark" />
                                    <label className="custom-control-label" htmlFor="customRadio05"> Dark </label>
                                </div>
                                <div className="custom-control custom-radio custom-radio-color custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio06" name="customRadio-11"
                                        className="custom-control-input bg-info" />
                                    <label className="custom-control-label" htmlFor="customRadio06"> Info </label>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Custom Radio Buttons</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div   >

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
<div className="custom-control custom-radio custom-control-inline">
<input type="radio" id="customRadio6" name="customRadio-1"
className="custom-control-input" />
<label className="custom-control-label" htmlFor="customRadio6"> One </label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<input type="radio" id="customRadio7" name="customRadio-1"
className="custom-control-input" />
<label className="custom-control-label" htmlFor="customRadio7"> Two </label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<input type="radio" id="customRadio8" name="customRadio-1"
className="custom-control-input" checked />
<label className="custom-control-label" htmlFor="customRadio8"> Three </label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<input type="radio" id="customRadio-8" name="customRadio-2"
className="custom-control-input" checked />
<label className="custom-control-label" htmlFor="customRadio-8"> Four
Checked </label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<input type="radio" id="customRadio9" name="customRadio-3"
className="custom-control-input" disabled="" />
<label className="custom-control-label" htmlFor="customRadio9"> Five
disabled</label>
</div>
<div className="custom-control custom-radio custom-control-inline">
<input type="radio" id="customRadio10" name="customRadio-4"
className="custom-control-input" disabled="" checked />
<label className="custom-control-label" htmlFor="customRadio10"> Six Selected
and disabled</label>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio6" name="customRadio-1"
                                        className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadio6"> One </label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio7" name="customRadio-1"
                                        className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="customRadio7"> Two </label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio8" name="customRadio-1"
                                        className="custom-control-input" checked />
                                    <label className="custom-control-label" htmlFor="customRadio8"> Three </label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio-8" name="customRadio-2"
                                        className="custom-control-input" checked />
                                    <label className="custom-control-label" htmlFor="customRadio-8"> Four
                                            Checked </label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio9" name="customRadio-3"
                                        className="custom-control-input" disabled="" />
                                    <label className="custom-control-label" htmlFor="customRadio9"> Five
                                            disabled</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio10" name="customRadio-4"
                                        className="custom-control-input" disabled="" checked />
                                    <label className="custom-control-label" htmlFor="customRadio10"> Six Selected
                                            and disabled</label>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <div className={"iq-card-header d-flex justify-content-between"}>
                                <CardTitle className={"card-title"}><h4>Custom Radio Buttons</h4></CardTitle>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </div   >

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
<div
className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
<input type="radio" id="customRadio-1" name="customRadio-10"
className="custom-control-input bg-primary" />
<label className="custom-control-label"
htmlFor="customRadio-1"> Primary </label>
</div>
<div
className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
<input type="radio" id="customRadio-2" name="customRadio-10"
className="custom-control-input bg-success" />
<label className="custom-control-label"
htmlFor="customRadio-2"> Success </label>
</div>
<div
className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
<input type="radio" id="customRadio-3" name="customRadio-10"
className="custom-control-input bg-danger" />
<label className="custom-control-label" htmlFor="customRadio-3"> Danger </label>
</div>
<div
className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
<input type="radio" id="customRadio-4" name="customRadio-10"
className="custom-control-input bg-warning" />
<label className="custom-control-label"
htmlFor="customRadio-4"> Warning </label>
</div>
<div
className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
<input type="radio" id="customRadio-5" name="customRadio-10"
className="custom-control-input bg-dark" />
<label className="custom-control-label" htmlFor="customRadio-5"> Dark </label>
</div>
<div
className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
<input type="radio" id="customRadio-6" name="customRadio-10"
className="custom-control-input bg-info" />
<label className="custom-control-label" htmlFor="customRadio-6"> Info </label>
</div>
`}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div
                                    className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio-1" name="customRadio-10"
                                        className="custom-control-input bg-primary" />
                                    <label className="custom-control-label"
                                        htmlFor="customRadio-1"> Primary </label>
                                </div>
                                <div
                                    className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio-2" name="customRadio-10"
                                        className="custom-control-input bg-success" />
                                    <label className="custom-control-label"
                                        htmlFor="customRadio-2"> Success </label>
                                </div>
                                <div
                                    className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio-3" name="customRadio-10"
                                        className="custom-control-input bg-danger" />
                                    <label className="custom-control-label" htmlFor="customRadio-3"> Danger </label>
                                </div>
                                <div
                                    className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio-4" name="customRadio-10"
                                        className="custom-control-input bg-warning" />
                                    <label className="custom-control-label"
                                        htmlFor="customRadio-4"> Warning </label>
                                </div>
                                <div
                                    className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio-5" name="customRadio-10"
                                        className="custom-control-input bg-dark" />
                                    <label className="custom-control-label" htmlFor="customRadio-5"> Dark </label>
                                </div>
                                <div
                                    className="custom-control custom-radio custom-radio-color-checked custom-control-inline">
                                    <input type="radio" onChange={() => { }} id="customRadio-6" name="customRadio-10"
                                        className="custom-control-input bg-info" />
                                    <label className="custom-control-label" htmlFor="customRadio-6"> Info </label>
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
