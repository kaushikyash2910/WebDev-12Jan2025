import React, { useContext } from "react";
import { context, todoContext } from "./GrandFather";

const GrandChild = () => {
  const data = useContext(context);
  const todosData = useContext(todoContext);
  console.log(todosData);
  //   console.log(data);
  return (
    <div>
      Hello Grandchild this side: {data}
      <br></br>
{todosData.map((todo) => {
  return <div>{todo}</div>;
})}
    </div>
  );
};

// const GrandChild = () => {
//   return (
//     <div>
//       <todoContext.Consumer>
//         {(todosData) => {
//           return (
//             <context.Consumer>
//               {(data) => {
//                 return (
//                   <div>
//                     Grandchild Data: {data}
//                     {todosData.map((todos) => {
//                       return <div>{todos}</div>;
//                     })}
//                   </div>
//                 );
//               }}
//             </context.Consumer>
//           );
//         }}
//       </todoContext.Consumer>
//     </div>
//   );
// };

export default GrandChild;
