import React, {useState, useEffect} from "react";
import axios from 'axios';
import View from "../components//View.js";
import ChangeColor from "../components//ChangeColor.js";
import AddArticle from "../components/AddArticle.js";
import ArticleList from "../components/ArticleList.js";

const Users = () => {
    const [buttonClicked, setButtonClicked] = useState(3);
    const [hidden, setHidden] = useState('')
    const [size, setSize] = useState('smallCard')
    const [numberOfCards, setNumberOfCards] = useState(3);
    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);

    const [newArticlesArr, setNewArticlesArr] = useState([])   

    const handleTitleChange = (state) => {
        setNewArticlesArr(state)
       }
    
 
     useEffect(() => {
         const fetchData = async () => {
             const result = await axios("https://jsonplaceholder.typicode.com/users");
             if (result.data) {
                 setArticles(result.data);
             } else {
                fetchData();
             }
         };
         fetchData();
     }, []);    
     
     useEffect(() => {
     setArticle(
          articles.filter(item => item.id <= buttonClicked).map((post) => 
          <div className={"greenCard" + ' ' + size} id={post.id}  key={post.id}>
          <h3 className="articleHeader">{post.name}</h3>
          <p className="text">{post.email}</p>
          <p className="text">{post.phone}</p>
          <View title={post.name} content={
            <>
                       <div className="modal-content">{post.email}</div>
                       <div className="modal-content">{post.phone}</div>
                    </>
          }
           />
          <ChangeColor />
          </div> 
       )
     )
     }, [articles, buttonClicked, size])
 
    return (
        <>
        <div className="head">
        <h1 className="articleList">Article List</h1>
        <div>
        <button className="button" onClick={() => {
            size === "smallCard" ? setSize("bigCard") : setSize("smallCard")
            numberOfCards === 3 ? setNumberOfCards(2) : setNumberOfCards(3)
        }}>Make big cards</button>
        <AddArticle updateData={handleTitleChange} typeOfContent="users"
                content ={
                    <>
                      <textarea className="addModal-content" placeholder="Your email" ></textarea>
                      <textarea className="addModal-content" placeholder="Your phone" ></textarea>
                    </>
                }
        />
        </div>
        </div>
        
        <div className="articles">
        {article}
        <ArticleList newArticlesArr={newArticlesArr} size={size} typeOfContent="users"/>
        </div>
        <button className="button" onClick={() =>{
             setButtonClicked(buttonClicked + numberOfCards)
            }}>Show more</button>

        </>
    )
}

export default Users