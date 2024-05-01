import React, { useState, forwardRef,useImperativeHandle} from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref,() => ({
    alterToggle(){
      setToggle(!toggle);
    },


  }));

  return (
    <div>
      <button >reset Child</button>
      {toggle && <h3>reset successfully</h3>}
    </div>
  );
});

export { Button };
