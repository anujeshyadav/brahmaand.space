import React from "react";
import { useForm } from "react-hook-form";

const SelectApp = () => {
  // handle events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // handle submit events
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white w-auto h-96 mx-5 mt-20 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
            {/* header section */}
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
                  </div>
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

                {/* btn section */}
                <div className="flex items-center justify-center mt-12">
                  <input
                    type="submit"
                    value="Submit"
                    className="w-2/5 h-10 rounded-lg bg-blue-700  font-bold text-white"
                  />
                </div>
              </div>
            </div>

            {/* body section */}
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default SelectApp;
