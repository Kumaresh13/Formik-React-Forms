import React from 'react'
import "../forms.css";

const ShopDetails = () => {
    return (
        <div className="container">
            <h2>Shop Details</h2>
            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required="required" />
                        <span className="text">First name</span>
                        <span className="line"></span>
                    </div>
                </div>

                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required="required" />
                        <span className="text">Last name</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>

            <div className="row100">
                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required="required" />
                        <span className="text">Email</span>
                        <span className="line"></span>
                    </div>
                </div>

                <div className="col">
                    <div className="inputBox">
                        <input type="text" name="" required="required" />
                        <span className="text">Phone</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            <div className="row100">
                <div className="col">
                    <div className="inputBox textarea">
                        <textarea name="" required="required"></textarea>
                        <span className="text">Message</span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>

            <div className="row100">
                <div className="col">
                    <input type="submit" value="Send" />
                </div>
            </div>
        </div>
    )
}

export default ShopDetails;