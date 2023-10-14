const { test, expect } = require('@playwright/test');
function editA() {

  test('Edit Author', async ({ page }) => {
    await page.goto('https://qa.qltv.mobiedu.vn/');

    await expect(page).toHaveTitle(/mobiEdu QLTV/);

    await page.getByRole('button', { name: "Đăng nhập" }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

    await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');

    await page.getByPlaceholder('Mật khẩu').fill('iNet@123');

    await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');

    await page.getByText('Danh mục dùng chung').click();

    await page.getByRole('link', { name: 'Tác giả' }).click();

    await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/authorManager');

    await page.getByRole('row', { name: '6 NTX Nguyễn Thị Xuân Sửa Xóa' }).getByRole('button').first().click();

    await page.getByLabel('Ký hiệu', { exact: true }).click();

    await page.getByLabel('Ký hiệu', { exact: true }).clear();

    await page.getByLabel('Ký hiệu', { exact: true }).fill('NTX2');

    await page.getByLabel('Tên tác giả', { exact: true }).click();

    await page.getByLabel('Tên tác giả', { exact: true }).clear();

    await page.getByLabel('Tên tác giả', { exact: true }).fill('Nguyễn Thị Xuân 2');

    await page.getByRole('button', { name: 'Lưu' }).click();

    await expect(page.getByText('Cập nhật thành công!')).toBeVisible();


  });
}
editA();  