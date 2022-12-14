import React from "react"

export default function Contact() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>

            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form
                            action="https://formspree.io/f/mzbwnwlo"
                            method="POST"
                        >
                            <div className="mb-3">
                                <label id="div1" for="exampleFormControlInput1" className="form-label" > Full Name -</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" name="fname"/>
                            </div>
                            <div className="mb-3">
                                <label id="div1" for="exampleFormControlInput1" className="form-label" >Phone no. -</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="mobile number" name="number" />
                            </div>
                            <div className="mb-3">
                                <label id="div2" for="exampleFormControlInput1" className="form-label" >Email-address -</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" />
                            </div>
                            <div className="mb-3">
                                <label id="div3" for="exampleFormControlTextarea1" className="form-label" required>Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                      
                    </div>
                </div>
            </div>
        </>
    )
}