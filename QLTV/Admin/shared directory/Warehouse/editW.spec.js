const { test, expect } = require('@playwright/test');
function editW () {

    test('Edit Warehouse', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
      
        await expect(page).toHaveTitle(/mobiEdu QLTV/);

        await page.getByRole('button', {name: "Đăng nhập"}).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');

        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn'); 

        await page.getByPlaceholder('Mật khẩu').fill('iNet@123'); 

        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');

        await page.getByText('Danh mục dùng chung').click();

        await page.getByRole('link', { name: 'Kho ấn phẩm' }).click();

        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/storageAreaManager');

        await page.getByRole('row', {name: '6 KSTT Kho sách trinh thám'}).getByRole('button').first().click();
        
        await page.getByLabel('Ký hiệu', { exact: true }).click();

        await page.getByLabel('Ký hiệu', { exact: true }).clear();

        await page.getByLabel('Ký hiệu', { exact: true }).fill('QA5');
        
        await page.getByLabel('Tên kho', { exact: true }).click();

        await page.getByLabel('Tên kho', { exact: true }).clear();

        await page.getByLabel('Tên kho', { exact: true }).fill('Kho 5');

        await page.getByRole('button', { name: 'Lưu' }).click();

        await expect(page.getByText('Cập nhật thành công!')).toBeVisible();


      });
}
editW ();  