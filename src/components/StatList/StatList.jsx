import PropTypes from 'prop-types';
import { StatItem, StatLabel, StatValue } from 'components/Profile/Profile.styled';

export const StatList = ({stats}) => {
    return (
        <StatList>
      {stats.map((stat, idx) => (
        <StatItem key={idx}>
              <StatLabel>{stat.label}</StatLabel>
              <StatValue>{stat.value }</StatValue>
        </StatItem>
      ))}
    </StatList>
        
    );
};

StatList.propTypes = {
    stats: PropTypes.array.isRequired,
};