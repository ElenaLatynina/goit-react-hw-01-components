import PropTypes from 'prop-types';
import { Stat, Title, StatItem ,StatLabel,StatValue } from "./Statistics.styled."
import { StatList } from 'components/StatList/StatList.styled';

export const Statistics = () => {
    return (
        <Stat>
            <Title>Upload stats</Title>

            <StatList>
                <StatItem>
                    <StatLabel >.docx</StatLabel>
                    <StatValue>4%</StatValue>
                </StatItem>
                <StatLabel >.mp3</StatLabel>
                <StatValue>14%</StatValue>
                <StatItem>
                    <StatLabel >.pdf</StatLabel>
                    <StatValue>41%</StatValue>
                </StatItem>
                <StatItem>
                    <StatLabel >.mp4</StatLabel>
                    <StatValue>12%</StatValue>
                </StatItem>
            </StatList>
        </Stat>
    )
};

Stat.propTypes = {
    title: PropTypes.string.isRequired,
    // stats: PropTypes.array.isRequired,
};