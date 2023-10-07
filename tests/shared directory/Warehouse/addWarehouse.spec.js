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

function addW() {

  test('add Warehouse', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Kho ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/storageAreaManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Ký hiệu', { exact: true }).fill('QA1');

    await page.getByLabel('Tên kho', { exact: true }).fill('Kho so 1');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Thêm mới thành công')).toBeVisible();

  });
}

function addWMname() {

  test('add Warehouse empty name', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Kho ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/storageAreaManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Ký hiệu', { exact: true }).fill('QA9');

    await page.getByLabel('Tên kho', { exact: true }).fill('');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Tên kho không được để trống!')).toBeVisible();

  });
}

function addWMsymbol() {

  test('add warehouse missing symbol', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Kho ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/storageAreaManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Ký hiệu', { exact: true }).fill('');

    await page.getByLabel('Tên kho', { exact: true }).fill('Kho');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Ký hiệu không được để trống!')).toBeVisible();


  });
}
function addWduplicatedata() {
  test('add warehouse duplicatedata', async ({ page }) => {

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Kho ấn phẩm' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/storageAreaManager');

    await page.getByRole('button', { name: 'Thêm mới' }).click();

    await page.getByLabel('Ký hiệu', { exact: true }).fill('KTTNG1');

    await page.getByLabel('Tên kho', { exact: true }).fill('Kho');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Thêm mới không thành công! Mã đã tồn tại')).toBeVisible();
  });
}

function addWquickly() {
  test('add warehouse quickly', async ({ page }) => {
    await page.getByText('Danh mục dùng chung').click();
    await page.getByRole('link', { name: 'Kho ấn phẩm' }).click();
    await page.getByRole('button', { name: 'Nhập nhanh' }).click();
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('input[type="file"]').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([`C:/Users/Admin/Downloads/Mau_nhap_nhanh_kho_an_pham (1).xlsx`])
    //await page.locator('input[type="file"]').setInputFiles('Mau_nhap_nhanh_kho_an_pham (1).xlsx');
    await page.getByRole('button', { name: 'Tải lên' }).click();
    // await expect(page.getByText('Thêm mới thành công 4/4 bản ghi')).toBeVisible();
    await expect(page.locator('span').filter({ hasText: 'Thêm mới thành công 4/4 bản ghi' })).toBeVisible();
    await expect(page.getByLabel('Nhập nhanh từ file excel').getByText('Thêm mới thành công 4/4 bản ghi'))

      .toBeVisible();
    // locator('span').filter({ hasText: 'Thêm mới thành công 4/4 bản ghi' })
    // getByLabel('Nhập nhanh từ file excel').getByText('Thêm mới thành công 4/4 bản ghi')

  });
}

function main() {
  beforeEach();
  addW();
  addWMname();
  addWMsymbol();
  addWduplicatedata();
  addWquickly();
}
main();