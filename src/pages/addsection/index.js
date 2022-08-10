function AddLessons(){


    return(
        <>       
            <div className="container-fluid py-4">
      <div className="row">
        <div className="col-lg-9 col-12 mx-auto">
          <div className="card card-body mt-4">
            <h6 className="mb-0">Course Name</h6>
            
            <hr className="horizontal dark my-3"/>
            <label  className="form-label">Lesson Name</label>
            <input type="text" className="form-control" id="projectName"/>
            
            <label className="mt-4">Project Description</label>
            <p className="form-text text-muted text-xs ms-1">
              This is how others will learn about the project, so make it good!
            </p>
            <div id="editor">
              <p>Hello World!</p>
              <p>Some initial <strong>bold</strong> text</p>
              
            </div>
            
            
            
            <div className="d-flex justify-content-end mt-4">
              <button type="button" name="button" className="btn btn-light m-0" >Cancel</button>
              <button type="button" name="button" className="btn bg-gradient-primary m-0 ms-2">Add Lesson</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>

    )
}

export default AddLessons