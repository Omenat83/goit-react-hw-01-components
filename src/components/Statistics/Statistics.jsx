import {
  ContainerLines,
  Percentage,
  Section,
  StatList,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <h2>{title}</h2>

      <ContainerLines>
        {stats.map(label => {
          const bgrColor = getRandomHexColor();
          return (
            <StatList key={label.id} color={bgrColor}>
              <span>{label.label}: </span>
              <Percentage>{label.percentage}%</Percentage>
            </StatList>
          );
        })}
      </ContainerLines>
    </Section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
