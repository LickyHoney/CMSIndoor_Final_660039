import React from 'react';
import { Row, Col, Card, div, CardTitle, CardBody, UncontrolledCollapse, Button, ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap';



class ModalTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modelAddFloorModal: false
            // model2: false,
            // model3: false,
            // model4: false,
            // model5: false,
            // model6: false,
            // model7: false,
            // model8: false,
            // model9: false,
        };
    }

    // componentDidMount() {
    //     setTimeout(function () {
    //         index();
    //     }, 800);
    // }

    toggle = (model_id) => {
        this.setState({
            [model_id]: !this.state[model_id]
        });
    };

    render() {

        return (
            <>
                


                                {/*Small modal*/}
                                <Button color="primary" onClick={() => this.toggle("modelAddFloorModal")}> AddFloor </Button>{' '}

                                {/*Modal*/}
                                <Modal isOpen={this.state.modelAddFloorModal} toggle={() => this.toggle("modelAddFloorModal")} className="modal-sm">
                                    <ModalHeader toggle={() => this.toggle("modelAddFloorModal")}>Modal title</ModalHeader>
                                    <ModalBody>
                                        <p>Modal body text goes here.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={() => this.toggle("modelAddFloorModal")}>Save changes</Button>{' '}
                                        <Button color="secondary" onClick={() => this.toggle("modelAddFloorModal")}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            
            </>
        );
    }
}

export default ModalTemplate;
