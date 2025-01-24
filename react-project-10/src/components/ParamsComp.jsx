import React from 'react'
// sb use krne se pehle import krlo chicha
import { useParams } from 'react-router-dom';
const ParamsComp = () => {
    // useParams() returns an object where each key corresponds to a dynamic parameter defined in the route.
    // If your route had multiple dynamic parameters, e.g., /user/:id/:name, you could destructure them like this:
    // const { id, name } = useParams();
    // then obj. destructing
    const {id} =  useParams();
    return (
        <div>
            Params : {id}
        </div>
    )
}

export default ParamsComp