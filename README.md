# OrangeHRM Automation Testing

Automation Testing menggunakan **Cypress** dengan metode **Page Object Model (POM)** dan **Network Intercept** pada website OrangeHRM Demo.

# Features Tested

## Login

- TC01 Login dengan username dan password valid
- TC02 Username kosong
- TC03 Password kosong
- TC04 Username dan Password kosong
- TC05 Username salah
- TC06 Password salah
- TC07 Username dan Password salah
- TC08 Logout berhasil

---

## Directory

- TC01 Open Directory
- TC02 Search Employee
- TC03 Search tanpa input
- TC04 Reset Search
- TC05 Search Invalid Employee
- TC06 Open Job Title Dropdown
- TC07 Open Location Dropdown
- TC08 Refresh Directory

---

## Recruitment

- TC01 Open Recruitment
- TC02 Search Candidate Name
- TC03 Search tanpa input
- TC04 Reset Search
- TC05 Search Invalid Candidate
- TC06 Open Vacancy Dropdown
- TC07 Open Hiring Manager Dropdown
- TC08 Refresh Recruitment

---

# Prerequisites

Pastikan sudah menginstall:

- Node.js
- Git
- Visual Studio Code

Cek versi:

```
node -v
npm -v
git --version
```

---

# Installation

Clone repository

```
git clone https://github.com/Irfan5995/orangehrm-automation.git
```

Masuk ke folder project

```
cd REPOSITORY
```

Install dependency

```
npm install
```

---

# Running Test

## Membuka Cypress

```
npx cypress open
```

Pilih

```
E2E Testing
```

Kemudian jalankan

```
login.cy.js
```

atau

```
directory.cy.js
```

atau

```
recruitment.cy.js
```

---

## Run melalui Terminal

Menjalankan seluruh test

```
npx cypress run
```

Menjalankan Login saja

```
npx cypress run --spec cypress/e2e/login.cy.js
```

Menjalankan Directory saja

```
npx cypress run --spec cypress/e2e/directory.cy.js
```

Menjalankan Recruitment saja

```
npx cypress run --spec cypress/e2e/recruitment.cy.js
```

---

# Notes

- Website yang digunakan adalah OrangeHRM Demo.
- Beberapa module pada website demo dapat berubah sewaktu-waktu.
- Apabila terdapat perubahan UI atau permission (contohnya Directory menjadi **403 Module Forbidden**), maka locator atau test case mungkin perlu disesuaikan.

---

# Author

Nama : R. Irfan Ismail

Sanbercode QA Engineer Course
