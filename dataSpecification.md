# Mona reactjs test

Cho API: [https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a](https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a)

## API Data specification:

| Key             | Descriptions                   | Type                  | Example value       |
| --------------- | ------------------------------ | --------------------- | ------------------- |
| AirlineCode     | Hãng vận chuyển                | string                | VJ                  |
| Duration        | Thời gian bay                  | int                   | 60                  |
| Stops           | Số điểm dừng                   | int                   | 0                   |
| FlightNumber    | Số hiệu chuyến bay             | string                | VJ206               |
| FlightId        | Id chuyến bay                  | int                   | 1                   |
| SessionId       | Id phiên tìm kiếm              | int                   | 1                   |
| FeeAdult        | Phí người lớn                  | int                   | 336000              |
| PriceAdult      | Giá vé người lớn               | int                   | 187000              |
| TaxAdult        | Thuế người lớn                 | int                   | 187000              |
| FeeChild        | Phí trẻ em                     | int                   | 0                   |
| PriceChild      | Giá vé trẻ em                  | int                   | 0                   |
| TaxChild        | Thuế trẻ em                    | int                   | 0                   |
| FeeInfant       | Phí em bé                      | int                   | 0                   |
| PriceInfant     | Giá em bé                      | int                   | 0                   |
| TaxInfant       | Thuế em bé                     | int                   | 0                   |
| Plane           | Máy bay                        | string                | 321                 |
| Carryon         | Hành lý xách tay miễn phí      | string                | 7KG                 |
| Freebag         | Hành lý ký gửi miễn phí        | string                | 30KG                |
| FareClass       | Hạng chỗ                       | string                | Y_SBoss             |
| GroupClass      | Group hạng đặt chỗ             | string                | SkyBoss             |
| Promo           | Hạng khuyến mại                | bool                  | false               |
| HasChangedClass | Cho phép đổi hạng vé           | bool                  | false               |
| ReturnFlight    | Chuyến bay một chiều / khứ hồi | bool                  | false               |
| StartDate       | Ngày, giờ khởi hành            | string                | 2018-06-27T06:50:00 |
| EndDate         | Ngày, giờ hạ cánh              | string                | 2018-06-27T07:50:00 |
| RelatedFlights  | Danh sách chặng bay            | RelatedFlightResult[] |

## RelatedFlightResult sepcification:

| Key          | Descriptions              | Type   | Example value        |
| ------------ | ------------------------- | ------ | -------------------- |
| SeatClass    | Hạng đặt chỗ              | string | 60                   |
| Duration     | Thời gian bay             | int    | 60                   |
| FlightNumber | Số hiệu chuyến bay        | string | VJ206                |
| StartPoint   | Mã sân bay khởi hành      | string | SGN                  |
| EndPoint     | Mã sân bay đến            | string | HAN                  |
| Plane        | Loại máy bay              | string | Airbus Sharklet A320 |
| StartDate    | Ngày, giờ khởi hành       | string | 2018-06-27T06:50:00  |
| EndDate      | Ngày, giờ hạ cánh         | string | 2018-06-27T07:50:00  |
| Carryon      | Hành lý xách tay miễn phí | string | 7KG                  |
| Freebag      | Hành lý ký gửi miễn phí   | string | 30KG                 |

## Use the API above for implement reactjs app follow this UI design

Design: [https://www.figma.com/file/LGDKnsUrCPFNjHkvoUbVVf/baycungban-TEST?node-id=0%3A1](https://www.figma.com/file/LGDKnsUrCPFNjHkvoUbVVf/baycungban-TEST?node-id=0%3A1)

## Library requiment

- Reactjs
- Axios
- tailwindcss

  **Optional React Framework:**

  - [NextJs](https://nextjs.org/)
