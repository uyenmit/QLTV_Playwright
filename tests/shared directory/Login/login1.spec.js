// import fs from 'fs';
// import path from 'path';
// import { test, expect } from '@playwright/test';
// import { parse } from 'csv-parse/sync';


// const { test, expect } = require('@playwright/test');


// const records = parse(fs.readFileSync(path.join(__dirname, '../login.csv')), {
//   columns: true,
//   skip_empty_lines: true
// });

// function login1 () {
// for (const record of records) {
//     test(`data: ${record.Taikhoan} ${record.Matkhau}`, async ({ page }) => {
//     // await page.goto('https://qa.qltv.mobiedu.vn/');
//     // // await expect(page).toHaveTitle(/mobiEdu QLTV/);
//     //     await page.getByRole('button', {name: "Đăng nhập"}).click();
//     // await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
//     // await page.getByPlaceholder('Tài khoản').fill(record.Taikhoan); 
//     // await page.getByPlaceholder('Mật khẩu').fill(record.Matkhau); 
//     // await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
//     // await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');


//     await page.goto('https://qa.qltv.mobiedu.vn/');
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/mobiEdu QLTV/);
//     await page.getByRole('button', { name: 'Đăng nhập', exact: true }).click();
//     await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
//     /**Fill input form login */
//     await page.getByPlaceholder('Tài khoản').fill(record.Taikhoan);
//     await page.getByPlaceholder('Mật khẩu').fill(record.Matkhau);
//     /**click btn login */
//     await page.click('form#login button[type=\"submit\"] > span');
//     await expect(page).toHaveURL(/.*\/admin\/home/);

// });
// }
// }
// login1();

// const records = parse(fs.readFileSync("tests/shared directory/Login/inputlogin.csv"), {
//   columns: true,
//   skip_empty_lines: true
// });
// function testCSV() {
//   test('login', async ({ page }) => {
//     for (let i = 0; i < records.length; i++) {
//       const element = records[i];
//       await page.goto('https://qa.qltv.mobiedu.vn');
//       await expect(page).toHaveTitle(/mobiEdu QLTV/);
//       await page.getByRole('button', { name: 'Đăng nhập' }).click();
//       await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
//       await page.getByPlaceholder('Tài khoản').fill(element?.acc);
//       await page.getByPlaceholder('Mật khẩu').fill(element?.pwd);
//       await page.getByRole('button', { name: 'Đăng nhập' }).click();
//       await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
//       await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
//     }
//   });
// }
const { test, expect } = require('@playwright/test');
import fs from 'fs';
import path from 'path';
import { } from '@playwright/test';
import { parse } from 'csv-parse/sync';

const records = parse(fs.readFileSync("tests/shared directory/Login/inputlogin.csv"),
  {
    columns: true,
    skip_empty_lines: true
  });

function loginfile() {
  for (const record of records) {
    test(`data:${record.Tentaikhoan} ${record.Matkhau}`, async ({ page }) => {
      await page.goto('https://qa.qltv.mobiedu.vn/');
      await expect(page).toHaveTitle(/mobiEdu QLTV/);
      await page.getByRole('button', { name: 'Đăng nhập' }).click();
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
      await page.getByPlaceholder('Tài khoản').fill(record.Tentaikhoan);
      await page.getByPlaceholder('Mật khẩu').fill(record.Matkhau);
      await page.getByRole('button', { name: 'Đăng nhập' }).click();
      await expect(page.getByText('Đăng nhập thành công')).toBeVisible();
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/home');

    });
  }
}

loginfile()






//testCSV();


