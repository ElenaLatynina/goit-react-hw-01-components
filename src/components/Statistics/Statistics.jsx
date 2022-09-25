import PropTypes from 'prop-types';
import { Stat, Title, StatList,StatItem ,StatLabel,StatValue } from "./Statistics.styled."

export const Statistics = ({title, stats}) => {
    return (
        <Stat>
            <Title>{title}</Title>

            <StatList>
                {stats.map((stat) => (
                    <StatItem key={stat.id}>
                        <StatLabel>{stat.label}</StatLabel>
                        <StatValue>{stat.percentage}</StatValue>
                    </StatItem>
                ))}
            </StatList>
        </Stat>
    );
};

Stat.propTypes = {
    title: PropTypes.string.isRequired,
    // stats: PropTypes.array.isRequired,
};