import * as React from "react";
import { Blockchain } from "../components/Blockchain";

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
    ListGroup,
    ListGroupItem,
    UncontrolledTooltip
} from "reactstrap";
import { Block } from "../components/Block";

// Interface to display relevant block data
interface LastBlock {
    index?: number;
    hash?: string;
    timestamp?: number;
}

export class Dashboard extends React.Component<{}, LastBlock> {

    constructor(props: Readonly<{}>) {
        super(props);
        let _blockchain = Blockchain.getInstance();
        //console.log(JSON.parse(JSON.stringify(_blockchain.latestBlock)));
        this.state = {
            index: _blockchain.latestBlock.index,
            hash: _blockchain.latestBlock.hash,
            timestamp: _blockchain.latestBlock.timestamp
        };
        this.mine = this.mine.bind(this);
    }

    public mine(): void {
        let _blockchain = Blockchain.getInstance();
        console.log(_blockchain.latestBlock);
        _blockchain.addBlock(Math.random.toString());
        this.setState({
            index: _blockchain.latestBlock.index,
            hash: _blockchain.latestBlock.hash,
            timestamp: _blockchain.latestBlock.timestamp
        });
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col className="text-left" sm="6">
                                        <h5 className="card-category">Blockchain Test</h5>
                                        <CardTitle tag="h3">Last Block</CardTitle>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div>
                                    <ListGroup className="display-area">
                                        <ListGroupItem><u>Hash Value:</u> {this.state.hash}</ListGroupItem>
                                        <ListGroupItem><u>Index Value:</u> {this.state.index}</ListGroupItem>
                                        <ListGroupItem><u>Timestamp Value:</u> {this.state.timestamp}</ListGroupItem>
                                    </ListGroup>
                                </div>
                                <div className="display-area">
                                    <Button onClick={this.mine}>Add a block</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
