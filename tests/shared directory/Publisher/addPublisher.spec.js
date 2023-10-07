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

function addP () {

  test('add Publisher', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Nhà xuất bản' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/publisherManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Mã nhà xuất bản', { exact: true }).fill('HH');
      
      await page.getByLabel('Tên nhà xuất bản', { exact: true }).fill('Hồng Hải');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Thêm mới thành công')).toBeVisible();

    });
}

function addPNSymbol () {

  test('add Publisher no symbol', async ({ page }) => {
  
      await page.getByText('Danh mục dùng chung').click();
  
      await page.getByRole('link', { name: 'Nhà xuất bản' }).click();
  
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/publisherManager');
  
      await page.getByRole('button', { name: 'Thêm mới' }).click();
  
      await page.getByLabel('Mã nhà xuất bản', { exact: true }).fill('');
        
      await page.getByLabel('Tên nhà xuất bản', { exact: true }).fill('Hồng Hải 1');
  
      await page.getByRole('button', { name: 'Lưu' }).click();
  
      await expect(page.getByText('Mã nhà xuất bản không được để trống!')).toBeVisible();
  
      });
  }

function addPNName () {

  test('add Publisher no name', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Nhà xuất bản' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/publisherManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Mã nhà xuất bản', { exact: true }).fill('HH1');
      
      await page.getByLabel('Tên nhà xuất bản', { exact: true }).fill('');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Tên nhà xuất bản không được để trống!')).toBeVisible();

    });
}
function addPDuplicatedata () {

  test('add Publisher duplicatedata', async ({ page }) => {
  
      await page.getByText('Danh mục dùng chung').click();
  
      await page.getByRole('link', { name: 'Nhà xuất bản' }).click();
  
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/publisherManager');
  
      await page.getByRole('button', { name: 'Thêm mới' }).click();
  
      await page.getByLabel('Mã nhà xuất bản', { exact: true }).fill('HH');
        
      await page.getByLabel('Tên nhà xuất bản', { exact: true }).fill('Hồng Hải');
  
      await page.getByRole('button', { name: 'Lưu' }).click();
  
      await expect(page.getByText('Thêm mới không thành công! Mã đã tồn tại')).toBeVisible();
  
      });
  }

function main() {
  beforeEach();
  addP();
  addPNSymbol();
  addPNName();
  addPDuplicatedata();

}
main();