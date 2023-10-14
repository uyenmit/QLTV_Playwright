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

function addS () {

  test('add Supply', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Nguồn nhập', exact: true }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/supplyManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Ký hiệu', { exact: true }).fill('NN1');
      
      await page.getByLabel('Nguồn nhập', { exact: true }).fill('Nguồn nhập 1'); 

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Thêm mới thành công')).toBeVisible();

    });
}

function addSNname () {

  test('add Supply no name', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Nguồn nhập', exact: true }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/supplyManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Ký hiệu', { exact: true }).fill('NN1');
        
      await page.getByLabel('Nguồn nhập', { exact: true }).fill(''); 

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Nguồn nhập không được để trống!')).toBeVisible();

      });
}

function addSNsymbol () {

  test('add Supply no symbol', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Nguồn nhập', exact: true }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/supplyManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Ký hiệu', { exact: true }).fill('');
      
      await page.getByLabel('Nguồn nhập', { exact: true }).fill('Kho');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Ký hiệu không được để trống!')).toBeVisible();


    });
}
function addSduplicatedata () {
  test('add Supply duplicatedata', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Nguồn nhập', exact: true }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/supplyManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Ký hiệu', { exact: true }).fill('NN1');
    
    await page.getByLabel('Nguồn nhập', { exact: true }).fill('Nguồn nhập 1');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Thêm mới không thành công! Mã đã tồn tại')).toBeVisible();
  });
}

function main() {
  beforeEach();
  addS();
  addSNname();
  addSNsymbol();
  addSduplicatedata();
}
main();