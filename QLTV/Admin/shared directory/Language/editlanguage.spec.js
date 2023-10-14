const { test, expect } = require('@playwright/test');
function editL () {

    test('Edit language', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
      
        await expect(page).toHaveTitle(/mobiEdu QLTV/);

        await page.getByRole('button', {name: "Đăng nhập"}).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 

        await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 

        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');

        await page.getByText('Danh mục dùng chung').click();

        await page.getByRole('link', { name: 'Ngôn ngữ' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/languageManager');

        await page.getByTitle('2').getByText('2').click();

        await page.getByRole('row', { name: '6 (BL) Tiếng Ba Lan Sửa Xóa' }).getByRole('button').first().click();
        
        await page.getByLabel('Ngôn ngữ', { exact: true }).click();

        await page.getByLabel('Ngôn ngữ', { exact: true }).clear();

        await page.getByLabel('Ngôn ngữ', { exact: true }).fill('Tiếng Ba Lan 1');
        
        await page.getByLabel('Ký hiệu', { exact: true }).click();

        await page.getByLabel('Ký hiệu', { exact: true }).clear();

        await page.getByLabel('Ký hiệu', { exact: true }).fill('BL');

        await page.getByRole('button', { name: 'Lưu' }).click();

        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();


      });
}
editL ();  