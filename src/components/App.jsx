import { Profile } from "./Profile/Profile";
import user from "data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "data/data.json";
import { FriendList } from "./FriendsList/FrienfsList";
import friends from "data/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "data/transactions.json";



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
