import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './List.css'
const List = () => {
    const [list, setList] = useState([]); // Initialize with an empty array
console.log("list",list)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/customer-service/requests");
                setList(response.data); // Assume response.data is the array of items
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run once on mount
    const [selectedCategory, setSelectedCategory] = useState(''); // Selected category
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        if (category === '') {
            const fetchData = async () => {
                try {
                    const response = await axios.get("http://localhost:3000/customer-service/requests");
                    setList(response.data); // Assume response.data is the array of items
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
    
            fetchData();
            // setFilteredList(list); // Show all if no category is selected
        } else if(category) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/customer-service/requests?category=${category}`);
                    setList(response.data); // Assume response.data is the array of items
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
    
            fetchData();
            // setFilteredList(list.filter(item => item.category === category));
        }
    };
    return (
        <div>
            <h1>Customer Service Requests</h1>
            <div>
                <label htmlFor="categoryFilter">Filter by Category: </label>
                <select
                    id="categoryFilter"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                     <option value="">--select--</option>
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="mercedes">Mercedes</option>
<option value="audi">Audi</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>
                        User Name</th>
                        <th>
                        category</th>
                        <th>
                        comments</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 ? (
                        list.map((item, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.user_id}</td>
                                <td>{item.category}</td>
                                <td>{item.comments}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Loading...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default List;
