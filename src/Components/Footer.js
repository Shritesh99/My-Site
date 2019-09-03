import React, {
    Component
} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className = "footer" style={{background: '#030303', margin: "-1rem"}}>
                <div className = "container" >
                    <h3 className = "text-center" > Design and Coded with <span role="img"> ❤️ </span> by ME.</h3 >
                    <h3 className = "text-center"><small> Copyright © 2019 Shritesh All Rights Reserved.</small></h3>
                </div>
            </footer>
        );
    }
}

export default Footer;