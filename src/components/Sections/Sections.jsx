import PropTypes from 'prop-types';
export default function Sections({ title, sectionClassName, children }) {
  return (
    <section className={sectionClassName}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
Sections.propTypes = {
  title: PropTypes.string,
  sectionClassName: PropTypes.string,
  children: PropTypes.element.isRequired,
};
