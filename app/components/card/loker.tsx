"use client"
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'; // Import date-fns
import Image from 'next/image';

export default function LokerComponent() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const [lokers, setLokers] = useState<Loker[]>([])
    interface Loker {
        formattedDate: string;
        bagian: string;
        media: any
        original_url: any
        perusahaan: string
        jurusan: string
        lokasi: string
        jenis: string
    }

    useEffect(()=> {
        fetch(`${apiUrl}/api/loker`)
        .then((response) => response.json())
        .then((data) => {
            const formattedLokers = data.data_loker.data.map((loker: any) => {
                const formattedDate = format(new Date(loker.tgl_berakhir ), 'dd MMMM yyyy');
                return { ...loker, formattedDate };
            })
            setLokers(formattedLokers);
        })
        .catch((er) => {
          console.log('Err mengambil data', er)  
        });
    }, [apiUrl])

  return (
    <div className="row">
        {lokers.length > 0 ? (
            lokers.map((loker, index) => (
                <div key={index} className="col-md-6 my-2">
                    <div className="card p-3">
                        <div className="row">
                            <div className="col-3">
                                <Image src={loker.media[0].original_url} className="w-100 gambarcard rounded crop ratio ratio-16x9" style={{ objectFit: 'cover' }} alt=''/>
                            </div>
                            <div className="col-7">
                                <h5 className="text-primary fw-bold mt-2 md-mt-0">{loker.bagian}</h5>
                                <h3 className="fw-bold">{loker.perusahaan}</h3> 
                            </div>
                            <div className="col-md-2">
                                <div className="row d-flex d-md-none" style={{ fontSize: '12px' }}>
                                    <div className="col-6 col-md-3">
                                        <i className="bi bi-mortarboard text-primary"></i> &nbsp; {loker.jurusan} 
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <i className="bi bi-pin-map text-primary"></i> &nbsp; {loker.lokasi}
                                    </div>
                                    
                                    <div className="col-6 col-md-3">
                                        <i className="bi bi-clock text-primary"></i> &nbsp; {loker.jenis}
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <i className="bi bi-check-circle-fill text-primary"></i> &nbsp; Activated
                                    </div>
                                </div>
                                <a href="{{ route('user.loker.show', $item->slug) }}" className="btn btn-primary mt-2 w-100">
                                    <i className="bi bi-telegram"></i> Detail
                                </a>
                            </div>
                            <div className="col-12">
                                <div className="row d-none d-md-flex mt-2" style={{ fontSize: '14px' }}>
                                    <div className="col-12">
                                        <hr className="mt-0" />
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <i className="bi bi-mortarboard text-primary"></i> &nbsp; {loker.jurusan} 
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <i className="bi bi-pin-map text-primary"></i> &nbsp; {loker.lokasi}
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <i className="bi bi-clock text-primary"></i> &nbsp; {loker.jenis}
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <i className="bi bi-check-circle-fill text-primary"></i> &nbsp; Activated
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <p>Tidak ada data yang tersedia.</p>
        )}
        
    </div>
  )
}
