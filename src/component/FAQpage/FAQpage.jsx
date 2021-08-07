import React from "react";
import "./FAQpage.scss";
function FAQpage() {
  return (
    <div className="faq-section">
      <div className="container">
        <h1 className="faq-title">Câu hỏi thường gặp</h1>
        <div className="content">
          <h3>
            1. Xem phim bị chậm, mặc dù đã kích hoạt VIP Mode cho phim đó?
          </h3>
          <p>
            Nếu phim chạy nhưng cứ một đoạn lại bị dừng để chờ load tiếp (dù đã
            thử chọn các server khác nhau), cần xác định do thiết bị hay do mạng
            của bạn.
          </p>
          <ul>
            <li>
              Hãy thử xem phim trên một thiết bị khác (máy tính / điện thoại /
              TV...). Phần lớn mọi người khi đổi sang thiết bị khác thì phim lại
              chạy mượt {"=>"} vậy là do thiết bị cũ của bạn. Nếu đó là TV, hãy
              kiểm tra thiết lập TV và tắt giao thức kết nối mạng IPv6. Nếu đó
              là một thiết bị chạy iOS, thì hãy thử dùng một trình duyệt khác
              (chẳng hạn Chrome) thay vì trình duyệt Safari mặc định, nhưng nói
              chung player trên iOS rất hay có vấn đề với phim bitrate cao + âm
              thanh 5.1.
            </li>
            <li>
              Nếu phim chạy chậm trên tất cả các thiết bị mà bạn thử, với tất cả
              các server, thì đó là do nhà mạng của bạn đã bóp{" "}
              <b>băng thông đường truyền quốc tế</b>. Có 2 cách giải quyết: 1.
              Gọi điện phản ánh với nhà mạng; 2. Sử dụng một VPN (mạng riêng ảo)
              để tăng tốc độ cho mạng của bạn. Chúng tôi{" "}
              <b>đề xuất bạn dùng ứng dụng WARP </b>
              {"=>"} <a href="https://1.1.1.1/">download tại đây.</a>
            </li>
          </ul>
          <h3>
            2. Gặp vấn đề về âm thanh: phim không có tiếng, mất tiếng nhân vật,
            hoặc âm thanh bị rè?
          </h3>
          <ul>
            <li>
              Nếu xem trên điện thoại: Lỗi âm thanh là do trình duyệt của bạn
              (thường là Chrome). Hãy thử dùng trình duyệt mặc định trên điện
              thoại của bạn, hoặc cài {"&"} dùng{" "}
              <a href="https://play.google.com/store/apps/details?id=com.cloudmosa.puffinFree&hl=en&gl=US">
                trình duyệt Puffin!
              </a>
            </li>
            <li>
              Nếu bạn xem trên PC: Khác với phim / clip trên các web khác (kể cả
              Youtube), phim trên XemPhim sử dụng âm thanh 5.1 (6 channel) thay
              vì âm thanh stereo (2 channel). Nếu thiết bị bạn xem chỉ có 2 loa,
              bạn cần thiết lập chương trình quản lý âm thanh trên thiết bị cho
              đúng: chọn đúng chế độ với số loa mình có (stereo), đừng chọn
              nhiều hơn, nếu không thiết bị của bạn sẽ cố gắng xuất âm thanh ra
              những loa không tồn tại{" =>"} mất tiếng. Ví dụ đây là phần chọn
              các chế độ âm thanh của Realtek HD Audio Manager:{" "}
              <a href="https://imgur.com/a/D6nPGcl">click vào đây.</a>
            </li>
          </ul>
          <h3>3. Làm sao để xem phim trên TV?</h3>
          <p style={{ marginBottom: "16px" }}>
            Để xem phim trên TV, TV bạn phải có trình duyệt web. Hầu hết các
            loại Smart TV những năm gần đây đều có cài sẵn trình duyệt. Nếu TV
            bạn không có sẵn trình duyệt, bạn có thể cài trình duyệt từ cửa hàng
            ứng dụng (Google Play Store / CH Play / App Store) trên TV. Với TV
            Android, bạn nên cài trình duyệt Puffin.
          </p>
          <p>
            Sau khi cài trình duyệt, truy cập trang web như bạn vẫn làm trên máy
            tính / điện thoại và xem phim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQpage;
