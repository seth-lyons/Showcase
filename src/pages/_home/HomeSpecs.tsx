import * as React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

export function HomeSpecs(props) {
    return (
        <div className="homeSpecsWrapper">
            <div className="cardWrapper">
                <Card>
                    <div className="cardImageWrapper">
                        <CardImg top src="img/zoom.jpg" alt="Car go fast" className="tallImage" />
                    </div>
                    <CardBody>
                        <CardTitle tag="h5">1.21 Gigawatt Engine</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Power</CardSubtitle>
                        <CardText>With a top speed of 88 miles per hour, get to where you're going so fast, it will be like you travelled through time.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="cardWrapper">
                <Card>
                    <div className="cardImageWrapper">
                        <CardImg top src="img/internal.jpg" alt="Inside the car" />
                    </div>
                    <CardBody>
                        <CardTitle tag="h5">Premium Interior</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Comfort</CardSubtitle>
                        <CardText>Featuring an all leather interior, ultrawide seats, and all the latest technology. Get ready for an experience like never before.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="cardWrapper">
                <Card>
                    <div className="cardImageWrapper">
                        <CardImg top src="img/accessories.jpg" alt="Accessories" />
                    </div>
                    <CardBody>
                        <CardTitle tag="h5">Ultra Customizable</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Tailored to You</CardSubtitle>
                        <CardText>A huge variety of add-ons and accessories allow you to make your new Delorean truly something special.</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}