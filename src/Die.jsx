import PropTypes from 'prop-types';

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <button 
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >{props.value}</button>
    )
}

Die.propTypes = {
    isHeld: PropTypes.bool.isRequired,
    hold: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

