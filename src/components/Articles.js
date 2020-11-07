import { render } from "enzyme";
import React, { useEffect, useState } from "react";

class  Articles extends React.Component {
    
  render(){
      
    return (
        <div className="card w-50 mx-auto">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Upvotes</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.props.articles.sort(this.props.order).map((ele) => {
                return (
                  <tr data-testid="article" key="article-index">
                    <td data-testid="article-title">{ele.title}</td>
                    <td data-testid="article-upvotes">{ele.upvotes}</td>
                    <td data-testid="article-date">{ele.date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
  }
  
}

export default Articles;
