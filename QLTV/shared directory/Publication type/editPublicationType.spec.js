const { test, expect } = require('@playwright/test');
function editT () {

    test('Edit Publication Type', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
      
        await expect(page).toHaveTitle(/mobiEdu QLTV/);

        await page.getByRole('button', {name: "Đăng nhập"}).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 

        await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 

        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');

        await page.getByText('Danh mục dùng chung').click();

        await page.getByRole('link', { name: 'Loại ấn phẩm' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/categoryManager');

        await page.getByRole('row', { name: '10 S4-6T Sách cho bé từ 4-6 tuổi Sửa Xóa' }).getByRole('button').nth(0).click();
        
        await page.getByLabel('Loại ấn phẩm', { exact: true }).click();

        await page.getByLabel('Loại ấn phẩm', { exact: true }).clear();

        await page.getByLabel('Loại ấn phẩm', { exact: true }).fill('Sách cho bé từ 5-6 tuổi');
        
        await page.getByLabel('Ký hiệu', { exact: true }).click();

        await page.getByLabel('Ký hiệu', { exact: true }).clear();

        await page.getByLabel('Ký hiệu', { exact: true }).fill('S6-5T');

        await page.getByRole('button', { name: 'Lưu' }).click();

        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();


      });
}
editT ();  