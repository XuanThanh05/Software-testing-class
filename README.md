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

Ấn vào 1 trong 3 file để bắt đầu kiểm thử trang website

Nhận kết quả