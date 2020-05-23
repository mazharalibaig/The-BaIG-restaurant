import React from 'react';

export const LoadingComponent = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary ml-auto"></span>
            <p>Loading . . .</p>
        </div>
    );
};