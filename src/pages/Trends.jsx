import React from 'react'
import { App } from '../components/App'
import dot from "../assets/dots/dot1.png"
import dotblue from "../assets/dots/dot-blue.png"
import dotyellow from "../assets/dots/dot-yellow.png"
import arrowred from "../assets/arrow-red.png"
import dotpink from "../assets/dots/dot-pink.png"
import BasicExample from '../components/ProgressBar'
export default function Trends() {
  return (
    <div className="container-fluid py-0">
      <div className="row g-3">
        <div className="col-lg-12 p-0">
          <div className="card bg-transparent border-0 p-0">
            <div className="card-header border-0 bg-transparent p-0">
              <div className="card-title text-white fs-6 fw-bold">TRENDS</div>
            </div>
            <div className="card-body p-0">
              <App />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row">
              <div className="col-md-5">
                <div className="card py-0 rounded-4 b-cards bg-transparent border-0">
                  <div className="card-header border-0 bg-transparent">
                    <div className="card-title text-white fs-5 p-0 m-0 fw-semibold">Sales Trends</div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive bg-transparent">
                      <table className="table table-borderless p-0">
                        <thead className="">
                          <tr className="">
                            <th className="bg-transparent">
                            <span className="text-white-grey">Product Name</span>
                            </th>
                            <th className="bg-transparent">
                            <span className="text-white-grey">Rate</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-transparent">
                              <span><img src={dot} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-white ps-1">Web Design Template</span>
                            </td>
                            <td className="bg-transparent">
                              <span><img src={arrowred} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-green ps-2">+2.0%</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-transparent">
                              <span><img src={dotblue} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-white ps-1">App Template</span>
                            </td>
                            <td className="bg-transparent">
                              <span><img src={arrowred} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-green ps-2">+2.0%</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-transparent">
                              <span><img src={dotpink} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-white ps-1">Dashboard Template</span>
                            </td>
                            <td className="bg-transparent">
                              <span><img src={arrowred} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-green ps-2">+2.0%</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-transparent">
                              <span><img src={dotyellow} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-white ps-1">Icons Set</span>
                            </td>
                            <td className="bg-transparent">
                              <span><img src={arrowred} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-green ps-2">+2.0%</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card h-100 py-0 rounded-4 b-cards bg-transparent border-0">
                  <div className="card-header border-0 bg-transparent">
                    <div className="card-title text-white fs-5 p-0 m-0 fw-semibold">Sales Sales</div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive bg-transparent">
                      <table className="table table-borderless p-0">
                        <thead className="">
                          <tr className="">
                            <th className="bg-transparent">
                            <span className="text-white-grey"></span>
                            </th>
                            <th className="bg-transparent">
                            <span className="text-white-grey"></span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-transparent w-50" style={{verticalAlign:"center"}}>
                              <span className="text-white">Web Template</span>
                              <BasicExample width={60} />
                            </td>
                            <td className="bg-transparent" style={{verticalAlign:"bottom"}}>
                              <span className="text-white">123/1000 sold</span>
                            </td>
                            <td className="bg-transparent" style={{verticalAlign:"bottom"}}>
                              <span><img src={arrowred} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-green ps-2">+2.0%</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-transparent w-50" style={{verticalAlign:"center"}}>
                              <span className="text-white">Web Template</span>
                              <BasicExample width={90} />
                            </td>
                            <td className="bg-transparent" style={{verticalAlign:"bottom"}}>
                              <span className="text-white">123/1000 sold</span>
                            </td>
                            <td className="bg-transparent" style={{verticalAlign:"bottom"}}>
                              <span><img src={arrowred} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-green ps-2">+2.0%</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="bg-transparent w-50" style={{verticalAlign:"center"}}>
                              <span className="text-white">Web Template</span>
                              <BasicExample width={90} />
                            </td>
                            <td className="bg-transparent" style={{verticalAlign:"bottom"}}>
                              <span className="text-white">123/1000 sold</span>
                            </td>
                            <td className="bg-transparent" style={{verticalAlign:"bottom"}}>
                              <span><img src={arrowred} className="img-fluid" alt="" width={8} /></span>
                              <span className="text-green ps-2">+2.0%</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
