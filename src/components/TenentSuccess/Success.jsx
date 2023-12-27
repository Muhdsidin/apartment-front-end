import React,{useEffect, useMemo, useRef, useState} from 'react'

import './Success.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useParams } from 'react-router-dom';
import axios from "axios"
function Success() {
  const pdfRef = useRef();
  const {id} = useParams()
  const [data, setData] = useState({})
  const [room , setRoom] = useState({})
  const [currentDate, setCurrentDate] = useState('');
  console.log(id)
  useEffect(() => {
   
    const getCurrentDate = () => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const today = new Date();
      const formattedDate = today.toLocaleDateString(undefined, options);
      setCurrentDate(formattedDate);
    };


    getCurrentDate();

   
    const intervalId = setInterval(() => {
      getCurrentDate();
    }, 1000 * 60 * 60 * 24);

   
    return () => clearInterval(intervalId);
  }, []);



  const getData = async ()=>{
    const response = await axios("https://apartment-one.vercel.app/get-specific-tannent",{
      method:"GET",
      headers:{
        id:id
      }
    })
    console.log(response.data)
    setData(response.data)
  }



  const getDetails =async()=>{
    const response = await axios("https://apartment-one.vercel.app/get-active-room",{
      method:"GET",
      headers:{
        roomid: data.roomNo
      }
    })
    console.log(response.data)
    setRoom(response.data)
   
  }




  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf');
    });
  };



  useEffect(async()=>{
   getData()
   
  },[])
  useMemo(()=>{
    getDetails()
  },[data])

  console.log(room)
  return (
    <div>
    
    
    <div className="container">
      <div className="main"  ref={pdfRef}>
      <div className="row">
        <div className="col-xs-12">
          <div className="invoice-title">
            <h2 className='textCenter' style={{display:'flex',justifyContent:'center'}}>invoice</h2>
            <div className="body">
            <h3 className="pull-right">TenentId:{data.id}</h3>
            <h3 className="date" style={{display:'flex',justifyContent:'flex-end',fontSize:'17px'}}>Date:{currentDate}</h3>
          
          <hr />
          <div className="row">
            <div className="col-xs-6">
              <address>
                <strong>Tenent Name:</strong>
                <br />
               {data.name}
               
              </address>
            </div>
            <div className="col-xs-6 text-right">
              <address>
                <strong>Address:</strong>
                <br />
                {data.address}
                <br />
               
                
              </address>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <address>
                <strong>Region:{data.region}</strong>
                <br />
               
                
              
              </address>
            </div>
            <div className="col-xs-6 text-right">
              
              <address>
                <strong>Country:</strong>
                <br />
               {data.country}
                <br />
                <br />
              </address>
              <address>
                <strong>Id Proof:</strong>
                <br />
                <div className="img">
                  <img src="" alt="" />
                </div>
                <br />
                <br />
              </address>
            </div>
          </div>
        
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <strong className='order-summary' >Booking Details</strong>
              </h3>
            </div>
            </div>
            </div>
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-condensed">
                  <thead>
                    <tr>
                      <td>
                        <strong>Room No</strong>
                      </td>
                      <td className="text-center">
                        <strong>Building</strong>
                      </td>
                      <td className="text-center">
                        <strong>From</strong>
                      </td>
                      <td className="text-center">
                        <strong>To</strong>
                      </td>
                      <td className="text-center">
                        <strong>Price</strong>
                      </td>
                      <td className="text-right">
                        <strong>Total</strong>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                     
                    </tr>
                    <tr>
                      
                    </tr>
                    <tr>
                      <td>{data.roomNo}</td>
                      <td className="text-center"></td>
                      <td className="text-center">{data.from}</td>
                      <td className="text-center">{data.to}</td>
                      <td className="text-center">{room.prize}</td>
                      <td className="text-right">1000/-AED</td>
                    </tr>
                    
                    
                   
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <button className='btn-dowload' onClick={downloadPDF}>Dowload</button>
    <br />
    <br />
      </div>
      <br />
     
      
      

    
    </div>
  )
}

export default Success
