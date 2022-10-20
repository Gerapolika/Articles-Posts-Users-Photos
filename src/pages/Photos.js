import React, {useState, useEffect} from "react";
import axios from 'axios';
import View from "../components//View.js";
import ChangeColor from "../components//ChangeColor.js";
import AddArticle from "../components/AddArticle.js";
import ArticleList from "../components/ArticleList.js";


const Photos = () => {
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
             const result = await axios("https://jsonplaceholder.typicode.com/photos");
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
          <h3 className="articleHeader">{post.title}</h3>
          <img className="photos" src={post.url} />
          <View title={post.title} content={
            <img className="photos" src={post.url} />
         }/>
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
        <AddArticle updateData={handleTitleChange}  typeOfContent="photos"
            content ={
                <textarea className="addModal-content" placeholder="Your img Url" ></textarea>
            }
        />
        </div>
        </div>
        <div className="articles">
        {article}
        <ArticleList newArticlesArr={newArticlesArr} size={size} typeOfContent="photos"/>
        </div>
        <button className="button" onClick={() =>{
             setButtonClicked(buttonClicked + numberOfCards)
            }}>Show more</button>

        </>
    )
}

export default Photos