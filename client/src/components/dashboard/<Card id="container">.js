<Card id="container">
<CardBody>
    {

        markers.filter(item => item.id === refno).map(filteredName => (
            <div>
                <FormGroup className="form-group">
                    <Label htmlFor="exampleInputReadonly">Building Id</Label>
                    <Input type="text" className="form-control" id="exampleInputReadonly"
                        readOnly="" defaultValue={filteredName.id} disabled />
                </FormGroup>

                <FormGroup className="form-group">
                    <Label htmlFor="exampleInputReadonly">Building Name</Label>
                    <Input type="text" className="form-control" id="exampleInputReadonly"
                        readOnly="" defaultValue={filteredName.description} />
                </FormGroup>

                <FormGroup className="form-group">
                    <Label htmlFor="exampleInputReadonly">Street</Label>
                    <Input type="text" className="form-control" id="exampleInputReadonly"
                        readOnly="" defaultValue={filteredName.street} />
                </FormGroup>

                <FormGroup className="form-group">
                    <Label htmlFor="exampleInputReadonly">Apartment</Label>
                    <Input type="text" className="form-control" id="exampleInputReadonly"
                        readOnly="" defaultValue={filteredName.Apartment} />
                </FormGroup>


                <FormGroup className="form-group">
                    <Label htmlFor="exampleInputReadonly">Doornum</Label>
                    <Input type="text" className="form-control" id="exampleInputReadonly"
                        readOnly="" defaultValue={filteredName.doornum} />
                </FormGroup>


                <FormGroup className="form-group">
                    <Label htmlFor="exampleInputReadonly">Region</Label>
                    <Input type="text" className="form-control" id="exampleInputReadonly"
                        readOnly="" defaultValue={filteredName.region} />
                </FormGroup>

                <FormGroup className="form-group">
                    <Label htmlFor="exampleInputReadonly">Country</Label>
                    <Input type="text" className="form-control" id="exampleInputReadonly"
                        readOnly="" defaultValue={filteredName.country} />

                </FormGroup>
            </div>
        ))}

</CardBody>
</Card>