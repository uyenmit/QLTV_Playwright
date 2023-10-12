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

function addA () {

  test('add Author', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Tác giả' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/authorManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Ký hiệu', { exact: true }).fill('NTX');
      
      await page.getByLabel('Tên tác giả', { exact: true }).fill('Nguyễn Thị Xuân');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Thêm mới thành công')).toBeVisible();

    });
}

function addANsymbol () {

  test('add Author no symbol', async ({ page }) => {
  
      await page.getByText('Danh mục dùng chung').click();
  
      await page.getByRole('link', { name: 'Tác giả' }).click();
  
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/authorManager');
  
      await page.getByRole('button', { name: 'Thêm mới' }).click();
  
      await page.getByLabel('Ký hiệu', { exact: true }).fill('');
        
      await page.getByLabel('Tên tác giả', { exact: true }).fill('Nguyễn Thị Xuân1');
  
      await page.getByRole('button', { name: 'Lưu' }).click();
  
      await expect(page.getByText('Ký hiệu không được để trống!')).toBeVisible();
  
    });
}

function addANName () {

  test('add Author no name', async ({ page }) => {
    
      await page.getByText('Danh mục dùng chung').click();
    
      await page.getByRole('link', { name: 'Tác giả' }).click();
    
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/authorManager');
    
      await page.getByRole('button', { name: 'Thêm mới' }).click();
    
      await page.getByLabel('Ký hiệu', { exact: true }).fill('NTX1');
          
      await page.getByLabel('Tên tác giả', { exact: true }).fill('');
    
      await page.getByRole('button', { name: 'Lưu' }).click();
    
      await expect(page.getByText('Tên tác giả không được để trống!')).toBeVisible();
    
    });
}
function addAduplicatedata () {

  test('add Author duplicatedata', async ({ page }) => {
  
      await page.getByText('Danh mục dùng chung').click();
  
      await page.getByRole('link', { name: 'Tác giả' }).click();
  
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/authorManager');
  
      await page.getByRole('button', { name: 'Thêm mới' }).click();
  
      await page.getByLabel('Ký hiệu', { exact: true }).fill('NTX');
        
      await page.getByLabel('Tên tác giả', { exact: true }).fill('Nguyễn Thị Xuân');
  
      await page.getByRole('button', { name: 'Lưu' }).click();
  
      await expect(page.getByText('Thêm mới không thành công! Mã đã tồn tại')).toBeVisible();
  
      });
}

function main() {
  beforeEach();
  addA();
  addANsymbol();
  addANName();
  addAduplicatedata();
}
main();