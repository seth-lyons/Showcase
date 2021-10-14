import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import * as React from 'react';

export function HomeOutline(props) {
    const [showForm, setShowForm] = React.useState<boolean>(false);
    const [timerActive, setTimerActive] = React.useState<boolean>(false);

    React.useEffect(() => {
        let interval = null;
        if (timerActive) {
            interval = setInterval(() => {
                flipForm();
                flipTimer();
                clearInterval(interval);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [timerActive]);

    const flipForm = () => {
        setShowForm(prev => !prev);
    }

    const flipTimer = () => {
        setTimerActive(prev => !prev);
    }

    const onSubmit = (e: React.FormEvent) => {
        //just to show timer and state abilities. Not actually doint anything with this data
        e.preventDefault();
        flipTimer();
    }

    return (
        <div className="homeOutlineWrapper">
            <div className="homeOutlineContainer">
                <div className="homeOutlineImgContainer">
                    <img src="img/doorsup.jpg" />
                </div>
                <div className="homeOutlineContentWrapper">
                    <div className="homeOutlineContentContainer">
                        <div className={`homeOutlineInfo formTransition ${(showForm ? "hideInfo" : "showInfo")}`}>
                            <div className="homeOutlineInfoWrapper">
                                <div>
                                    <h2>Experience the Future</h2>
                                    <p>
                                        With style and comfort that is out of this world, you will feel like you've traveled 30 years into the future.
                                        With unparalleled design and added performance of the all new Flux Capacitor, the only limitation is your imagination.
                                    </p>
                                    <Button outline color="light" onClick={flipForm}>Find out more</Button>
                                </div>
                            </div>
                        </div>
                        <div className={`homeOutlineForm formTransition ${(showForm ? "showForm" : "hideForm")}`}>
                            <div className="homeOutlineInfoWrapper">
                                <div className="homeOutlineInfoContainer">
                                    <h3>Be the first to know</h3>
                                    <p>
                                        Enter your information below to receive a notification when the Delorean becomes available near you.
                                    </p>
                                    <Form onSubmit={onSubmit}>
                                        <FormGroup row>
                                            <Label for="name" sm={2}>Name</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="name" id="name" placeholder="Your Name" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="email" sm={2}>Email</Label>
                                            <Col sm={10}>
                                                <Input type="email" name="email" id="email" placeholder="example@domain.com" required />
                                            </Col>
                                        </FormGroup>
                                        <Button type="submit" outline color="light" >Sign Me Up!</Button>
                                        <br />
                                        <label className={`notice${timerActive ? "" : " invisible"}`}>You will be notified soon!</label>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}