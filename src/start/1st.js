import React from 'react';
function Welcome(props) {
    return (
        <h5> Hello,{props.name}</h5>
    );
}
const Ali=<Welcome name="Sara"/>;
export default Welcome;