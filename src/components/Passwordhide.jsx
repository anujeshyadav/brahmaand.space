import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

function Passwordhide() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="input-group my-4 mx-4">
          <input
            type={passwordType}
            onChange={handlePasswordChange}
            value={passwordInput}
            name="password"
            class="form-control"
            placeholder="Password"
          />
          <div className="input-group-btn ">
            <button className="" onClick={togglePassword}>
              {passwordType === "password" ? (
                <FaRegEyeSlash />
              ) : (
                <AiOutlineEye />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Passwordhide;
