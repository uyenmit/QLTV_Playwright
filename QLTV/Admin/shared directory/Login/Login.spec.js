// @ts-check
const { test, expect } = require('@playwright/test');

function loginPass () {

test('login Pass', async ({ page }) => {
    await page.goto('https://qa.qltv.mobiedu.vn/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/mobiEdu QLTV/);
    await page.getByRole('button', {name: "Đăng nhập"}).click();
    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
    await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 
    await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 
    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');

});
};

function loginWUser () {

  test('login wrong User', async ({ page }) => {
    await page.goto('https://qa.qltv.mobiedu.vn/');
    await expect(page).toHaveTitle(/mobiEdu QLTV/);

    await page.getByRole('button', {name: "Đăng nhập"}).click();
    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

    await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet'); 
    await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 
    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  });
};

function loginWPwd () {

  test('login wrong Password', async ({ page }) => {
      await page.goto('https://qa.qltv.mobiedu.vn/');
      await expect(page).toHaveTitle(/mobiEdu QLTV/);
  
      await page.getByRole('button', {name: "Đăng nhập"}).click();
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap')
  
      await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 
      await page.getByPlaceholder('Mật khẩu').fill('iNet@'); 
      await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    });
  }
    
function loginEPwd () {

test('login empty Password', async ({ page }) => {
     await page.goto('https://qa.qltv.mobiedu.vn/');
     await expect(page).toHaveTitle(/mobiEdu QLTV/);
      
     await page.getByRole('button', {name: "Đăng nhập"}).click();
     await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
      
     await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 
     await page.getByPlaceholder('Mật khẩu').fill(''); 
     await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
     expect (page.getByText('Vui lòng nhập mật khẩu!'));

                                                                                                                                                                                               
  });
};

function loginEUser () {

  test('login empty User', async ({ page }) => {
      await page.goto('https://qa.qltv.mobiedu.vn/');
      await expect(page).toHaveTitle(/mobiEdu QLTV/);
  
      await page.getByRole('button', {name: "Đăng nhập"}).click();
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap')
  
      await page.getByPlaceholder('Tài khoản').fill(''); 
      await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 
      await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
      expect (page.getByText('Vui lòng nhập số điện thoại hoặc email!'))
    });
  };


function main() {
  loginPass();
  loginWUser();
  loginWPwd();
  loginEPwd();
  loginEUser();
  
}
main();