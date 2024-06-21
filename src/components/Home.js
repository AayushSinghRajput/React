import Notes from "./Notes";

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-labe">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="check-box"
              className="form-check-input "
              id="exampleCheck1"
            />
            <label htmlFor="exampleCheck1" className="form-check-label">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Notes />
    </div>
  );
};

export default Home;
