import css from './Section.module.css'
import PropTypes from 'prop-types';

export const Section = ({title, children}) => {
    return (
        <section className={css.feedback}>
            <h1 className={css.feedback__title}>{title}</h1>
            {children}
            
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}