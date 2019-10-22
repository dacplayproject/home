import React, {Component} from "react";
import {Container} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import styles from "./style.module.scss";


class Faq extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    componentDidMount() {
        archorsComponent()
    }


    render() {
        const {t} = this.props
        return (
            <div>
                <PageHeader/>
                <div className={`${styles.faq}`}>
                    <Container>
                        <div>
                            <h1>PLS</h1>
                            <p>The ERC-20 parameters of the PLS token is as following:</p>
                            <p>Token Address: 0xe43ac1714F7394173b15E7CfF31A63d523Ce4fB9</p>
                            <p>Token Symbol: PLS</p>
                            <p>Token Decimal: 18</p>
                        </div>
                    </Container>
                </div>
                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(Faq);
