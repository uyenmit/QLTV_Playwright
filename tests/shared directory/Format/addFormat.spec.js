const { test, expect } = require('@playwright/test');
function beforeEach () {
  // Khởi tạo trình duyệt trước khi chạy mỗi test case
  test.beforeEach(async ({ page }) => {
    // Mở trình duyệt và điều hướng đến trang mobiedu.vn
    await page.goto('https://qa.qltv.mobiedu.vn/dang-nhap');
    await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 

    await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 

    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
  });
};

function addF () {

  test('add Format', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Định dạng' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/formatManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Ký hiệu', { exact: true }).fill('CD');
      
      await page.getByLabel('Định dạng', { exact: true }).fill('Đĩa CD');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Thêm mới thành công')).toBeVisible();

    });
}

function addFNname () {

  test('add Format no name', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Định dạng' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/formatManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Ký hiệu', { exact: true }).fill('QA');
        
      await page.getByLabel('Định dạng', { exact: true }).fill(''); 

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Định dạng không được để trống!')).toBeVisible();

      });
}

function addFNsymbol () {

  test('add Format no symbol', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Định dạng' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/formatManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Ký hiệu', { exact: true }).fill('');
      
      await page.getByLabel('Định dạng', { exact: true }).fill('Kho');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Ký hiệu không được để trống!')).toBeVisible();


    });
}
function addFduplicatedata () {
  test('add Format duplicatedata', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Định dạng' }).click();

    await expect(page).toHaveURL('hhttps://qa.qltv.mobiedu.vn/admin/formatManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Ký hiệu', { exact: true }).fill('CD');
    
    await page.getByLabel('Định dạng', { exact: true }).fill('Đĩa CD');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Thêm mới không thành công! Mã đã tồn tại')).toBeVisible();
  });
}

function main() {
  beforeEach();
  addF();
  addFNname();
  addFNsymbol();
  addFduplicatedata();
}
main();