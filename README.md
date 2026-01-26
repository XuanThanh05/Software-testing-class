# Software-testing-class
## CHƯƠNG 1: Bài tập kiểm thử giao diện phần mềm trên trang web [Can't Unsee](https://cantunsee.space/)
<img width="1916" height="1076" alt="image" src="https://github.com/user-attachments/assets/95e0bc0b-13fb-447a-b7bf-4f6a9bd8bcf8" />

## CHƯƠNG 2: Bài tập thực hành kiểm thử với JUnit

#### 1. Mục tiêu
- Viết kiểm thử đơn vị bằng JUnit 5
- Áp dụng Maven trong quản lý project Java
- Thực hành quy trình làm việc với GitHub Issues và Commit

#### 2. Mô tả bài toán
Chương trình phân tích điểm số học sinh với các chức năng:
- Đếm số học sinh đạt loại Giỏi (điểm >= 8.0)
- Tính điểm trung bình của các điểm hợp lệ (từ 0 đến 10)

Các điểm không hợp lệ (<0 hoặc >10) sẽ bị bỏ qua.

#### 3. Công nghệ sử dụng
- Java 21
- Maven
- JUnit 5
- Visual Code IDE

#### 4. Cấu trúc thư mục
```
unit_test/
├── src/
│ └── main/java/com/mycompany/unit_test
│     └── StudentAnalyzer.java
│ └── test/java/com/mycompany/unit_test
│     └── StudentAnalyzerTest.java
├── pom.xml
└── README.md
```

#### 5. Cách chạy kiểm thử đơn vị
Vào đúng thư mục ...\Software-testing-class\unit_test> trong terminal nhập: mvn test
#### 6. Các phương pháp kiểm thử hộp đen
##### 6.1 LỚP TƯƠNG ĐƯƠNG
```
Các lớp tương đương cần có
-) Với danh sách
L1	null	
L2	rỗng	
L3	có phần tử	
-) Với giá trị điểm
V1	0 ≤ score ≤ 10	✅
V2	score < 0	✅
V3	score > 10	✅
V4	score == null	✅
```
##### 6.2 KIỂM TRA BIÊN 
-) Các biên quan trọng
```
Biên miền hợp lệ: 0.0, 10.0
Biên phân loại xuất sắc: 8.0
```
-) Biên	:
```
0.0	✅
10.0	✅
8.0 (tại biên)	❌
sát biên dưới 8.0	✅ (7.9)
sát biên trên 8.0	✅ (8.1)
```
##### 6.3 BẢNG QUYẾT ĐỊNH
```
R1 (null list)	✅	Đã có
R2 (empty list)	✅	Đã có
R3 (null score)	✅	Đã có
R4 (<0)	✅	Đã có
R5 (0–8)	✅	Đã có
R6 (8–10)	✅	Đã có
R7 (>10)	✅	Đã có
R8 (không điểm hợp lệ)	✅	Đã có
```
#### 7. Các phương pháp kiểm thử hộp trắng
##### 7.1 Kiểm thử hộp trắng theo Statement Coverage
Mục tiêu: Mỗi câu lệnh trong chương trình phải được thực thi ít nhất một lần
```
| Câu lệnh               | Được thực thi? | Test nào                               |
| ---------------------- | -------------- | -------------------------------------- |
| `scores == null`       | ✅              | `testNullList`                         |
| `scores.isEmpty()`     | ✅              | `testCountExcellentStudents_EmptyList` |
| `score == null`        | ✅              | `testListWithNullElement`              |
| `score < 0`            | ✅              | `-1.0`                                 |
| `score > 10`           | ✅              | `11.0`, `10.1`                         |
| `score >= 8`           | ✅              | `8.1`, `9.0`, `10.0`                   |
| `count == 0`           | ✅              | `testNoValidScoresForAverage`          |
```
##### 7.2 Kiểm thử hộp trắng theo Branch Coverage
Với countExcellentStudents: 
| Điều kiện        | Nhánh TRUE | Nhánh FALSE | Có test? | 
| ---------------- | ---------- | ----------- | -------- | 
| `scores == null` | ✅          | ✅        | Đủ       | 
| `score == null`  | ✅          | ✅        | Đủ       |  
| `score < 0`      | ✅          | ✅        | Đủ       |  
| `score >= 8`     | ✅          | ✅        | Đủ       | 

Với calculateValidAverage:
| Điều kiện          | TRUE | FALSE | Có test? |
| ------------------ | ---- | ----- | -------- |
| `scores == null`   | ✅   | ✅   | Đủ       |
| `scores.isEmpty()` | ✅   | ❌   | ❌       |
| `count == 0`       | ✅   | ✅   | Đủ       |

```
📌 Thiếu nhẹ: chưa có test list không rỗng nhưng không null để đi nhánh scores.isEmpty() == false
👉 Nhưng trên thực tế test NormalList đã cover nhánh này
➡️ Branch coverage vẫn đạt
```
##### 7.3 Đánh giá theo Cyclomatic Complexity
-) Công thức
M = số quyết định + 1
```
countExcellentStudents:
if scores == null → 1
if score == null → 1
if score < 0 || score > 10 → 1
if score >= 8 → 1
```
```
👉 M = 5
➡️ Cần ít nhất 5 test case độc lập, hiện tại: > 5 test → đạt.
```
##### 7.4 Kiểm thử hộp trắng theo Path Coverage
Các path chính của hàm countExcellentStudents:
| Path | Mô tả                      | Test                      |
| ---- | -------------------------- | ------------------------- |
| P1   | List null → return         | `testNullList`            |
| P2   | List rỗng → return 0       | `testEmptyList`           |
| P3   | Score null → continue      | `testListWithNullElement` |
| P4   | Score < 0 / >10 → continue | `NormalList     `         |
| P5   | Score hợp lệ < 8           | `7.9`, `7.5`              |
| P6   | Score ≥ 8 → count++        | `8.1`, `9.0`              |
Các path chính của hàm calculateValidAverage: 
| Path | Mô tả                     | Test                          |
| ---- | ------------------------- | ----------------------------- |
| P1   | List null                 | `testNullList`                |
| P2   | List rỗng                 | `testEmptyList`               |
| P3   | List có điểm hợp lệ       | NormalList                    |
| P4   | List không có điểm hợp lệ | `testNoValidScoresForAverage` |

Path coverage 100% tuyệt đối là bất khả thi (do vòng lặp) → đã đạt path coverage thực tế (practical path coverage).

#### 8. Các lỗi khác
##### 8.1 Không giới hạn số phần tử của List. ❌
##### 8.2 Nhóm lỗi về kiểu dữ liệu Double. ❌
```
-) Không xử lý NaN (Not a Number)
Gợi ý: Nếu là Nan thì tiếp tục
if (score.isNaN()) continue;
-) Không xử lý Infinity / -Infinity
Gợi ý: Nếu Infinity thì tiếp tục
if (score.isInfinite()) continue;
```

## CHƯƠNG 3: Bài tập thực hành kiểm thử tự động End-to-End với Cypress
#### 1. Mục tiêu

Thực hành kiểm thử tự động End-to-End (E2E) cho website https://www.saucedemo.com
 bằng công cụ Cypress, nhằm kiểm tra các chức năng cơ bản như đăng nhập, giỏ hàng và thanh toán.

#### 2. Công cụ và môi trường

Node.js (phiên bản 14 trở lên)

Visual Studio Code

Cypress

Website kiểm thử: https://www.saucedemo.com

#### 3. Cài đặt Cypress

Thực hiện các lệnh sau trong terminal:
```
mkdir cypress-exercise
cd cypress-exercise
npm init -y
npm install cypress --save-dev
npx cypress open
```
#### 4. Cấu trúc thư mục
```
cypress-exercise/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js
│   │   ├── cart_spec.cy.js
│   │   └── checkout_spec.cy.js
│   ├── fixtures/
│   └── support/
├── node_modules/
├── cypress.config.js
├── package.json
└── README.md
```
#### 5. Các kịch bản kiểm thử

Kiểm tra đăng nhập thành công

Kiểm tra đăng nhập thất bại

Kiểm tra thêm và xóa sản phẩm khỏi giỏ hàng

Kiểm tra sắp xếp sản phẩm theo giá (thấp → cao)

Kiểm tra quy trình thanh toán (Checkout)

#### 6. Cách thực hiện
Tạo và cài đặt cypress ở phía trên, tạo thêm 3 file mới "login_spec.cy.js", "cart_spec.cy.js", "checkout_spec.cy.js"
```
cypress-exercise/
├── cypress/
│   ├── e2e/
│   │   ├── login_spec.cy.js
│   │   ├── cart_spec.cy.js
│   │   └── checkout_spec.cy.js
```
Trong terminal nhập 
```
npx cypress open
```
Chọn trình duyệt
<img width="1919" height="565" alt="Screenshot 2026-01-14 134110" src="https://github.com/user-attachments/assets/4fea3a1a-b6fc-4677-855c-b367d634bf78" />

Ấn vào 1 trong 3 file để bắt đầu kiểm thử trang website
<img width="1879" height="585" alt="Screenshot 2026-01-14 134222" src="https://github.com/user-attachments/assets/a89be932-8456-40a2-ada6-93186e3fefba" />

#### 7. Kết quả
<img width="1919" height="1032" alt="Screenshot 2026-01-14 124734" src="https://github.com/user-attachments/assets/4b324e22-4481-4a90-bdbc-a2771228c05f" />
<img width="1919" height="1037" alt="Screenshot 2026-01-14 131305" src="https://github.com/user-attachments/assets/a72c16d2-b4ec-45cb-b5bd-00bf26554f08" />
<img width="1914" height="1030" alt="Screenshot 2026-01-14 131407" src="https://github.com/user-attachments/assets/9444aca3-c8aa-4e2a-8de4-67c59f625c11" />

