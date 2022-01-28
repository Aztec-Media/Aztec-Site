// import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // useEffect(() => {
  //   document.onmousemove = (e) => {
  //     setX(e.clientX);
  //     setY(e.clientY);
  //   };
  // });

  return (
    <>
      {/* <Cursor /> */}
      {/* <div id='cursor' style={{ left: x, top: y }}></div> */}
      <div className='wrapper'>{children}</div>
    </>
  );
}
