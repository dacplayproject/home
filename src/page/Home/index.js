import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import styles from './style.module.scss'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";

import Logo from './img/logo.png'
import Section_1 from './img/section/section_1.png'
import Section_2 from './img/section/section_2.png'
import Section_3 from './img/section/section_3.png'

class Home extends Component {
    constructor(props, context) {
        super(props, context);


    }

    componentDidMount() {
        archorsComponent()
    }

    changeTextValue = (k, e) => {
        this.setState({
            [k]: e.target.value
        })
    }


    render() {
        const {t} = this.props
        return (
            <div>
                <PageHeader/>
                <Container>
                    <div className={styles.title}>
                        <img src={Logo}/>
                        <h1>An Open Blockchain Game Community</h1>
                    </div>

                    <Row className={`${styles.section} d-flex align-items-center`}>
                        <Col xs={12} md={6} lg={6}>
                            <img src={Section_1}/>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <h3>
                                Decentralized marketplace between crypto world and the game assets world
                            </h3>
                            <p>
                                Traditional game providers will be able to sell their game coins and game assets to
                                people though DACPLAY, which can be consider as the door opened to the crypto world and
                                than the entire world
                            </p>
                        </Col>
                    </Row>


                    <Row className={`${styles.section} d-flex align-items-center`}>
                        <Col xs={{order: 2, span:12}} md={{order: 1, span: 6}} lg={6}>
                            <h3>
                                Node for blockchain game network </h3>
                            <p>
                                DACPLAY is the node of the blockchain game network
                                and is an important part of the blockchain game </p>
                        </Col>
                        <Col xs={{order: 1, span:12}} md={{order: 2, span: 6}} lg={6}>
                            <img src={Section_2}/>
                        </Col>
                    </Row>


                    <Row className={`${styles.section} d-flex align-items-center`}>
                        <Col xs={12} md={6} lg={6}>
                            <img src={Section_3}/>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <h3>
                                Peer to peer game assets exchange </h3>
                            <p>
                                DACPLAY is not only a marketplace for selling goods like game coins and assets, people
                                can also trade with each other with game coins peer to peer using exchange we
                                provide </p>
                        </Col>
                    </Row>
                </Container>
                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()

(
    Home
)
;
