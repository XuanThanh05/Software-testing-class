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
