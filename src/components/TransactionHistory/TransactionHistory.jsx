import {
  Head,
  Table,
  TableBody,
  TableCell,
  TableLine,
  Thead,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Head>Type</Head>
          <Head>Amount</Head>
          <Head>Currency</Head>
        </tr>
      </Thead>
      <TableBody>
        {items.map(item => {
          return (
            <TableLine key={item.id}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.currency}</TableCell>
            </TableLine>
          );
        })}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
