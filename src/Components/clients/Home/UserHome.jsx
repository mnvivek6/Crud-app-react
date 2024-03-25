import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userAxios from "../../../Axios/userAxios.js";
import Card from "../ProductCard/Card.jsx";

function UserHome() {
    const [name, setName] = useState("");
    const [products,setProducts] = useState([])
    const token = useSelector((store) => store.Client.Token);

    useEffect(()=>{
        userAxios.get('/api/items').then((response)=>{
             
             setProducts([...response.data])
        })   .catch((error)=>{
           console.log(error);
        })
},[])
console.log(products,'got here');

    return (
        <div>
            <div className="p-3">
                <div className="m-5">
                    <div className="d-flex justify-content-center p-3">{name ? <b>Welcome {name}</b> : ""}</div>
                    <div className="d-flex justify-content-center">
                        {/* <img
                            src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/05/spider-man-across-the-spider-verse-poster.jpg"
                            alt="...."
                        /> */}
                           <Card products={products} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserHome;
