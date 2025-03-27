import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import axios from "axios";
import { CYBER_TOKERN } from "../../api/config";
import { Link } from "react-router-dom";

export default function HomePage() {
  let [movies, setMovies] = useState([]);
  let fetchMovie = () => {
    axios({
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft: CYBER_TOKERN,
      },
    })
      .then((result) => {
        console.log("result:", result.data.content);
        //   setState => render lại layout => layout sử dụng state mới =>hiển thị danh sách phim
        setMovies(result.data.content);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
  let renderMovie = () => {
    return movies.map((movie, index) => {
      return (
        <div key={index} className="col-2">
          <img
            style={{ height: 302, objectFit: "cover" }}
            className="w-100"
            src={movie.hinhAnh}
            alt=""
          />
          <p>{movie.tenPhim}</p>
          <Link to={`/detail/${movie.maPhim}`} className="btn btn-danger">
            Detail
          </Link>
        </div>
      );
    });
  };

  useEffect(() => {
    console.log("useEffect HomePage");
    fetchMovie();
  }, []);
  //   nếu useEffect đi kèm với array [] => chỉ chạy 1 lần duy nhất
  return (
    <div>
      <div className="row">{renderMovie()}</div>
    </div>
  );
}

// tạo 1 page : quy định url , tạo 1 component
