"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'; // Import date-fns

export default function CourseComponent() {
    // buat setter 
    const [courses, setCourses] = useState<Course[]>([])
    interface Course {
      formattedDate: any; // atau sesuaikan dengan jenis tipe yang benar
      judul: any; // atau sesuaikan dengan jenis tipe yang benar
      kategori: any
      media: any
    }

    useEffect(() => {
      fetch('http://localhost:8000/api/course')
        .then((response) => response.json())
        .then((data) => {
          const formattedCourses = data.data_course.data.map((course: any) => {
            // Format the date within the map function
            const formattedDate = format(new Date(course.date_start), 'dd MMMM yyyy');
            return { ...course, formattedDate };
          });
          setCourses(formattedCourses);
        })
        .catch((error) => {
          console.log('Error mengambil data', error);
        });
    }, []);

  return (
    <div className="row mb-5">
        
        {courses.length > 0 ? (
        courses.map((course) => (
            <div className="col-md-3 col-6 mt-3 px-1 px-md-2">
          <Link href={'/'} suppressHydrationWarning={true}>
            <div className="card">
              <div className="d-flex  ratio ratio-16x9">
              <img
                src={course.media[0].original_url}
                style={{ objectFit: 'cover' }}
                className="card-img-top"
                alt="Load Image"
              />
              </div>
              <div className="card-body p2">
                <div className="row">
                  <div className="col-md-6 my-0">
                    <span className='text-primary' style={{ fontSize: '12px' }}>
                      <i className="fa fa-calendar"></i>
                      {course.formattedDate}
                    </span>
                  </div>
                  <div className="col-6 d-none d-md-block">
                      <div className="btn btn-warning btn-sm px-3 py-0 pull-right text-white"
                          style={{ float:'right', fontSize: '12px' }}>{course.kategori}</div>
                  </div>
                  <div className="col-md-12 mt-md-2 mt-0 ">
                    <p className="text-bold fw-bold py-0 my-0 text-judul text-black line-clamp" style={{ cursor: 'pointer' }} >
                      {course.judul}
                    </p>
                  </div>
                  <div className="col-8 col-md-6 my-0">
                      <span style={{ fontSize:'12px' }}>
                        <i className="bi bi-flower1 text-warning"></i> &nbsp;
                        E-Cerfificate
                      </span> <br />
                      <span style={{ fontSize: '12px' }}>
                        <i className="bi bi-book text-warning"></i> &nbsp; 
                        Materi
                        <span className="d-none d-md-inline"> Pelatihan</span>
                      </span> <br />
                  </div>
                  <div className="col-4 d-block d-md-none">
                      <span  className="my-0 py-0">
                        <img src="http://localhost:8000/assets/img/icon/stars.png" className="my-0 py-0" width="100%" alt="" />
                      </span>
                      <span className="my-0 py-0">
                        <img src="http://localhost:8000/img/logo/logo-new.png" className="my-0 py-0" width="90%" alt="" />
                      </span>
                  </div>
                  <div className="col-6 d-none d-md-block">
                      <span style={{ fontSize:'12px', float: 'right' }} className="fw-bold">Online Learning</span><br />
                      <span style={{ fontSize:'12px', float: 'right' }} className="fw-bold">at 
                        &nbsp; <img src="http://localhost:8000/img/logo/logo-new.png" height="15" alt="" />
                      </span>
                  </div>
                  <div className="col-12 d-none d-md-block">
                      <hr />
                  </div>
                  <div className="col-md-6 py-0 my-0 d-none d-md-block">
                      <img src="http://localhost:8000/assets/img/icon/stars.png" className="" width="100" alt="" />
                      <b>Harga Mulai</b>
                  </div>
                  <div className="col-md-6">
                    <div className="row d-flex d-md-none">
                        <div className="col-6">
                            <span className="text-danger" style={{ fontSize:'12px' }}><s>500.000</s></span>
                        </div>
                        <div className="col-6">
                            <span style={{ fontSize:'12px' }}><b>250.000</b></span>
                        </div>
                    </div>
                    <div className="d-none d-md-block">
                        <span className="text-danger" style={{ fontSize:'12px', float: 'right' }}><s>500.000</s></span><br />
                        <span style={{ float:'right', marginTop:'-10px', fontSize:'20px' }}><b>100.000</b></span>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary w-100 mt-2">Daftar
                Sekarang</button>
              </div>
            </div>
          </Link>
        </div>
        ))
        ) : (
        <p>Tidak ada data yang tersedia.</p>
        )}
              
    </div>
  )
}
