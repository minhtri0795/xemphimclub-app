import React from "react";
import "./Footer.scss";
import footerImage from "../../images/footer-bg.jpg";
function Footer() {
  return (
    <footer style={{ backgroundImage: `url(${footerImage})` }}>
      <div className="container">
        <h3 className="footer-title">
          Phim chất lượng cao online của <a href="">XemPhim</a> khác gì so với
          các trang phim khác?
        </h3>
        <ul>
          <li>
            Là phim bluray (reencoded), có độ phân giải thấp nhất là Full HD
            (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân
            giải HD (720p) là cao nhất
          </li>
          <li>
            Chất lượng cao, lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần
            phim online thông thường - đây là yếu tố quyết định độ nét của phim
            (thậm chí còn quan trọng hơn độ phân giải)
          </li>
          <li>
            Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang
            phim khác (kể cả Youtube)
          </li>
          <li>
            Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải
            cao
          </li>
          <li>
            Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề
            của riêng mình để xem online
          </li>
          <li>
            Có lựa chọn hiện phụ đề song ngữ (tức hiện đồng thời cả tiếng Anh &
            tiếng Việt), phù hợp với những người muốn học tiếng Anh qua phụ đề
            phim
          </li>
        </ul>
        <div className="footer-contact">
          <a href="#">Liên hệ</a>
          <a className="layout_facebook" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
            </svg>
            XemPhim.Official
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
