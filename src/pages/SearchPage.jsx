import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { BiSearch, BiNews, BiImage } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { FiMoreVertical } from "react-icons/fi";
// import { response } from "./response";
import DOMPurify from "dompurify";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);

  //   console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <h1 className="zearch">ZEARCH</h1>
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <BiSearch className="icons" />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <BiNews className="icons" />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <BiImage className="icons" />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <AiOutlineShoppingCart className="icons" />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <SiGooglemaps className="icons" />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <FiMoreVertical className="icons" />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div
              className="searchPage__result"
              key={Math.floor(Math.random() * 1000000 + 1)}
            >
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p
                className="searchPage__resultSnippet"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.htmlSnippet),
                }}
              ></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
