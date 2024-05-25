import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import { useDispatch } from "react-redux";
import { fetchNotes } from "../../apis/notes";
import { setNotes } from "../../redux/slice/noteSlice";
const HomeRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNotes()
      .then((res) => {
        console.log(res)
        const {notes} = res;
        dispatch(setNotes(notes));
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default HomeRouter;
