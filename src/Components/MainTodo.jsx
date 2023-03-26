import React, { useCallback, useState } from "react";

function MainTodo() {
  const [work, setWork] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = useCallback((e) => {
    setWork(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    const value = work;
    if (work !== "") {
      setItems((state) => [...state, value]);
      setWork("");
    }
  }, [work]);

  const handleDeleteClick = (i) => {
    const newList = [...items];
    newList.splice(i, 1);
    setItems(newList);
  };
  return (
    <div>
      <div className="container-sm text-center">
        <div className="row">
          <div className=" col-sm-6 mx-auto ">
            <div className="card shadow-lg rounded m-6">
              <div className="card-title shadow-sm p-4 ">
                <h2>Today's Work</h2>
              </div>
              <div className="card-body">
                <div className="row align-items-start">
                  <div className="col-9">
                    <div className="input mb-3 ">
                      <input
                        type="text"
                        value={work}
                        onChange={handleChange}
                        className="form-control p-2"
                        placeholder="Enter Your Todays Work here"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      onClick={handleClick}
                      className="btn  btn-outline-primary px-4 "
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-sm text-center">
        <div className="row">
          <div className=" col-sm-6 mx-auto ">
            <div className="card shadow-lg rounded m-6">
              <div className="card-title shadow-sm p-4 ">
                <h2>Your Todays Work</h2>
              </div>

              {items.map((a, i) => (
                <div className="row shadow p-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value="isChecked"
                    className="col-sm-1 m-2"
                  />
                  <h6 className="col-sm-8">{a}</h6>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm col-sm-2 "
                    onClick={() => handleDeleteClick(i)}
                  >
                    {" "}
                    X{" "}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainTodo);
