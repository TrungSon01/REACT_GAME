import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CYBER_TOKERN } from "../../api/config";

export default function DetailPage() {
  // dùng hook useParams để lấy tham số từ url

  let params = useParams();
  let { idMovie } = params;
  console.log("params:", params);
  let [detail, setDetail] = useState({});
  console.log("detail:", detail);

  let fetchDetail = () => {
    axios({
      url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`,
      method: "GET",
      headers: {
        TokenCybersoft: CYBER_TOKERN,
      },
    })
      .then(function (res) {
        // cập nhật state => re-render
        setDetail(res.data.content);
        console.log("🚀 ~ res:", res);
      })
      .catch(function (err) {
        console.log("🚀 ~ err:", err);
      });
  };
  useEffect(() => {
    // dùng hook useEffect để gọi api lấy chi tiết phim khi component được render
    fetchDetail();
  }, []);
  return (
    <div className="container">
      <img src={detail.hinhAnh} alt="" className="w-25" />
      <p>{detail.tenPhim}</p>
      <p>{detail.moTa}</p>
    </div>
  );
}
