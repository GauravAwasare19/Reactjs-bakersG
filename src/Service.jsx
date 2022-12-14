import React from "react"
import Sdata from "./Sdata"
import Card from "./Card"
export default function Service() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our products</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            {
                                Sdata.map((val,ind)=>{
                                    return <Card
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    description={val.description}
                                    />
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}