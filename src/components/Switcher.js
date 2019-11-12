import React from "react";
import { connect } from 'react-redux';
import UniversalComponent from "./Universal";

const Switcher = ({ page, isLoading }) => {
    console.log('Switcher --> ', page)
    return (
        <div key={page}>
          <UniversalComponent page={page} isLoading={isLoading}/>
        </div>
    );
}

const mapState = ({ page, direction }) => ({
    page,
    direction,
})

export default connect(mapState)(Switcher)
