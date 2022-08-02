import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (               
        <ul className={css.list}>
            <li className={css.list__item}>Good: {good}</li>
            <li className={css.list__item}>Neutral: {neutral}</li>
            <li className={css.list__item}>Bad: {bad}</li>
            <li className={css.list__item}>Total: {total}</li>
            <li className={css.list__item}>Positive feedback: { good > 0 ? positivePercentage : 0}%</li>
        </ul>
            
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}
