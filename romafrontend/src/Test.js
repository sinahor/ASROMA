import { useState } from "react";
import "./stylenew.css";
export default function Test() {
  const [f, setF] = useState(true);
  const [s, setS] = useState(true);
  const [t, setT] = useState(true);
  return (
    <div>
      <ul className="containerdiv">
        <li>
          <label onClick={(e) => setF(!f)}>Main One</label>
          <ul className={f ? "menucontainer" : "hidden"}>
            <li>Menu One</li>
            <li>Menu One</li>
            <li>Menu One</li>
            <li>Menu One</li>
          </ul>
        </li>
        <li onClick={(e) => setS(!s)}>
          Main Two
          <ul className={s ? "menucontainer" : "hidden"}>
            <li>Menu One</li>
            <li>Menu One</li>
            <li>Menu One</li>
            <li>Menu One</li>
          </ul>
        </li>
        <li onClick={(e) => setT(!t)}>
          Main Three
          <ul className={t ? "menucontainer" : "hidden"}>
            <li>Menu One</li>
            <li>Menu One</li>
            <li>Menu One</li>
            <li>Menu One</li>
          </ul>
        </li>
      </ul>
      <div className="sample">Sample div</div>
    </div>
  );
}
