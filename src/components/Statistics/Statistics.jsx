import PropTypes from 'prop-types';
import { Stat, Title, StatList, StatItem ,StatLabel,StatValue } from "./Statistics.styled."

export const Statistics = ({ title, stats }) => {

    return (<Stat>
        <Title>{ title}</Title>
        <StatList>
            {stats.map(stat => {
                const colorItem = {
                    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`,
                };
                return (<StatItem style={colorItem} key={stat.id}>
                    <StatLabel>{stat.label}</StatLabel>
                    <StatValue>{stat.percentage}%</StatValue>
                </StatItem>
                )
            })}
        </StatList>
    </Stat>);
};


Statistics.propTypes = {
    stats: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
    ),
};
