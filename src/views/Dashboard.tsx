import * as React from "react";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="content">
                <Row>
                    <Col xs="12">
                        <CardHeader>
                            <h1>I am testing!</h1>
                        </CardHeader>
                    </Col>
                </Row>
            </div>
        )
    }
}
