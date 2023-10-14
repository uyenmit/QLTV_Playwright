const { test, expect } = require('@playwright/test');
function viewLater() {

    test('view Later', async ({ page }) => {
        await page.goto('https://qa.qltv.mobiedu.vn/');
        await expect(page).toHaveTitle(/mobiEdu QLTV/);
        await page.getByRole('button', { name: "Đăng nhập" }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/dang-nhap');
        await page.getByPlaceholder('Tài khoản').fill('trannam@gmail.com');
        await page.getByPlaceholder('Mật khẩu').fill('iNet@123');
        await page.getByRole('button', { name: 'ĐĂNG NHẬP' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/home');
        await page.getByRole('link', { name: 'user Trần Uyên Phương' }).click();
        await page.getByRole('link', { name: 'Tài liệu xem sau' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/documentsViewLater');
        await page.getByRole('row', { name: '1 Dưới Một Mái Nhà Ở Paris close-circle' }).getByLabel('', { exact: true }).click();
        await page.getByRole('button', { name: 'eye Xem' }).click();
        await expect(page).toHaveURL('https://qa.qltv.mobiedu.vn/user/searchPublication/publication?id=607');

    })
}
viewLater();