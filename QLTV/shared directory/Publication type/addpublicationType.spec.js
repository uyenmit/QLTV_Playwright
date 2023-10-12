const { test, expect } = require('@playwright/test');
function beforeEach() {
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

function addT() {

  test('add Publication type', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Loại ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/categoryManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Loại ấn phẩm', { exact: true }).fill('Sách luyện tập');

    await page.getByLabel('Ký hiệu', { exact: true }).fill('SLT');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Thêm mới thành công')).toBeVisible();

  });
}

function addTNName() {

  test('add Publication type no name', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Loại ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/categoryManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Loại ấn phẩm', { exact: true }).fill('');

    await page.getByLabel('Ký hiệu', { exact: true }).fill('SLT2');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Loại ấn phẩm không được để trống!')).toBeVisible();

  });
}

function addTNSymbol() {

  test('add Publication type no symbol', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Loại ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/categoryManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Loại ấn phẩm', { exact: true }).fill('Sách luyện tập 1');

    await page.getByLabel('Ký hiệu', { exact: true }).fill('');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Ký hiệu không được để trống!')).toBeVisible();

  });
}

function addTduplicatedata() {

  test('add Publication duplicatedata', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Loại ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/categoryManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Loại ấn phẩm', { exact: true }).fill('Sách luyện tập');

    await page.getByLabel('Ký hiệu', { exact: true }).fill('SLT');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Thêm mới không thành công! Mã đã tồn tại')).toBeVisible();

  });
}

function addTquickly() {
  test('add Publication type quickly', async ({ page }) => {
    await page.getByText('Danh mục dùng chung').click();
    await page.getByRole('link', { name: 'Loại ấn phẩm' }).click();
    await page.getByRole('button', { name: 'Nhập nhanh' }).click();
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('input[type="file"]').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([`C:/Users/Admin/Downloads/Mau_nhap_nhanh_loai_an_pham (1).xlsx`])
    await page.getByRole('button', { name: 'Tải lên' }).click();
    await expect(page.locator('span').filter({ hasText: 'Thêm mới thành công 3/3 bản ghi' })).toBeVisible();
    await expect(page.getByLabel('Nhập nhanh từ file excel').getByText('Thêm mới thành công 3/3 bản ghi')).toBeVisible();
    // locator('span').filter({ hasText: 'Thêm mới thành công 4/4 bản ghi' })
    // getByLabel('Nhập nhanh từ file excel').getByText('Thêm mới thành công 4/4 bản ghi')

  });
}

function main() {
  beforeEach();
  addT();
  addTNName();
  addTNSymbol();
  addTduplicatedata();
  addTquickly();

}
main();