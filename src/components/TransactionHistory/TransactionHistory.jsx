import PropTypes from 'prop-types';
import { Table, TH, TD , TR} from "./TransactionHistory.styled";


export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <thead>
                <TR>
                    <TH>Type</TH>
                    <TH>Amount</TH>
                    <TH>Currency</TH>
                </TR>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency} )=>
                    <TR key={id}>
                        <TD>{type}</TD>
                        <TD>{amount}</TD>
                        <TD>{currency}</TD>
                    </TR>)}
            </tbody>
        </Table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    })
    ),
}
