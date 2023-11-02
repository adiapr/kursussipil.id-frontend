import React from 'react'
import LokerComponent from '../components/card/loker'

export default function Loker() {
  return (
    <div>
        <div className="container my-5">
            <div className="section-title">
                <h2>Loker</h2>
                <h3>Lowongan kerja <span>perusahaan</span></h3>
                <p>
                    Dapatkan informasi seputar lowongan pekerjaan di perusahaan terkemuka
                </p>
            </div>
            <div>
                <LokerComponent />
            </div>
        </div>
    </div>
  )
}
