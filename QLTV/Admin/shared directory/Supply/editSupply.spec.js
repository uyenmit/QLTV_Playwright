const { test, expect } = require('@playwright/test');
function editS () {

    test('Edit Supply', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
      
        await expect(page).toHaveTitle(/mobiEdu QLTV/);

        await page.getByRole('button', {name: "Đăng nhập"}).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 

        await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 

        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');

        await page.getByText('Danh mục dùng chung').click();

        await page.getByRole('link', { name: 'Nguồn nhập', exact: true }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/supplyManager');

        await page.getByRole('row', { name: '9 NN1 Nguồn nhập 1 Sửa Xóa' }).getByRole('button').first().click();
        
        await page.getByLabel('Ký hiệu', { exact: true }).click();

        await page.getByLabel('Ký hiệu', { exact: true }).clear();

        await page.getByLabel('Ký hiệu', { exact: true }).fill('NN2');
        
        await page.getByLabel('Nguồn nhập', { exact: true }).click();

        await page.getByLabel('Nguồn nhập', { exact: true }).clear();

        await page.getByLabel('Nguồn nhập', { exact: true }).fill('Nguồn nhập 2');

        await page.getByRole('button', { name: 'Lưu' }).click();

        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();

      });
}
editS ();  