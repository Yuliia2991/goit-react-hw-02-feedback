import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttons}>
      {options.map(key => (
        <li key={key}>
          <button
            className={css.button}            
            type="button"
            onClick={() => onLeaveFeedback(key)}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired, 
  onLeaveFeedback: PropTypes.func.isRequired,
  
}