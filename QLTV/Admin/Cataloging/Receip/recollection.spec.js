const { test, expect } = require('@playwright/test');
function recollection() {

    test('recollection', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
        await expect(page).toHaveTitle(/mobiEdu QLTV/);
        await page.getByRole('button', { name: "Đăng nhập" }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('anhnv1@inet.vn');
        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/home');
        await page.getByText('Biên mục', { exact: true }).click();
        await page.getByRole('link', { name: 'Hồi cố ấn phẩm' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/admin/recollectionManager');
        await page.getByRole('row', { name: '9 KS_TIEU_THUYET-5-4 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien' }).getByLabel('').check();
        await page.getByRole('row', { name: '10 KS_TIEU_THUYET-5-5 Kẻ Tầm Da Kho sách tiểu thuyết J.R.R.Tolkien' }).getByLabel('').check();
        await page.getByRole('button', { name: 'Hồi cố' }).click();
        await expect(page.getByText('Hồi cố thành công!')).toBeVisible();

    });
}
recollection();