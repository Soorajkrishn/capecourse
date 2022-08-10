function AddAmount(props){

    return(
        <>
        <main className="main-content main-content-bg mt-0">
            <div className="page-header min-vh-100">
              <span className="mask bg-gradient-dark opacity-6"></span>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-7">
                      <div className="card z-index-0">
                        <div className="card-header text-center pt-4">
                          <h1>{props.c_name}</h1>
                        </div>
                        <div className="card-body">
                          <form >
                            <div className="mb-3">
                              <input type="text" className="form-control" placeholder="Amount" aria-label="Amount" />
                            </div>
                            <div className="text-center">
                              <button type="button" className="btn bg-gradient-dark w-100 my-4 mb-2" >Add Amount</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </>
    )
}

export default AddAmount