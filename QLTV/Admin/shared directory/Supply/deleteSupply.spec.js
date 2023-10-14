const { test, expect } = require('@playwright/test');
function deleteS () {

    test('delete Supply', async ({ page }) => {
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

        await page.getByRole('row', { name: '9 NN2 Nguồn nhập 2 Sửa Xóa' }).getByRole('button').nth(1).click();
        
        await page.getByRole('tooltip').getByRole('button', { name: 'Xóa' }).click();

        await expect(page.getByText('Xóa thành công!')).toBeVisible();
    });
}
deleteS ();  