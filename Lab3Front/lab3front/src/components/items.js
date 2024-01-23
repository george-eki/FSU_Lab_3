import { useEffect, useState } from "react";

function Items() {
    const [items, setitems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5069/api/Items')
        .then((response) => response.json())
        .then((actualData) => {
            console.log(actualData)
            setitems(actualData)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
  return (
    <div>
     <h1 className="header">My Storefront Items</h1>
        <table className="center">
          <tbody>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </tbody>
      
        {items.map((item) => { return (
          <tr>
            <td >{item.title}</td>
            <td >{item.price}</td>
            <td >{item.description}</td>
            </tr>
          )})}
      
      </table>
    </div>
  );
}

export default Items;
