import React,{useRef} from 'react'

import './Success.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
function Success() {
  const pdfRef=useRef()
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
  return (
    <div>
    
    
    <div className="container">
      <div className="main"  ref={pdfRef}>
      <div className="row">
        <div className="col-xs-12">
          <div className="invoice-title">
            <h2 className='textCenter' style={{display:'flex',justifyContent:'center'}}>invoice</h2>
            <div className="body">
            <h3 className="pull-right">TenentId:12345</h3>
            <h3 className="date" style={{display:'flex',justifyContent:'flex-end',fontSize:'17px'}}>Date:12345</h3>
          
          <hr />
          <div className="row">
            <div className="col-xs-6">
              <address>
                <strong>Tenent Name:</strong>
                <br />
                Sample
               
              </address>
            </div>
            <div className="col-xs-6 text-right">
              <address>
                <strong>Address:</strong>
                <br />
                Jane Smith
                <br />
                1234 Main
                <br />
                Apt. 4B
                <br />
                Springfield, ST 54321
              </address>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <address>
                <strong>Region:</strong>
                <br />
                Visa ending **** 4242
                <br />
                jsmith@email.com
              </address>
            </div>
            <div className="col-xs-6 text-right">
              
              <address>
                <strong>Country:</strong>
                <br />
                Sample Country
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
                      <td>5555</td>
                      <td className="text-center">sample</td>
                      <td className="text-center">23-11-23</td>
                      <td className="text-center">18-11-24</td>
                      <td className="text-center">100/-AED</td>
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
