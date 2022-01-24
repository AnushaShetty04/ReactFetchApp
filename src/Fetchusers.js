import React from 'react';
import axios from "axios";
import {Container ,Row, Col} from "react-bootstrap";
import './Fetchusers.css';
import Loader from  './Loader.js';



const Fetchusers = () => {

    const [post, setPost] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    // React.useEffect(() => {
    //     setLoading(true);
    //     axios.get(baseURL).then((response) => {
    //       setPost(response.data.data);
    //       setLoading(false);   
    //       console.log(response.data)
    //     });
    //   }, []);

    const handleClick = (e) => {
      const myTimeout = setTimeout( setLoading(true), 5000);
      e.preventDefault();
      //setLoading(true);
      const baseUrl= `https://reqres.in/api/users?page=1`;
      axios.get(baseUrl).then((response) => {
      setPost(response.data.data);   
      setLoading(false);    
      console.log(response.data);
     });

   }

  //  const timeout = setTimeout((e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const baseUrl= `https://reqres.in/api/users?page=1`;
  //   axios.get(baseUrl).then((response) => {
  //   setPost(response.data.data);   
  //   setLoading(false);    
  //   console.log(response.data);
  //   });
  //  },2000);


    return(
      <div>
        {/* <nav class="navbar navbar-light" style={{backgroundcolor: 'pink'}}> */}
        <nav class="navbar navbar-dark bg-dark">
         <div class="container-fluid">
         <a class="navbar-brand">HelloWeb</a>
         <form class="d-flex">
           <button class="btn btn-outline-success" onClick={handleClick} type="submit">GET USERS</button>
         </form>
         </div>
        </nav>
        <Container>
                <Row>
                  { 
                     loading ?<Loader/> : 
                     post && post.length > 0 ? post.map((ele, i) => 
                      <Col sm={3} key = {'product-'+i}>
                      <br/>
                      <br/>
                      <div class="card border-secondary mb-3" style={{width: "18rem"}}>
                         <img class="card-img-top" style={{height:"250px"}} src={ele.avatar} alt="Card image cap"/>
                         <div class="card-img-overlay d-flex justify-content-end">
                          <a href="#" class="card-link text-danger like">
                          </a>
                        </div>
                         <div class="card-body border-warning bg-pink mb3">
                          <h5 class="card-title">{ele.first_name + " " }{ ele.last_name}</h5>
                          <h5 class="card-title">{ele.email}</h5>
                          <div class="buy d-flex justify-content-between align-items-center">
                         </div>
                         </div>
                      </div>
                      </Col>
                     ): <div class="d-flex justify-content-center" id="load">
                     <div class="spinner-border" role="status">
                       <span class="visually-hidden">Loading...</span>
                     </div>
                   </div>

                         
                  }    
              </Row>
                   
            </Container>
      </div>
    )
}

export default Fetchusers;