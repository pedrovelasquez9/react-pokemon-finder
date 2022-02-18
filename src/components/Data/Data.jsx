import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Data.css";
import slice from "../../store/Reducer";
import { fetchData } from "../../services/dataService";
import ListItem from "../ListItem/ListItem";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Data = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("STATE", state);
  const fetchInitialData = async () => {
    try {
      const jsonData = await fetchData();
      const data = jsonData.results;
      dispatch(slice.actions.ADD_DATA(data));
    } catch (error) {
      dispatch(slice.actions.SET_ERROR(error));
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  let data = <Loading message="Cargando..."></Loading>;

  if (state.error) {
    data = (
      <ErrorMessage
        message="Ha ocurrido un error llamando a la API"
        error={state.error}
      ></ErrorMessage>
    );
  }

  if (!state.error && state.data) {
    data = state.data.map((item, index) => {
      return <ListItem key={index} value={item}></ListItem>;
    });
  }

  return <ul className="main-ul">{data}</ul>;
};

export default Data;
