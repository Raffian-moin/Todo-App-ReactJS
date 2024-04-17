export default function ListItems() {
    return(
        <ul className="list-group mb-0">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          aria-label="..."
                        />
                        Cras justo odio
                      </div>
                      <a href="#!" data-mdb-tooltip-init="" title="Remove item">
                        <i className="fas fa-times text-primary" />
                      </a>
                    </li>
                    <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          aria-label="..."
                          defaultChecked=""
                        />
                        <s>Dapibus ac facilisis in</s>
                      </div>
                      <a href="#!" data-mdb-tooltip-init="" title="Remove item">
                        <i className="fas fa-times text-primary" />
                      </a>
                    </li>
                    <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          aria-label="..."
                        />
                        Morbi leo risus
                      </div>
                      <a href="#!" data-mdb-tooltip-init="" title="Remove item">
                        <i className="fas fa-times text-primary" />
                      </a>
                    </li>
                    <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          aria-label="..."
                        />
                        Porta ac consectetur ac
                      </div>
                      <a href="#!" data-mdb-tooltip-init="" title="Remove item">
                        <i className="fas fa-times text-primary" />
                      </a>
                    </li>
                    <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-0">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          aria-label="..."
                          defaultChecked=""
                        />
                        Vestibulum at eros
                      </div>
                      <a href="#!" data-mdb-tooltip-init="" title="Remove item">
                        <i className="fas fa-times text-primary" />
                      </a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                      <div className="d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          aria-label="..."
                        />
                        Morbi leo risus
                      </div>
                      <a href="#!" data-mdb-tooltip-init="" title="Remove item">
                        <i className="fas fa-times text-primary" />
                      </a>
                    </li>
        </ul>
    )
}