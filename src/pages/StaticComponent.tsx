import React from 'react';

const SomeComponent = () => {
    console.log( "Re-rendering", Date.now() );

    return <div>
        <div>This is a static component</div>
    </div>
};

export default React.memo( SomeComponent );