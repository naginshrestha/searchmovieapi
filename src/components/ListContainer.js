import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import CustomCard from "./CustomCard";

export const ListContainer = ({ movieList, removeMovie }) => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    setDisplay(movieList);
  }, [setDisplay, movieList]);

  const filterMove = (type) => {
    if (type === "all") {
      setDisplay(movieList);
      return;
    }

    const filterMovie = movieList.filter((item) => item.type === type);
    setDisplay(filterMovie);
  };

  return (
    <div className="movie-list mt-5">
      <div className="mb-3">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary" onClick={() => filterMove("all")}>
            All
          </Button>
          <Button variant="warning" onClick={() => filterMove("awesome")}>
            Awesome
          </Button>
          <Button variant="danger" onClick={() => filterMove("boring")}>
            Boring
          </Button>
        </ButtonGroup>
      </div>
      <div>{display.length} Movies found!</div>
      <hr />
      <div className="list d-flex flex-wrap justify-content-around  gap-2">
        {display.map((item, i) => (
          <CustomCard key={i} movie={item} removeDisplay={removeMovie} />
        ))}
      </div>
    </div>
  );
};
