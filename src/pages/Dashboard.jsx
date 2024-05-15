import React from 'react'
import logo from "../assets/headeer-logo.png"
import arrow from "../assets/arrow.png"
import asset from "../assets/icons/Asset.png"
import projects from "../assets/icons/projects.png"
import Investment from "../assets/icons/Investment.png"
import sideprojects from "../assets/icons/sideprojects.png"
import bubbles from "../assets/bubbles.png"
export default function Dashboard() {
  return (
    <div className="gg">
      <div className="container-fluid p-0 m-0">
        <div className="row">
          <div className="col-md-4">
            <div className="row g-0">
              <div className="col-md-12 m-0 p-0">
                <div className="card border-0 bg-transparent m-0 px-5 pt-4 top-card m-0">
                  <div className="card-header border-0 text-end  bg-transparent">
                    <div className="px-5 py-2"><img src={logo} alt="" width={40} /></div>
                  </div>
                  <div className="card-body bg-transparent border-0 pb-4">
                    <h6 className="text-white">Total Earnings</h6>
                    <h1 className="text-white"><span>$12,345,789</span></h1>
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-green pb-1"><img className="img-fluid" src={arrow} alt="" width={12} /></span>
                      <p className="p-0 m-0"><span className="text-green fw-bold">+ 2.0%</span><span className="text-white"> than last month</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 m-0 p-0">
                <div className="card px-5 pb-5 bottom-card border-0 m-0">
                  <div className="card-header border-0 text-end  bg-transparent">
                    <div className="px-5 py-2"><img src={logo} alt="" width={40} /></div>
                  </div>
                  <div className="card-body pb-4">
                    <h6 className="text-white">Autcomes</h6>
                    <h1 className="text-white"><span>$12,345,789</span></h1>
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-green pb-1"><img className="img-fluid" src={arrow} alt="" width={12} /></span>
                      <p className="p-0 m-0"><span className="text-danger fw-bold">+ 2.0%</span><span className="text-white"> than last month</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card p-0 shadow-lg bg-transparent">
              <div className="card-body p-0">
                <h1 className="text-white text-center pe-5">Generic Statistic</h1>
                <div className="d-flex justify-content-center gap-4 pt-2">
                  <div className="d-flex gap-3">
                    <span className="bg-d rounded-4"><img src={projects} className="img-fluid" width={40} alt="" /></span>
                    <p className="d-flex flex-column"><span className="text-white-grey">Projects</span><span className="text-white fs-6 fw-bold">932</span></p>
                  </div>
                  <div className="d-flex gap-3">
                    <span className="bg-d rounded-4"><img src={sideprojects} className="img-fluid" width={30} alt="" /></span>
                    <p className="d-flex flex-column"><span className="text-white-grey">Side Projects</span><span className="text-white fs-6 fw-bold">10,32</span></p>
                  </div>
                  <div className="d-flex gap-3">
                    <span className="bg-d rounded-4"><img src={Investment} className="img-fluid" width={40} alt="" /></span>
                    <p className="d-flex flex-column"><span className="text-white-grey">Investment</span><span className="text-white fs-6 fw-bold">102k</span></p>
                  </div>
                  <div className="d-flex gap-3">
                    <span className="bg-d rounded-4"><img src={asset} className="img-fluid" width={40} alt="" /></span>
                    <p className="d-flex flex-column"><span className="text-white-grey">Assets</span><span className="text-white fs-6 fw-bold">32k</span></p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5">
                <img src={bubbles} alt="" className="img-fluid w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
