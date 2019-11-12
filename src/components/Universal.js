import React from "react";
import universal from 'react-universal-component'

const UniversalComponent = universal(({ page }) => {
    console.log(page);
    return import(`../pages/${page}`);
}, {
    minDelay: 500,
    loading: () => <div>Loading ...</div>,
    error: () => <div>Error</div>,
    onError(error, options) {
        throw error;
    }
})

export default UniversalComponent;
