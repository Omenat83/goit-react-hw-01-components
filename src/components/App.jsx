import { Profile } from './Profile/Profile';
import user from 'data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from 'data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile profile={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
