import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row } from "reactstrap";
import "./Selectapp.css";
import technology from "../images/technology.png";

const SelectApp = () => {
  const [text, setText] = useState();
  // handle events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(text);
  // handle submit events
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white  mx-5 mt-20 rounded-lg ">
            <div className="h-28 flex justify-center items-center shadow">
              <p className="text-4xl font-bold uppercase text-center">
                Validate Select Input
              </p>
              <div className="row">
                <div className="grid justify-center col">
                  <div className="mt-12">
                    <select
                      className={`w-96 rounded-lg text-3xl ${
                        errors.Category &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      {...register("Category", {
                        required: "Category is required",
                      })}
                    >
                      <option value="">--Select Category--</option>
                      <option value="ma">Ma</option>
                      <option value="fem">Fem</option>
                      <option value="ot">ot</option>
                    </select>
                    <div>
                      {errors.Category && (
                        <span
                          style={{ color: "red" }}
                          className="text-sm text-red-500"
                        >
                          {errors.Category.message}
                        </span>
                      )}
                    </div>
                    <h2>text</h2>
                    <input
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                      type="text"
                      className={`w-96 rounded-lg text-3xl ${
                        errors.Category &&
                        "focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      {...watch("Text", {
                        required: "Text is required",
                      })}
                    />
                  </div>
                  <div>
                    {errors.Text && (
                      <span
                        style={{ color: "red" }}
                        className="text-sm text-red-500"
                      >
                        {errors.Text.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid justify-center col">
                  <div className="mt-12">
                    <select
                      className={`w-96 rounded-lg text-3xl ${
                        errors.gender &&
                        " focus:border-red-500 focus:ring-red-500 border-red-500"
                      }`}
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                    >
                      <option value="">--Select Gender--</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">other</option>
                    </select>
                  </div>
                  <div>
                    {errors.gender && (
                      <span className="text-sm text-red-500">
                        {errors.gender.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center mt-12">
                  <input
                    type="submit"
                    value="Submit"
                    className="w-2/5 h-10 rounded-lg bg-blue-700  font-bold text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Row>
        <div
          style={{
            backgroundImage: `url(${technology}) `,
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "relative",
            // padding: "200px 46%",
            backgroundRepeat: "no-repeat",
            height: "80vh",
          }}
          className="hero-image"
        >
          <div className="hero-text">
            <h1>I am John Doe</h1>
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
          </div>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default SelectApp;
