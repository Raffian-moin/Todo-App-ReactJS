import ListItems from "./ListItems";
export default function Hello() {
    return (
      <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h6 className="mb-3">Awesome Todo List</h6>
                  <form className="d-flex justify-content-center align-items-center mb-4">
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill"
                    >
                      <input
                        type="text"
                        id="form3"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3">
                        What do you need to do today?
                      </label>
                    </div>
                    <button
                      type="submit"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary btn-lg ms-2"
                    >
                      Add
                    </button>
                  </form>
                  <ListItems />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}