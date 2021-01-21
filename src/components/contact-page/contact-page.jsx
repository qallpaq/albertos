import React, {useState} from 'react';
import './contact-page.scss';
import Flag from "../common/flag";
import ContactForm from "../contact-form";
import Alert from "../common/alert";
import withCurrentPage from "../../hoc";


const ContactPage = () => {
    const [alert, setAlert] = useState(false);
    const alertOff = (a) => {
        setAlert(false)
        clearTimeout(a)
    }

    const onSubmit = (formData) => {
        for (const prop of Object.keys(formData)) {
            delete formData[prop];
        }
        setAlert(true);
    };

    return (
        <div className='container'>
            <div className='contact'>
                <Flag title='contact'/>
                <div className="contact__content">
                    <div className='contact__left'>
                        <div className="contact__left-item">
                            <h2 className="contact__item-title">ADDRESS</h2>
                            <div className="contact__item-row">3021 Lady Bug Drive</div>
                            <div className="contact__item-row">Brooklyn, NY 11230, USA</div>
                        </div>

                        <div className="contact__left-item">
                            <h2 className="contact__item-title">CALL OR WRITE</h2>
                            <div className="contact__item-row"><b>Phone /</b> 00386 40 868 300</div>
                            <div className="contact__item-row"><b>Email /</b> info@somedomain.com</div>
                        </div>

                        <div className="contact__left-item">
                            <h2 className="contact__item-title">OPENING HOURS</h2>
                            <div className="contact__item-row"><b>Mon – Fri /</b> 8am – 11pm</div>
                            <div className="contact__item-row"><b>Saturday /</b> 8am – 1am</div>
                            <div className="contact__item-row"><b>Sunday</b> (closed)</div>
                        </div>
                    </div>

                    <div className='contact__right'>
                        {alert && <Alert text='message sent' alertOff={alertOff}/>}
                        <ContactForm onSubmit={onSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default withCurrentPage(ContactPage, 5);