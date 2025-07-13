import React, { useContext } from "react";
import { context } from "./GrandFather";

const GrandChild = () => {
  const data = useContext(context);
//   console.log(data);
  return <div>
    Hello Grandchild this side: {data}
  </div>;
};
/*
const GrandChild = () => {
  return <div>{
    <context.Consumer>
        {(data)=>{
            return <div>
                I am a Grandchild:{data}
            </div>
        }}
    </context.Consumer>
    }
    </div>;
};
*/
export default GrandChild;
