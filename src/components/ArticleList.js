import React, { useEffect, useState } from 'react'
import View from "../components//View.js";
import ChangeColor from "../components//ChangeColor.js";
import Delete from './Delete.js';


export default function ArticleList({newArticlesArr, size, typeOfContent}) {

  const [content, setContent] = useState(null);
  const [articleArr, setArticleArr] = useState([]);


  const Change = (state, permission) => {
    switch(permission) {
      case false:
        setArticleArr(newArticlesArr);
        break;
        case true:
        setArticleArr(state);
          break;
      default:
            setArticleArr(newArticlesArr);
   }
  }

  useEffect(() => {
    Change()
  }, [newArticlesArr])

  useEffect(() => {
    renderContent()
  }, [articleArr])
  
  function renderContent() {
    switch(typeOfContent) {
      case "posts":
        setContent(articleArr.map(item => <div className={"greenCard" + ' ' + size} id={item.id}  key={item.id} >
        <h3 className="articleHeader">{item.title}</h3>
        <p className="text">{item.body}</p>
        <View title={item.title} body={item.body}/>
        <ChangeColor />
        <Delete id={item.id} typeOfContent={typeOfContent} updateData={Change}/>
        </div>))
      break;
      case "users":
        setContent(articleArr.map(item => <div className={"greenCard" + ' ' + size} id={item.id}  key={item.id} >
        <h3 className="articleHeader">{item.title}</h3>
        <p className="text">{item.email}</p>
        <p className="text">{item.phone}</p>
        <View title={item.title} body={item.body}/>
        <ChangeColor />
        </div>));
      break;
        case "photos":
          setContent(articleArr.map(item => <div className={"greenCard" + ' ' + size} id={item.id}  key={item.id} >
          <h3 className="articleHeader">{item.title}</h3>
          <img className="photos" src={item.body}></img>
          <View title={item.title} body={item.body}/>
          <ChangeColor />
          </div>));
        break;
      }
  }

  return (
    <>
    {content}
    </>
  )
}