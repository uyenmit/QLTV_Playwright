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

function addL () {

  test('add language', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Ngôn ngữ' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/languageManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Ngôn ngữ', { exact: true }).fill('Tiếng Ba Lan');
      
      await page.getByLabel('Ký hiệu', { exact: true }).fill('(BL)');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Thêm mới thành công')).toBeVisible();

    });
}

function addLNname () {

    test('add language no name', async ({ page }) => {
  
      await page.getByText('Danh mục dùng chung').click();
  
      await page.getByRole('link', { name: 'Ngôn ngữ' }).click();
  
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/languageManager');
  
      await page.getByRole('button', { name: 'Thêm mới' }).click();
  
      await page.getByLabel('Ngôn ngữ', { exact: true }).fill('');
        
      await page.getByLabel('Ký hiệu', { exact: true }).fill('(BL)');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Ngôn ngữ không được để trống!')).toBeVisible();

    });
}

function addLNSymbol () {

    test('add language no Symbol', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();
  
      await page.getByRole('link', { name: 'Ngôn ngữ' }).click();
  
      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/languageManager');
  
      await page.getByRole('button', { name: 'Thêm mới' }).click();
  
      await page.getByLabel('Ngôn ngữ', { exact: true }).fill('Tiếng Ba Lan 1');
      
      await page.getByLabel('Ký hiệu', { exact: true }).fill('');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Ký hiệu không được để trống!')).toBeVisible();

    });
}

function addLduplicatedata () {

    test('add language duplicatedata', async ({ page }) => {

      await page.getByText('Danh mục dùng chung').click();

      await page.getByRole('link', { name: 'Ngôn ngữ' }).click();

      await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/languageManager');

      await page.getByRole('button', { name: 'Thêm mới' }).click();

      await page.getByLabel('Ngôn ngữ', { exact: true }).fill('Tiếng Ba Lan');
    
      await page.getByLabel('Ký hiệu', { exact: true }).fill('(BL)');

      await page.getByRole('button', { name: 'Lưu' }).click();

      await expect(page.getByText('Thêm mới không thành công! Mã đã tồn tại')).toBeVisible();

    });
}

function main() {
  beforeEach();
  addL();
  addLNname();
  addLNSymbol();
  addLduplicatedata();

}
main();