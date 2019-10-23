import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {withTranslation} from "react-i18next";
import styles from './style.module.scss'

import mail from './img/mail.png'
class PageFooter extends Component {

    render() {
        const {t} = this.props

        return (
            <>

                <div className={styles.navFooter}>
                    <Container>
                        <Row className='d-flex justify-content-center'>
                            <Col className={styles.contact} xs={12} md={8} lg={6}>
                                <img src={mail}/>
                                <p>
                                    Want to keep up with this fast-evolving community?
                                    Please drop us a line at <a href='mailto:contact@dacplay.org'>contact@dacplay.org</a>
                                </p>
                            </Col>
                        </Row>

                        <Row className={`${styles.copyright} d-flex`}>
                            <Col className="text-center">
                                 Copyright &#169; 2019 DACPLAY
                            </Col>
                        </Row>


                    </Container>
                </div>
            </>
        );
    }
}

export default withTranslation()(PageFooter);
